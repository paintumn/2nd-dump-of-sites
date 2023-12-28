function toggleButton(selector, selector2, selector3) {
    const button = document.querySelector(selector);
    const button2 = document.querySelector(selector2);
    const button3 = document.querySelector(selector3);
    if (button.classList.contains('is-toggled')) {
        
        button.classList.remove('is-toggled');
        
    } else {
        button.classList.add('is-toggled')
        button2.classList.remove('is-toggled');
        button3.classList.remove('is-toggled');
    }
  }