import dayjs from "dayjs";

//seleciona as seções manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleShow({dailySchedules}){

    try {
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}