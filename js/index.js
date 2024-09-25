// Get main balance element and parse its value
const mainBalanceElement = document.getElementById('main-balance');
let mainBalance = parseFloat(mainBalanceElement.textContent); // Get main balance in BDT

// Function to update the balances
function updateBalances(cardId, inputAmount) {
    const cardBalanceElement = document.getElementById(cardId);
    let cardBalance = parseFloat(cardBalanceElement.textContent); // Get current card balance

    // Update card balance and main balance
    if (inputAmount > 0 && mainBalance >= inputAmount) {
        cardBalance += inputAmount;
        cardBalanceElement.textContent = cardBalance.toFixed(2) + " BDT"; // Update card balance display

        // Deduct from main balance
        mainBalance -= inputAmount;
        mainBalanceElement.textContent = mainBalance.toFixed(2) + " BDT"; // Update main balance display

        // Show modal for confirmation
        const modal = document.getElementById('my_modal');
        modal.showModal();
    } else {
        alert("Insufficient balance or invalid amount!");
    }
}

// Add event listeners to each donate button
document.querySelectorAll('button[id="donate-now"]').forEach((button, index) => {
    button.addEventListener('click', () => {
        const inputAmountElement = button.previousElementSibling; // Get the input amount element
        const inputAmount = parseFloat(inputAmountElement.value); // Get the value from input

        // Update balances based on which button was clicked
        if (index === 0) {
            updateBalances('card-balance-1', inputAmount); // For Noakhali
        } else if (index === 1) {
            updateBalances('card-balance-2', inputAmount); // For Feni
        } else if (index === 2) {
            updateBalances('card-balance-3', inputAmount); // For Quota Movement
        }

        // Clear the input amount after donation
        inputAmountElement.value = '';
    });
});
