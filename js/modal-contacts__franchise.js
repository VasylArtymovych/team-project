
(() => {  
const refs = {
    openModalBtn: document.querySelector('[modal-open-fr]'),
    closeModalBtn: document.querySelector('[modal-close-fr]'),
    modal: document.querySelector('[modal-fr]'),
  

  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-fr');
  }
})();
// const refs = {
//     openModalBtn: document.querySelector('[modal-open-about]'),
//     closeModalBtn: document.querySelector('[modal-close-about]'),
//     modal: document.querySelector('[modal-about]'),
//     scrollBtn: document.querySelector('.scroll-up'),
//   };
//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   function toggleModal() {
//     refs.modal.style.transition = 'opacity 500ms cubic-bezier(0.88, -0.13, 0.58, 1) 0s';
//     refs.modal.classList.toggle('is-open');
//   }
// })();