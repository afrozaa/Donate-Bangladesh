
// Function to get input value by ID
function getInputById(id) {
    const inputElement = document.getElementById(id);
    return inputElement ? inputElement.value : 0;
}

// Function to get text value by ID (for balance and card amounts)
function getTextValueById(id) {
    const element = document.getElementById(id);
    return element ? element.innerText : 0;
}

// Function to validate if the donation amount is positive
function validationCheck(value) {
    return value > 0;
}

// Function to get the current date in a readable format
function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}



document.getElementById('card-1-btn').addEventListener('click', function () {
    const inputValue = parseFloat(getInputById('donate-now'));
    const cardBalance = parseFloat(getTextValueById('card-balance'));
    const mainBalance = parseFloat(getTextValueById('main-balance'));

    const currentDate = getCurrentDate();

    if (mainBalance < inputValue) {
        alert("Donation amount cannot be greater than main balance");
    } else {
        if (validationCheck(inputValue)) {
            const newCardBalance = cardBalance + inputValue;
            const newBalance = mainBalance - inputValue;

            document.getElementById('card-balance').innerText = newCardBalance;
            document.getElementById('main-balance').innerText = newBalance;

            const newHTML = `
                <div class="card lg:card-side bg-base-100 shadow-x1">
                    <div class="card-body">
                        <h2 class="card-title">${inputValue} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
                        <p>${currentDate}</p>
                    </div> 
                </div>`;
            
            const historyContainer = document.getElementById('history-form');
            historyContainer.innerHTML += newHTML;

            my_modal.showModal();

            document.getElementById("donate-now-1").value = "";
        } else {
            document.getElementById('input-1').value = "";
        }
    }
});

    
    