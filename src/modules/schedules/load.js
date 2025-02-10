
import{ hoursLoad } from '../form/hours-load.js';

//seleciona o inoput data.
const selectDate = document.getElementById('date');
export function scheduleDays(){

    const date = selectDate.value
    hoursLoad({date});
}