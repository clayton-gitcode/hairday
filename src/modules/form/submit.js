import dayjs from "dayjs";

const selectedDate = document.querySelector('input[name="date"]');
const form = document.querySelector('form');

//Date atual para o input
const inputDate = dayjs(new Date()).format('YYYY-MM-DD');

//carrega a data atual no campo de data
selectedDate.value = inputDate

//define a data mínima como a data atual
selectedDate.min = inputDate

form.onsubmit =  (event) => {
    event.preventDefault();
}