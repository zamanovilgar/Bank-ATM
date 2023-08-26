const inputText = document.querySelector("#inputText");
const inputPassword = document.querySelector("#inputPassword");
const checkBtn = document.querySelector("#checkBtn");
const submitBtn = document.querySelector("#submitBtn");
const amountInput = document.querySelector("#amountInput");
const addBtn = document.querySelector("#addBtn");
const WithdrawBtn = document.querySelector("#withdrawBtn");
const title = document.querySelector("#title");
const balanceText = document.querySelector("#balanceText");
const operationContent = document.querySelector("#operationContent");
const inputContent = document.querySelector("#inputContent");



const bankObj = {
  balance: 0,
  userInfo: [],
  add: function () {
    const value = amountInput.value;
    // console.log(value);
    if ((value == "") || (value < 0)) {
      alert("Please, Enter amount true!");
      return;
    }
    else {
      this.balance += parseFloat(value);
      // console.log(this.balance)
      balanceText.innerHTML = `Your Balance: ${this.balance}$`
      amountInput.value = "";
    }

  },

  withdraw: function () {
    if ((amountInput.value == "") || (amountInput.value < 0) || (this.balance < amountInput.value)) {
      alert("Please, Enter amount true!");
      return;
    }
    else {
      this.balance -= parseFloat(amountInput.value);
      balanceText.innerHTML = `Your Balance: ${this.balance}$`
      amountInput.value = "";
    }
  },

  displayed: function () {
    inputContent.classList.add("d-none");
    operationContent.classList.remove("d-none");
  },

  displayPerson: function () {
    title.innerHTML = `Dear ${inputText.value}, Welcome to Wawe-Fin-Bank.`

  },

  goHome: function () {
    operationContent.classList.add("d-none");
    inputContent.classList.remove("d-none");
    inputPassword
  }
};

submitBtn.addEventListener("click", function () {
  bankObj.displayed();
  bankObj.displayPerson();
});

addBtn.addEventListener("click", function () {
  bankObj.add();
});

WithdrawBtn.addEventListener("click", function () {
  bankObj.withdraw();
});

checkBtn.addEventListener("change", function () {
  inputPassword.type = checkBtn.checked ? "text" : "password";
});
