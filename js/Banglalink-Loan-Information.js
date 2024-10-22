async function fetchInfo(event) {
    event.preventDefault(); 
    const phoneNumber = document.getElementById('phoneNumber').value;
    const resultDiv = document.getElementById('result');

    if (!/^019/.test(phoneNumber)) {
        resultDiv.textContent = "❌ Error: This is not a Banglalink number.";
        resultDiv.className = 'message error';
        resultDiv.style.display = 'block';
        return;
    }

    const apiUrl = `https://myblapi.banglalink.net/api/v1/emergency-balance/${encodeURIComponent(phoneNumber)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "SUCCESS" && data.data) {
            const { id, msisdn, due_loan, expires_in } = data.data;
            if (id && msisdn && due_loan !== undefined && expires_in) {
                const reply = `
                    ✅ ID: ${id}<br>
                    📞 Phone Number: ${msisdn}<br>
                    💰 Outstanding Loan: ${due_loan} Taka<br>
                    📆 Expiration Date: ${expires_in}<br>
                `;
                resultDiv.innerHTML = reply;
                resultDiv.className = 'message success';
                resultDiv.style.display = 'block';
            } else {
                resultDiv.textContent = "❌ Error: No loan has been taken on this number.";
                resultDiv.className = 'message error';
                resultDiv.style.display = 'block';
            }
        } else {
            resultDiv.textContent = "❌ Error: There was a problem retrieving the information.";
            resultDiv.className = 'message error';
            resultDiv.style.display = 'block';
        }
    } catch (error) {
        resultDiv.textContent = "❌ Error: There is a problem with the server.";
        resultDiv.className = 'message error';
        resultDiv.style.display = 'block';
    }
}

function backtoindex() {
    window.history.back();
}