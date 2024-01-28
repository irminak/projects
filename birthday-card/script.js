const randomMessage = document.getElementById('message');

getRandomMessage();

function getRandomMessage() {
    fetch('https://retoolapi.dev/FMGixB/birthdaywishes')
        .then((res) => res.json())
        .then((data) => {
            const value = data[Math.floor(Math.random() * (data.length - 1))];
            randomMessage.textContent = value.message;
        })
        .catch((error) => console.log(error.message));
}
