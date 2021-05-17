const main = document.querySelector('main');
const nav = document.querySelector('nav');
const icon = document.querySelector('.icon');
const carts = document.querySelector('.cart');
const add = document.querySelectorAll('.add button');
const display = document.querySelector('.display');
const body = document.querySelector('body');
const textTitle = document.querySelector('.title');
const imog = document.querySelector('.imog');


const listDisplay = document.querySelectorAll('.con')

const displaybut = document.querySelector('.list-display')


displaybut.addEventListener('click', () => {

    listDisplay.forEach(but => {
        console.log(but)
        but.classList.toggle('list-display')
        // but.classList.toggle('cart')


    })
    // for (items in listDisplay) {
    // items.classList.toggle('list-display')
    // }

    // })


})


icon.addEventListener('click', () => {
    main.classList.toggle('move');
    // alert('hello world')
    icon.classList.toggle('icar');
    nav.classList.toggle('toogle');
});

add.forEach(de => {
    de.addEventListener('click', coco)

});


function coco(e) {
    // cart = e.target
    for (let i = 0; i < imog.length; i++) {
        cocon = imog.src[i];
        console.log(cocon)
    }
}





const countDown = () => {
    const countDate = new Date("oct 10, 2021 11:38:50").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // calc time

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // display to screen


    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)



    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond

    // console.log(coco)

};




countDown()

setInterval(countDown, 1000)
