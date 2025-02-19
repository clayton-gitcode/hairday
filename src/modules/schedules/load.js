
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import{ hoursLoad } from '../form/hours-load.js'
import { scheduleShow} from "../schedules/show.js"

//seleciona o inoput data.
const selectDate = document.getElementById('date');


export async function scheduleDays(){
    //obtem a data do input
    const date = selectDate.value

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)

    //exibe os agendamnetos.
    scheduleShow({dailySchedules})
    //renderiza as horas disponives.
    hoursLoad({date});
}