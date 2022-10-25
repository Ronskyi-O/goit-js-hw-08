import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const emailInput = document.querySelector('.feedback-form input')


form.addEventListener('submit', formSubmit);
form.addEventListener('input', Throttle(onTextareaInput, 500))
window.addEventListener('load', showSavedData)

const data = {}
const STORAGE_KEY = "feedback-form-state"


function formSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log(data);
}


function onTextareaInput(event) {
    data[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}


function showSavedData(event) {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedData) {
        textarea.value = savedData.message || '';
        emailInput.value = savedData.email || '';
    }
}

