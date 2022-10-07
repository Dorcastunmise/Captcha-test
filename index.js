const captcha = document.querySelector('.captcha');
const reloadBtn = document.querySelector('.reload-btn');
const inputField = document.querySelector('input');
const checkBtn = document.querySelector('.check-btn');
const statusTxt = document.querySelector('.status-txt');

//to store all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                    'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
                    ];
function getCaptcha() {
    for (let i = 0; i < 6; i++) {//to get 6 random characters from the array
        let randomChar = allCharacters[Math.floor(Math.random() * 
            allCharacters.length)];
        captcha.innerText += ` ${randomChar}`;
    }
}
getCaptcha();
reloadBtn.addEventListener('click', () => {
    captcha.innerText = "";
    getCaptcha();
});
checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    statusTxt.style.display = 'block';

    let inputVal = inputField.value.split('').join(' ');//to add space after each value entered
    
    if(inputVal == captcha.innerText) {
        statusTxt.style.color = "black";
        statusTxt.innerText = "Captcha test successful!";
        setTimeout(() => {
            statusTxt.style.display = '';
            inputField.value = '';
            captcha.innerText = '';
            getCaptcha();
        }, 9000);
    }else {
        statusTxt.style.color = "red";
        statusTxt.innerText = 'Texts do not match ...try typing again.';
    }
});


