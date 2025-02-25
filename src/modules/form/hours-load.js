
import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';
import { hoursClick } from './hours-click.js';

const hours = document.getElementById("hours");

export function hoursLoad({date, dailySchedules}){

    //limpa a lista de horários.
    hours.innerHTML  = ""

    //Obtem a lista de todos os horario ocupados.
    const unavailableHours = dailySchedules.map((shecdule)=>
        dayjs(shecdule.when).format("HH:mm")
    )

    const opening = openingHours.map((hour) => {
        //recupera somenta as horas
        //desestruturação
        const [scheduleHour] = hour.split(':');

        //compara se a hora é passada
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const avaialable = !unavailableHours.includes(hour) && !isHourPast
        return{
            hour,
            avaialable
        }
    })
    // console.log(opening)
    
    //renderiza o horário.
    opening.forEach(({hour, avaialable}) => {

        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(avaialable ? "hour-available" : "hour-unavailable");

        li.textContent = hour;

        //validando os periodos manhã, tarde e noite
        if(hour === "9:00"){
            hourHeaderadd("Manhã");
        }
        else if(hour === "13:00"){
            hourHeaderadd("Tarde");
        }
        else if(hour === "18:00"){
            hourHeaderadd("Noite");
        }
        hours.append(li);
    })
    //console.log(opening)
    //adicione o evento de click nos horários disponíveis
    hoursClick();
}

//separação dos horas de funcionamento
function hourHeaderadd(title){

    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}