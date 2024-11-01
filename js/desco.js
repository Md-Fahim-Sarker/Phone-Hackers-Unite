// Fetch info by Account Number or Meter Number
async function fetchInfo(event) {
    event.preventDefault(); 
    const inputNumber = document.getElementById('accountNumber').value.trim();
    const resultDiv = document.getElementById('result');
    
    // Check if input is valid
    if (!inputNumber || (!/^\d{8}$/.test(inputNumber) && !/^\d{9,}$/.test(inputNumber))) {
        resultDiv.textContent = "Invalid input. Please enter an 8-digit Account Number or a Meter Number greater than 8 digits.";
        resultDiv.className = 'message error';
        resultDiv.style.display = 'block';
        return;
    }

    // Determine if input is an account number or meter number
    if (/^\d{8}$/.test(inputNumber)) {
        await fetchInfoByAccount(inputNumber, resultDiv);
    } else {
        await fetchInfoByMeter(inputNumber, resultDiv);
    }
}

// Fetch info by Account Number
async function fetchInfoByAccount(accountNumber, resultDiv) {
    try {
        const response1 = await fetch(`https://prepaid.desco.org.bd/api/tkdes/customer/getBalance?meterNo=&accountNo=${accountNumber}`);
        const data1 = await response1.json();
        const response2 = await fetch(`https://prepaid.desco.org.bd/api/tkdes/customer/getCustomerInfo?meterNo=&accountNo=${accountNumber}`);
        const data2 = await response2.json();
        const response3 = await fetch(`https://prepaid.desco.org.bd/api/common/getCustomerLocation?accountNo=${accountNumber}`);
        const data3 = await response3.json();

        if (data1.data.accountNo === accountNumber) {
            const reply = `
                ⚡DESCO Prepaid Meter info⚡<br>
                Remaining Balance: ${data1.data.balance}<br>
                Reading time: ${data1.data.readingTime}<br><br>
                🔰Consumer Information🔰<br>
                Name: ${data2.data.customerName}<br>
                Account No: ${data1.data.accountNo}<br>
                Meter No: ${data1.data.meterNo}<br>
                Address: ${data2.data.installationAddress}<br>
                Tariff Solution: ${data2.data.tariffSolution}<br>
                S & D: ${data2.data.SDName}<br>
                Transformer: ${data2.data.transformer}<br>
                Feeder: ${data2.data.feederName}<br>
                Installation Date: ${data2.data.installationDate}<br>
                Registration Date: ${data2.data.registerDate}<br>
                Meter Model: ${data2.data.meterModel}<br>
                Phase Type: ${data2.data.phaseType}<br>
                Zone: ${data3.data.zone}<br>
                Block: ${data3.data.block}<br>
                Route: ${data3.data.route}<br>
                Sanctioned Load: ${data2.data.sanctionLoad}<br>
                Latitude: ${data3.data.latitude}<br>
                Longitude: ${data3.data.longitude}
            `;
            resultDiv.innerHTML = reply;
            resultDiv.className = 'message success';
        } else {
            resultDiv.textContent = "Invalid Account Number. Please check the number.";
            resultDiv.className = 'message error';
        }
        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.textContent = "Error fetching data. Please try again later.";
        resultDiv.className = 'message error';
        resultDiv.style.display = 'block';
    }
}

// Fetch info by Meter Number
async function fetchInfoByMeter(meterNumber, resultDiv) {
    try {
        const response1 = await fetch(`https://prepaid.desco.org.bd/api/tkdes/customer/getBalance?accountNo=&meterNo=${meterNumber}`);
        const data1 = await response1.json();
        const response2 = await fetch(`https://prepaid.desco.org.bd/api/tkdes/customer/getCustomerInfo?accountNo=&meterNo=${meterNumber}`);
        const data2 = await response2.json();
        const response3 = await fetch(`https://prepaid.desco.org.bd/api/common/getCustomerLocation?accountNo=${data1.data.accountNo}`);
        const data3 = await response3.json();

        if (data1.data.meterNo === meterNumber) {
            const reply = `
                ⚡DESCO Prepaid Meter info⚡<br>
                Remaining Balance: ${data1.data.balance}<br>
                Reading time: ${data1.data.readingTime}<br><br>
                🔰Consumer Information🔰<br>
                Name: ${data2.data.customerName}<br>
                Account No: ${data1.data.accountNo}<br>
                Meter No: ${data1.data.meterNo}<br>
                Address: ${data2.data.installationAddress}<br>
                Tariff Solution: ${data2.data.tariffSolution}<br>
                S & D: ${data2.data.SDName}<br>
                Transformer: ${data2.data.transformer}<br>
                Feeder: ${data2.data.feederName}<br>
                Installation Date: ${data2.data.installationDate}<br>
                Registration Date: ${data2.data.registerDate}<br>
                Meter Model: ${data2.data.meterModel}<br>
                Phase Type: ${data2.data.phaseType}<br>
                Zone: ${data3.data.zone}<br>
                Block: ${data3.data.block}<br>
                Route: ${data3.data.route}<br>
                Sanctioned Load: ${data2.data.sanctionLoad}<br>
                Latitude: ${data3.data.latitude}<br>
                Longitude: ${data3.data.longitude}
            `;
            resultDiv.innerHTML = reply;
            resultDiv.className = 'message success';
        } else {
            resultDiv.textContent = "Invalid Meter Number. Please check the number.";
            resultDiv.className = 'message error';
        }
        resultDiv.style.display = 'block';
    } catch (error) {
        resultDiv.textContent = "Error fetching data. Please try again later.";
        resultDiv.className = 'message error';
        resultDiv.style.display = 'block';
    }
}

function backtoindex() {
    window.history.back();
}
