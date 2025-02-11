import { scheduleDays } from "../schedules/load.js"
//selecionar o input date
const selectedDate = document.getElementById("date");

//recarregar a lista de horários quando a data for alterada.
selectedDate.onchange = () => scheduleDays()