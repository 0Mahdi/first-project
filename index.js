const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const from = document.querySelector('form');

//OPEN MODEL
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

//CLOSE MODEL
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload
    }, 500);
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

//thank you message after subscription
from.addEventListener('submit', submitForm);

function submitForm(){
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thanks For Your Subscription!</h1>";
    setTimeout(() => {
        closeModal();
    }, 3000);
}