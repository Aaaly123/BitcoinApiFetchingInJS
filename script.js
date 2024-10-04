let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
let data = null;

const coindesk = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log(response);
  data = await response.json();
  console.log(data);
};

coindesk();

let usdBtn = document.querySelector("#usd-btn");
let gbpBtn = document.querySelector("#gbp-btn");
let eurBtn = document.querySelector("#eur-btn");
let disclaimer = document.querySelector("#disclaimer");

let currency = document.querySelector("#currency");
let price = document.querySelector("#price");
let time = document.querySelector("#time");

usdBtn.addEventListener("click", () => {
  currency.innerText = "USD";
  price.innerText = data.bpi.USD.rate;
  details();
});

gbpBtn.addEventListener("click", () => {
  currency.innerText = "GBP";
  price.innerText = data.bpi.GBP.rate;
  details();
});

eurBtn.addEventListener("click", () => {
  currency.innerText = "EUR";
  price.innerText = data.bpi.EUR.rate;
  details();
});

function details() {
  disclaimer.innerText = data.disclaimer;
  time.innerText = data.time.updated;
}
