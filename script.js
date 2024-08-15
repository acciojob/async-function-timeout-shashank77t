//your JS code here. If required.
const input = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function delay1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleClick() {
    await delay1(delay.value);
    output.textContent = input.value;
}

btn.addEventListener("click", handleClick);
