const fibonacci = [{id:"0"},{id:"1"},{id:"2"},{id:"3"},{id:"5"},{id:"8"},{id:"13"},{id:"21"},{id:"34"},{id:"55"},{id:"89"},{id:"?"}];
function startNewGame(){

    const get = document.getElementById("blockGame");
    const getGameName = document.getElementById("gameName");
    
    const textName = prompt("Game's name:");
    
    var getName = document.querySelector("#gameName");

    getName.innerHTML = textName;
    
    const getButton = document.getElementById("buttonStart");
    getButton.style.display = "none";

    const blockGame = document.getElementById("blockGame");
    blockGame.style.display = "block";

    function game(){
        const blockUsers = document.getElementById("blockUsers");
        const nickName = prompt("Nickname:");
    
        var getNick = document.querySelector("#nickname");
    
        getNick.innerHTML = nickName;
    
    
    }


    function chooseCards(){
        const getChoose = document.getElementById("blockChoose");
        const getCards = document.getElementById("blockCards");

        for (let i=1; i<=11; i++){
        const card = document.createElement("button");
        card.innerText = fibonacci[i].id;
        card.setAttribute("class", "cards");
        card.setAttribute("id", "button"+i);

        blockChoose.appendChild(blockCards);
        blockCards.appendChild(card);
        console.log(card);

        }

        for (let j=1; j<=11; j++){
            
            const button = document.getElementById("button"+j);
            const pick = document.getElementById("pick");
            const show = document.getElementById("show");
                
            button.addEventListener('click', function click(e) {

                if(button.id == "button1") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;
                    
                }

                else if(button.id == "button2") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button3") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button4") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button5") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button6") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button7") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button8") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button9") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button10") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }
                else if(button.id == "button11") {
                    pick.style.display = "none";
                    show.style.display = "flex";

                    selected = fibonacci[j].id;

                    

                }

                button.removeEventListener('click', click);


            });

        }
    }

    game();
    chooseCards();
    
}

function showCards(){

    const getChoose = document.getElementById("blockChoose");
    const getCounting = document.getElementById("blockCounting");
    const getVoting = document.getElementById("voting");
    const getShow = document.getElementById("show");



    const average = document.getElementById("average");
    getChoose.style.display= "none";
    getCounting.style.display= "flex";
    getShow.style.display= "none";
    getVoting.style.display= "flex";





    average.innerText = selected;

    
    blockCounting.appendChild(average);



}

function newVoting(){

}
