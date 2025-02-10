
import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';  

export function hoursLoad({date}){

    const opening = openingHours.map((hour) => {
        //recupera somenta as horas
        //desestruturação
        const [scheduleHour] = hour.split(':');

        //compara se a hora é passada
        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs());

        console.log(opening, isHourPast);
    })   
}