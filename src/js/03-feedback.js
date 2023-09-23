import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


function updateLocalStorage() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

emailInput.addEventListener('input', throttle(updateLocalStorage, 500));
messageTextarea.addEventListener('input', throttle(updateLocalStorage, 500));


window.addEventListener('load', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };


  console.log('Form Data:', formData);

 
  localStorage.removeItem('feedback-form-state');
});

