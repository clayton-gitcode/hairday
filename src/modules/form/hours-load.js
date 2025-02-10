
import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';

const hours = document.getElementById("hours");

export function hoursLoad({date}){

    const opening = openingHours.map((hour) => {
        //recupera somenta as horas
        //desestruturação
        const [scheduleHour] = hour.split(':');

        //compara se a hora é passada
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return{
            hour,
            avaialable: isHourPast
        }
    })
    console.log(opening)
    
    //renderiza o horário.
    opening.forEach(({hour, available}) => {

        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");

        li.textContent = hour;
        hours.append(li);
    }) 
}