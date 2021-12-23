import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
refs.form.addEventListener('input', throttle(onClickForm, 500));
refs.form.addEventListener('submit', onFormSubmit);
populateTextForm();
function onClickForm(event) {
  const mail = refs.form.elements.email.value;
  const password = refs.form.elements.password.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ mail, password }));
}
function onFormSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function populateTextForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    refs.form.elements.email.value = JSON.parse(savedData).mail;
    refs.form.elements.password.value = JSON.parse(savedData).password;
  }
}
