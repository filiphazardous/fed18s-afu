(function IIFE() {
  const $form1 = document.getElementById('form1');
  const $form2 = document.getElementById('form2');
  const pNumPattern = /\d{6}[+-]\d{4}/;
  const namePattern = /\w{3}\s\w{3}/;

  function onSubmitForm(e) {
    let formValid = true;
    for (let i = 0; i<e.target.length; i++) {
      e.target[i].style.borderColor = '';
      const inputValue = e.target[i].value;
      const inputDataType = e.target[i].getAttribute('data-type');

      switch (inputDataType) {
        case 'personal number':
          if (!inputValue.match(pNumPattern)) {
            console.log('not personal number');
            e.target[i].className = 'error';
            formValid = false;
          }
          else {
            e.target[i].className = '';
          }
          break;
        case 'name':
          if (!inputValue.match(namePattern)) {
            console.log('not valid name');
            e.target[i].className = 'error';
            formValid = false;
          }
          else {
            e.target[i].className = '';
          }
          break;
      }
    }

    // If form is not valid, we prevent default action - which is submitting form
    if (!formValid) {
      e.preventDefault();
    }
  }

  function onInvalid(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('id'));
    e.target.style.borderColor = 'red';
  }

  function registerInvalidListeners(form) {
    for (let i=0; i<form.length; i++) {
      form[i].addEventListener('invalid', onInvalid);
    }
  }

  function registerListeners() {
    $form1.addEventListener('submit', onSubmitForm);
    registerInvalidListeners($form1);
    $form2.addEventListener('submit', onSubmitForm);
    registerInvalidListeners($form2);

  }

  function pageLoaded() {
    registerListeners();
  }

  window.pageLoaded = pageLoaded;
})();
