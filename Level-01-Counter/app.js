let countEl = document.querySelector("#count");
let Add = document.querySelector("#Add-btn");
let Sub = document.querySelector("#Sub-btn");

Add.addEventListener("click" , () => {
    let countValue = parseInt(countEl.innerText);
    countEl.innerText = countValue + 1
    
})
Sub.addEventListener("click" , () => {
   
     let countValue = parseInt(countEl.innerText);
    countEl.innerText = countValue - 1
})
