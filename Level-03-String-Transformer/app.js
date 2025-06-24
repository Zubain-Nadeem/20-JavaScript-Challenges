let userInput = document.querySelector("#user-input");

let lowerCaseEl = document.querySelector("#LowerCase");
let upperCaseEl = document.querySelector("#UpperCase");
let CamelCaseEl = document.querySelector("#CamelCase");
let pascalCaseEl = document.querySelector("#PascalCase");
let snakeCaseEl = document.querySelector("#SnakeCase");
let kebabCaseEl = document.querySelector("#KebabCase");
let trimEl = document.querySelector("#Trim");

function transform({ text = userInput.value.trim() }) {
  const camelCase = text
    .toLowerCase()
    .split(' ')
    .reduce((a,b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());

  lowerCaseEl.innerText = text.toLowerCase();
  upperCaseEl.innerText = text.toUpperCase();
  CamelCaseEl.innerText = camelCase;
  pascalCaseEl.innerText = camelCase ? camelCase[0]?.toUpperCase() + camelCase.substring(1) : '';
  snakeCaseEl.innerText = text.split(" ").join("_");
  kebabCaseEl.innerText = text.split(" ").join("-");
  trimEl.innerText = text.split(" ").join("");
}

userInput.addEventListener("input" ,  )

transform({});
