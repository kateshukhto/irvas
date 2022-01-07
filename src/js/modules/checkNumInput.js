const checkNumInput = (selector) => {
  const nums = document.querySelectorAll(selector);

  nums.forEach( item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/,'');
    })
  })
}

export default checkNumInput;