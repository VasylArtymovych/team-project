(() => {  
const refs = {
    openModalBtn: document.querySelector('[modal-open-fr]'),
    closeModalBtn: document.querySelector('[modal-close-fr]'),
    modal: document.querySelector('[modal-fr]'),
  
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    
    refs.modal.classList.toggle('is-hidden');
  }
})();