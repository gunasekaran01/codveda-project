let count = 0;

const counter = document.getElementById("count");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const resetButton = document.getElementById("reset");

const message = document.getElementById("message");

function updateCounter() {

    counter.textContent = count;

}

increaseButton.addEventListener("click", function () {

    count++;

    updateCounter();

    message.textContent = "Counter Increased";

    message.style.color = "green";

});


decreaseButton.addEventListener("click", function () {

    if (count > 0) {

        count--;

        updateCounter();

        message.textContent = "Counter Decreased";

        message.style.color = "red";

    } else {

        message.textContent = "Counter cannot go below zero.";

        message.style.color = "red";

    }

});


resetButton.addEventListener("click", function () {

    count = 0;

    updateCounter();

    message.textContent = "Counter Reset";

    message.style.color = "#0d6efd";

});