import { scheduleDays } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")

//Gera evento de click para cada lista(manhã, tarde e noite)
periods.forEach((period)=>{

    //Captura o evento de clique na lista.
    period.addEventListener("click", async(event)=>{
        if(event.target.classList.contains("cancel-icon")){
            //Obtem a li pai do elemento clicado.
            const item = event.target.closest("li")

            const {id} = item.dataset
            
            //Confirma que o id foi selecionado
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento ?")

                if(isConfirm){
                    //console.log("removido")
                    //faz a requisição na API para cancelar.
                    await scheduleCancel({id})

                    //Recarrega os agendamentos.
                    scheduleDays()
                }
            }
        }
    })
})