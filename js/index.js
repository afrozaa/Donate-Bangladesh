document.addEventListener("DOMContentLoaded", function () {
    // Get elements for main balance, donate buttons, and history
    const mainBalanceElem = document.getElementById("main-balance");
    const donateNoakhaliButton = document.getElementById("donate-now-noakhali");
    const donateFeniButton = document.getElementById("donate-now-feni");
    const donateQuotaButton = document.getElementById("donate-now-quota");
    const historyButton = document.getElementById("view-history");
  
    const cardBalanceElems = {
      noakhali: document.getElementById("card-balance-1"),
      feni: document.getElementById("card-balance-2"),
      quota: document.getElementById("card-balance-3"),
    };
  
  
    // Get modal element
    const modal = document.getElementById("my_modal");
    const closeModalButton = document.getElementById("close-modal");
  
    // Utility to update balance
    function updateBalance(donateAmount, cardBalanceElem) {
      const mainBalance = parseInt(mainBalanceElem.textContent);
      const donateValue = parseInt(donateAmount);
  
      // Check if main balance is enough for donation
      if (donateValue <= mainBalance && donateValue > 0) {
        // Deduct from main balance
        const updatedMainBalance = mainBalance - donateValue;
        mainBalanceElem.textContent = updatedMainBalance + " BDT";
  
        // Add to the specific card balance
        const currentCardBalance = parseInt(cardBalanceElem.textContent);
        const updatedCardBalance = currentCardBalance + donateValue;
        cardBalanceElem.textContent = updatedCardBalance + " BDT";
  
        return true; // Return true if the donation was successful
      } else {
        alert("Insufficient balance or invalid amount!");
        return false; // Return false if donation failed
      }
    }
  
    // Utility to add transaction to history
    function addHistory(location, amount) {
      const now = new Date();
      const formattedDate = now.toLocaleString();
      const transaction = {
        location,
        amount,
        date: formattedDate,
      };
  
      // Push transaction to history list
      historyList.push(transaction);
  
      // Save updated history list to localStorage
      localStorage.setItem("donationHistory", JSON.stringify(historyList));
    }
  
    // Function to show modal
    function showModal() {
      modal.showModal(); // This opens the modal
    }
  
    // Function to close modal
    closeModalButton.addEventListener("click", function () {
      modal.close(); // This closes the modal
    });
  
    // Donation logic
    donateNoakhaliButton.addEventListener("click", function () {
      const donateAmountElem = document.getElementById("donate-amount-noakhali");
      const donateAmount = donateAmountElem.value;
  
      if (donateAmount) {
        const isSuccessful = updateBalance(donateAmount, cardBalanceElems.noakhali);
        if (isSuccessful) {
          addHistory("Noakhali", donateAmount);
          donateAmountElem.value = ""; // Clear input field after successful donation
          showModal(); // Show the modal after successful donation
        }
      } else {
        alert("Please enter a valid donation amount!");
      }
    });
  
    donateFeniButton.addEventListener("click", function () {
      const donateAmountElem = document.getElementById("donate-amount-feni");
      const donateAmount = donateAmountElem.value;
  
      if (donateAmount) {
        const isSuccessful = updateBalance(donateAmount, cardBalanceElems.feni);
        if (isSuccessful) {
          addHistory("Feni", donateAmount);
          donateAmountElem.value = ""; // Clear input field after successful donation
          showModal(); // Show the modal after successful donation
        }
      } else {
        alert("Please enter a valid donation amount!");
      }
    });
  
    donateQuotaButton.addEventListener("click", function () {
      const donateAmountElem = document.getElementById("donate-amount-quota");
      const donateAmount = donateAmountElem.value;
  
      if (donateAmount) {
        const isSuccessful = updateBalance(donateAmount, cardBalanceElems.quota);
        if (isSuccessful) {
          addHistory("Quota Movement", donateAmount);
          donateAmountElem.value = ""; // Clear input field after successful donation
          showModal(); // Show the modal after successful donation
        }
      } else {
        alert("Please enter a valid donation amount!");
      }
    });
  
    // Redirect to history page on history button click
    historyButton.addEventListener("click", function () {
      window.location.href = "history.html"; // Navigate to history page
    });
  });
  