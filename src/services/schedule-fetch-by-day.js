import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}){

    try {
        const response = await fetch(
            //Fazendo a requisição para buscar os dados.
            `
            ${apiConfig.baseURL}/shedules
            `
        )

        //Converte para JSON.
        const data = await response.json();

        //Filtra os agendamentos pelo dia selecioando.
        const dailyShedules = data.filter((schedule)=>
            dayjs(date).isSame(schedule.when, "day")
        )

        return dailyShedules
    } catch (error) {
        console.log(error);
        alert("Erro ao carregar os agendamentos")
    }
}