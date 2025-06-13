let countEl = document.querySelector("#count");
let add = document.querySelector("#Add-btn");
let sub = document.querySelector("#Sub-btn");
let changeValue = document.querySelector("#Change-value");
let resetBtn = document.querySelector("#reset");

add.addEventListener("click", () => {
  let countValue = parseInt(countEl.innerText);
  let changeOn = parseInt(changeValue.value);
  countEl.innerText = countValue + changeOn;
});
sub.addEventListener("click", () => {
  let countValue = parseInt(countEl.innerText);
  let changeOn = parseInt(changeValue.value);
  countEl.innerText = countValue - changeOn;
});

resetBtn.addEventListener("click", () => {
  countEl.innerHTML = 0;
});
