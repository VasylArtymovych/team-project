
(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-about1]'),
    closeModalBtn: document.querySelector('[modal-close-about1]'),
    modal: document.querySelector('[modal-about1]'),
   
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.style.transition = 'opacity 500ms cubic-bezier(0.88, -0.13, 0.58, 1) 0s';
    refs.modal.classList.toggle('is-open');
  }
})();