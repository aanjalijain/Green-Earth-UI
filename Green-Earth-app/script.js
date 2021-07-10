const account1 = {
  email: "surekhamanne375@gmail.com",
  password: "Hackathon$123",
};

const account2 = {
  email: "ninadhar@gmail.com",
  password: "Hackathon$456",
};

const accounts = [account1, account2];

let account;

const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".pwd");
const loginBtn = document.querySelector(".logIn");
const failedMsg = document.querySelector(".FailedMessage");
const travel = document.getElementById("Travel");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;

  //Finding the username in the list of accounts
  account = accounts.find((acc) => acc.email === email);

  if (account?.password === password) {
    document.location.href = "dashboard.html";

    inputEmail.value = " ";
    inputPassword.value = " ";
  } else {
    const html = `<div  style="
    font-size: 18pt; color:red; "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Login Failed </div>`;
    failedMsg.insertAdjacentHTML("afterbegin", html);
  }
});

travel.addEventListener("click", function (e) {
  alert("clicked");
});
