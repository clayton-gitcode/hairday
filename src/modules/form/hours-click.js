export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available");
    
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            //remove a classe de seleção de todas LI
            hours.forEach((hour) =>{
                hour.classList.remove("hour-selected");
            });

            //adiciona a classe de seleção na LI clicada
            selected.target.classList.add("hour-selected");
        });
    });
}