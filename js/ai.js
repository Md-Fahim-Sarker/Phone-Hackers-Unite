        const resultDiv = document.getElementById('result');
        const startButton = document.getElementById('startButton');
        const submitText = document.getElementById('submitText');
        const textInput = document.getElementById('textInput');
        const output = document.getElementById('output');
        const apiKey = 'AIzaSyBx3H651T2Hx6Th_zGqg21xIQK4z7zSBPA'; // Replace with your actual Gemini API key

        // Initialize SpeechRecognition
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        // Initialize SpeechSynthesis
        let isSpeaking = false;
        let maleVoice = null;

        // Function to get available voices and select a male voice
        function getMaleVoice() {
            const voices = window.speechSynthesis.getVoices();
            
            // Filter for male voices, prefer English or Bangla if possible
            maleVoice = voices.find(voice => 
                (voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('man')) &&
                (voice.lang.includes('en') || voice.lang.includes('bn'))
            );

            // If a specific male voice is not found, fall back to the first available male voice
            if (!maleVoice) {
                maleVoice = voices.find(voice => voice.gender === 'male') || voices[0];
            }
        }

        // Fetch voices when they are loaded
        window.speechSynthesis.onvoiceschanged = () => {
            getMaleVoice();
        };

        // Predefined responses
        const responses = {
            en: {
                'hi': 'Hi, my name is Md Fahim Sarker.',
                'hello': 'Hello, I am Md Fahim Sarker. How can I assist you today?',
                'what is your name': 'My name is Md Fahim Sarker.',
                'Fahim': 'Yes Sir',
                'fahim': 'Yes Sir',
                'how are you': 'I am just a program, but thanks for asking!'
            },
            bn: {
                '': ',        ?',
                '  ': '    ',
                '': ' ',
                ' ': '    ,     !'
            }
        };

        // Start listening when the button is clicked
        
            recognition.start();
        

        // Handle the recognition result
        recognition.onresult = function(event) {
            const voiceInput = event.results[0][0].transcript.toLowerCase();
            const lang = detectLanguage(voiceInput);
            processQuery(voiceInput, lang);
        };

        // Handle text input submission
        submitText.addEventListener('click', () => {
            const text = textInput.value.toLowerCase();
            if (text) {
                const lang = detectLanguage(text);
                processQuery(text, lang);
                textInput.value = ''; // Clear the text input after submission
            }
        });

        // Function to detect language (Bangla or English)
        function detectLanguage(text) {
            const banglaChars = /[\u0980-\u09FF]/;
            return banglaChars.test(text) ? 'bn' : 'en';
        }

        // Function to process the query with predefined responses, Gemini AI, or Wikipedia
        async function processQuery(query, lang) {
            if (responses[lang][query]) {
                // If there is a predefined response
                const response = responses[lang][query];
                const formattedResponse = formatResponse(response);
                speak(formattedResponse, lang);
               resultDiv.textContent = formattedResponse;
               resultDiv.className = 'message success';
               resultDiv.style.display = 'block';
            } else {
                const wikiSummary = await getWikipediaSummary(query, lang);
                
                if (!wikiSummary) {
                    // If no Wikipedia summary, use Gemini AI
                    await getGeminiAIResponse(query, lang);
                } else {
                    const formattedSummary = formatResponse(wikiSummary);
                    speak(formattedSummary, lang);
                    resultDiv.textContent = formattedSummary;
                    resultDiv.className = 'message success';
                    resultDiv.style.display = 'block';
                }
            }
        }

        // Function to format the response by removing Markdown-like elements
        function formatResponse(text) {
            return text
                .replace(/\* \*\*/g, '') // Remove * **
                .replace(/\*\*/g, '')    // Remove **
                .replace(/```/g, '');    // Remove ```
        }

        // Function to query Gemini AI API
        async function getGeminiAIResponse(query, lang) {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
            const requestData = {
                contents: [
                    {
                        parts: [
                            { text: query }
                        ]
                    }
                ]
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });

                const data = await response.json();

                if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
                    const assistantResponse = data.candidates[0].content.parts[0].text;
                    const formattedResponse = formatResponse(assistantResponse);
                    speak(formattedResponse, lang);
                    resultDiv.textContent = formattedResponse;
                    resultDiv.className = 'message success';
                    resultDiv.style.display = 'block';
                } else {
                    speak("There seems to be a problem, please contact The Developer Md Fahim Sarkar.", lang);
                   resultDiv.textContent = "There seems to be a problem, please contact The Developer Md Fahim Sarkar.";
                   resultDiv.className = 'message error';
                   resultDiv.style.display = 'block';
                }
            } catch (error) {
                console.error('Error:', error);
                speak("There seems to be a problem, please contact The Developer Md Fahim Sarkar.", lang);
                   resultDiv.textContent = "There seems to be a problem, please contact The Developer Md Fahim Sarkar.";
                   resultDiv.className = 'message error';
                   resultDiv.style.display = 'block';
            }
        }

        // Function to query Wikipedia API
        async function getWikipediaSummary(query, lang) {
            const apiUrl = lang === 'bn'
                ? `https://bn.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
                : `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.extract) {
                    return data.extract;
                } else {
                    return null; // No summary found
                }
            } catch (error) {
                console.error('Error:', error);
                return null;
            }
        }

        // Function to speak the text with the selected male voice
        function speak(text, lang) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang === 'bn' ? 'bn-BD' : 'en-US'; // Set language
            utterance.pitch = 1;      // Set pitch
            utterance.rate = 1;       // Set rate (speed)
            utterance.volume = 1;     // Set volume
            
            // Set the male voice
            if (maleVoice) {
                utterance.voice = maleVoice;
            }

            utterance.onend = function() {
                // Restart listening after speech synthesis ends
                recognition.start();
            };

            window.speechSynthesis.speak(utterance);
            isSpeaking = true;
        }

        // Handle the end of speech recognition and synthesis
        recognition.onend = function() {
            if (!isSpeaking) {
                recognition.start();
            }
        };

        // Reset isSpeaking flag when speech synthesis ends
        window.speechSynthesis.onend = function() {
            isSpeaking = false;
        };

function back() {
  window.history.back();
}