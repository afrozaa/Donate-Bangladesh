const getCurrentDate = function(){
    const currentDate = new Date();
    const formattedTime = `${currentDate}`;
    return formattedTime;


}
const validationCheck = function(value){
  const newValue = parseFloat(value);
  if(typeof newValue ==='number' && !isNaN(newValue) && newValue>0){
      return true;
  }
  else{
      alert("Please input amount in numbers greater than zero")
      return;
  }

}




  
// Donation logic noakhali
document.getElementById('donate-now-1').addEventListener("click", function (e) {
e.preventDefault();
const inputValue = parseFloat(document.getElementById('noakhali-input').value);
const cardBalance = parseFloat(document.getElementById('card-balance-1').innerText);
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);


console.log(inputValue,cardBalance,mainBalance)

//getting current date and time from reusable function
const currentDate = getCurrentDate();

//!checking if input amount is greater than main balance or not
if(mainBalance<inputValue){
    alert("Donation amount can not be greater than main balance");
}else{
    if(validationCheck(inputValue)){          //!if the validation check return true
        const newCardBalance = cardBalance+inputValue
        const newBalance = mainBalance-inputValue;


        //!assigning new values to the card balance and main balance
        document.getElementById('card-balance-1').innerText=newCardBalance;
        document.getElementById('main-balance').innerText=newBalance;
        my_modal.showModal();

        //!creating a new html card and appending it to the history page
        const newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
        <div class="card-body">
          <h2 class="card-title">${inputValue} Taka is Donated for Noakhali, Bangladesh</h2>
          <p>${currentDate}</p>
        </div>
      </div>`;
      const historyContainer = document.getElementById('history-form');
      historyContainer.innerHTML+=newHTML;
        
        
    }
    else{
      document.getElementById('text').value=""
    }

}})

// Donation logic Feni
document.getElementById('donate-now-2').addEventListener("click", function (e) {
e.preventDefault();
const inputValue = parseFloat(document.getElementById('feni-input').value);
const cardBalance = parseFloat(document.getElementById('card-balance-2').innerText);
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);


console.log(inputValue,cardBalance,mainBalance)

//getting current date and time from reusable function
const currentDate = getCurrentDate();

//!checking if input amount is greater than main balance or not
if(mainBalance<inputValue){
    alert("Donation amount can not be greater than main balance");
}else{
    if(validationCheck(inputValue)){          //!if the validation check return true
        const newCardBalance = cardBalance+inputValue
        const newBalance = mainBalance-inputValue;


        //!assigning new values to the card balance and main balance
        document.getElementById('card-balance-1').innerText=newCardBalance;
        document.getElementById('main-balance').innerText=newBalance;
        my_modal.showModal();

        //!creating a new html card and appending it to the history page
        const newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
        <div class="card-body">
          <h2 class="card-title">${inputValue} Taka is Donated for Feni, Bangladesh</h2>
          <p>${currentDate}</p>
        </div>
      </div>`;
      const historyContainer = document.getElementById('history-form');
      historyContainer.innerHTML+=newHTML;
        
        
    }
    else{
      document.getElementById('text').value=""
    }

}})

// Donation logic  Quota
document.getElementById('donate-now-3').addEventListener("click", function (e) {
e.preventDefault();
const inputValue = parseFloat(document.getElementById('quota-input').value);
const cardBalance = parseFloat(document.getElementById('card-balance-3').innerText);
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);


console.log(inputValue,cardBalance,mainBalance)

//getting current date and time from reusable function
const currentDate = getCurrentDate();

//!checking if input amount is greater than main balance or not
if(mainBalance<inputValue){
    alert("Donation amount can not be greater than main balance");
}else{
    if(validationCheck(inputValue)){          //!if the validation check return true
        const newCardBalance = cardBalance+inputValue
        const newBalance = mainBalance-inputValue;


        //!assigning new values to the card balance and main balance
        document.getElementById('card-balance-1').innerText=newCardBalance;
        document.getElementById('main-balance').innerText=newBalance;
        my_modal.showModal();

        //!creating a new html card and appending it to the history page
        const newHTML = `<div class="card lg:card-side bg-base-100 shadow-xl border">
        <div class="card-body">
          <h2 class="card-title">${inputValue} Taka is Donated for Quota Movement, Bangladesh</h2>
          <p>${currentDate}</p>
        </div>
      </div>`;
      const historyContainer = document.getElementById('history-form');
      historyContainer.innerHTML+=newHTML;
        
        
    }
    else{
      document.getElementById('text').value=""
    }

}})


 // !history button
document.getElementById('history-btn').addEventListener('click',function(){
document.getElementById('donation-btn').classList.remove('bg-lime-300');
document.getElementById('history-btn').classList.add('bg-lime-300')
document.getElementById('donation-form').classList.add('hidden');
document.getElementById('history-form').classList.remove('hidden');
document.querySelector('footer').classList.add('hidden');



})

//!donation button
document.getElementById('donation-btn').addEventListener('click',function(){
document.getElementById('history-btn').classList.remove('bg-lime-300');
document.getElementById('donation-btn').classList.add('bg-lime-300');
document.getElementById('donation-form').classList.remove('hidden');
document.getElementById('history-form').classList.add('hidden');
document.querySelector('footer').classList.remove('hidden');
})
