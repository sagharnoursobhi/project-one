

  //first modal
  let btnOpenFirst = document.getElementById('first-open-btn');
  let btnCloseFirst = document.getElementById('first-close-btn');
  let modalFirst = new bootstrap.Modal(document.getElementById('modal-window-one'));


  btnOpenFirst.addEventListener('click', () => {
    modalFirst.toggle();
  })

  btnCloseFirst.addEventListener('click', () => {

    modalFirst.style.display = 'none';

  })

  //second modal

  let btnOpenSecond = document.getElementById('second-open-btn');
  let btnCloseSecond = document.getElementById('second-close-btn');
  let modalSecond = new bootstrap.Modal(document.getElementById('modal-window-two'));


  btnOpenSecond.addEventListener('click', () => {
    modalSecond.toggle();
  })

  btnCloseSecond.addEventListener('click', () => {

    modalSecond.style.display = 'none';

  })





