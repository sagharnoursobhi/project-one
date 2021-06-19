

const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav-box');

//onclick event on toggle collapse span tag
toggleCollapse.addEventListener('click', () => {
  nav.classList.toggle("collapse")//using toggle instead of add to open and close the window dynamically
})

//first modal
let btnOpenFirst = document.getElementById('hello');
let btnCloseFirst = document.getElementById('bye');
let modalFirst = new bootstrap.Modal(document.getElementById('modal-window-one'));


btnOpenFirst.addEventListener('click', () => {
  modalFirst.toggle();
})

btnCloseFirst.addEventListener('click', () => {

  modalFirst.style.display = 'none';

})

//second modal

let btnOpenSecond = document.getElementById('open-btn');
let btnCloseSecond = document.getElementById('close-btn');
let modalSecond = new bootstrap.Modal(document.getElementById('modal-window-two'));


btnOpenSecond.addEventListener('click', () => {
  modalSecond.toggle();
})

btnCloseSecond.addEventListener('click', () => {

  modalSecond.style.display = 'none';

})



