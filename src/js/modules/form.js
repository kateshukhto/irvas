import checkNumInput from './checkNumInput';

const form = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  checkNumInput('input[name="user_phone"]');

  const messages = {
    loading: 'Загрузка...',
    sucсess: 'Спасибо! Мы скоро с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  }

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = messages.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data
    })
    
    return await res.text()
  }

  const resetInput = () => {
    inputs.forEach(i => {
      i.value = '';
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault()

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if(item.getAttribute('data-calc') === 'end') {
        for(let key in state) {
          formData.append(key, state[key])
        }
      }

      postData('assets/server.php', formData)
        .then(() => {
          statusMessage.textContent = messages.sucсess;
          state = {}
        })
        .catch((err) => {
          console.log(err)
          statusMessage.textContent = messages.failure
        })
        .finally(() => {
          resetInput();
          setTimeout(() => {
            statusMessage.remove()
          }, 5000)
        })
    })
  })
};

export default form;


