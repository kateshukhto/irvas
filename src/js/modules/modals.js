const modals = () => {
  function closeModal(closeBtn, modalWindow, closeClickOver) {
    const window = document.querySelectorAll('[data-modal]');

    closeBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none';
      document.body.style.overflow = '';
      window.forEach(item => {
        item.style.display = 'none';
      })
    })
    modalWindow.addEventListener('click', (e) => {
      if(e.target === modalWindow && closeClickOver) {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
        window.forEach(item => {
          item.style.display = 'none';
        })
      }
    })
  }

  function bindModals(triggerSelector, modalSelector, closeSelector, closeClickOver = true) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault()
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'
      })
    })

    closeModal(close, modal, closeClickOver);
  }

  function showModal(modal, close, time) {
    setTimeout(() => {
      document.querySelector(modal).style.display = 'block';
      document.body.style.overflow = ''
    }, time)
    closeModal(document.querySelector(close), document.querySelector(modal))
  }

  bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModals('.phone_link', '.popup', '.popup .popup_close');
  bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showModal('.popup', '.popup .popup_close', 60  000);
}

export default modals;