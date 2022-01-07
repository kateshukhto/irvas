const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

  function hideContent() {
    content.forEach(item => {
      item.style.display = 'none'
    });

    tab.forEach(tab => {
      tab.classList.remove(activeClass)
    })
  }

  function showContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass)
  }

  hideContent();
  showContent();

  header.addEventListener('click', (e) => {
    if(e.target.classList.contains(tabSelector.replace(/\./, '')) || 
      e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tab.forEach((item, i) => {
        if(e.target === item || e.target.parentNode === item) {
          hideContent();
          showContent(i)
        }
      })
    }
  })
}

export default tabs;