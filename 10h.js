String(25)
console.log('25' - 5);
console.log('25' + 5);

window.document
window.console.log('window');
window.alert

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
    const errorfin = document.querySelector('.js-error-code');
  if (cost < 40 && cost > 0) {
    cost += 10;
    document.querySelector('.js-total-cost')
         .innerHTML = `$${cost}`;
   const errorMsg = document.querySelector('js-error-code');
    if(errorfin.classList.contains('.error-color')){
    errorMsg.classList.remove('.error-color')
    }
  } else if (cost < 0) {    
    errorfin.innerHTML = 'Error : cost must be above $0';
    errorfin.classList.add('error-color')
   

  } else {
    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
  }

  
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}
