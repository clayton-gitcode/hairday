import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDays } from "../schedules/load.js"

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById("client");

//Date atual para o input
const inputDate = dayjs(new Date()).format('YYYY-MM-DD');

//carrega a data atual no campo de data
selectedDate.value = inputDate

//define a data mínima como a data atual
selectedDate.min = inputDate

form.onsubmit = async(event) => {
    event.preventDefault();

    try {
        //recupera o nome do usuário
        const name = clientName.value.trim();

        if(!name) {
            alert('Informe o nome do cliente');
            return;
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector(
            '.hour-selected');
            if(!hourSelected) {
                alert('Selecione um horário');
                return;
            }
        
        //recupera somente a hora
        const [hour] = hourSelected.textContent.split(':');

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, 'hour')

        //Gera um ID único
        const id = new Date().getTime();

        //Faz o agendamento.
        await scheduleNew({
            id,
            name,
            when,
        })

      //Recarrega os agendamentos.
      await scheduleDays()

      clientName.value = ""
    } catch (error) {
        alert('Erro ao enviar');
        console.log(error);
    }
}