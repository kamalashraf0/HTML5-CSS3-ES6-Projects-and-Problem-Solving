let wordlable = document.getElementById("byletter")


function showMessage() {
    let message = 'Welcome'
    let index = 0;
    let intervalId = setInterval(() => {
        if (index < message.length) {
            wordlable.innerText += message[index];
            console.log(message[index]);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 500);
}



showMessage();