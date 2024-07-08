class privateItems {
    password;
    arrLastSongs = [];
    arrFavourites = [];
    constructor(password) {
        this.password = password;
    }
}
const divAlert = document.querySelector('.toast-body');

const arrItems = JSON.parse(localStorage.getItem('arrItems')) || [];
const form = document.querySelector('#form');
form.onsubmit = (event) => {
    event.preventDefault();
    const password = document.querySelector('#password');
    const truePassword = document.querySelector('#truePassword');
    if (password.value != truePassword.value) {
        divAlert.innerHTML="אימות סיסמא נכשל";
    }
    else {
        sessionStorage.setItem('password', JSON.stringify(password.value));
        const exsistUser = arrItems.filter((user) => {
            return user.password === password.value;
        });
        if (exsistUser.length === 0) {
            arrItems.push(new privateItems(password.value));
            localStorage.setItem('arrItems', JSON.stringify(arrItems));
            divAlert.innerHTML="ברוכה הבאה";
            setTimeout(() => {
                location.href = 'category.html';
            }, 3000);
        }
        else{
             location.href = 'category.html';
        }
        
    }
    event.reset;
}
const arr = ['א', 'ת', 'ר', ' ', 'ה', 'מ', 'ו', 'ז', 'י', 'ק', 'ה', ' ', 'ש', 'ל', 'י']
// const caption = document.querySelector('#caption')
for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
        caption.innerHTML += arr[i];
    }, (i + 1) * 200);
}




const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
   })
}