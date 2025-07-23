
//gültig für anfangObenOderUnten: "oben", "unten", anfangRechtsOderLinks: "rechts", "links"
//für geschwidigkeit: kleinere zahl ist gleich schneller
//SchnellerJaoderNein: boolean
async function tvLogoBounce(htmlElement: HTMLElement , anfangObenOderUnten: string, anfangRechtsOderLinks: string, anfangsGeschwindigkeit: number, soundarray: HTMLAudioElement[],) //lässt ein html-element an den rändern seines Parends bouncen
{
    let geschwidigkeit = anfangsGeschwindigkeit;
    let richtungHorizontal = "rechts" //speichert in welche richtung das Element sich bewegt
    let richtungVertikal = "unten";
    htmlElement.style.position = "absolute";
    htmlElement.style.bottom = "";
    htmlElement.style.right = "";
    let iteration = 0;
    //Anfangspositionierung
    if (anfangObenOderUnten === "unten") {
        htmlElement.style.top = parseInt(getComputedStyle(htmlElement.parentElement!).height) -
            parseInt(getComputedStyle(htmlElement).height)
            + "px";
    }
    else { htmlElement.style.top = "0px"; }
    if (anfangRechtsOderLinks === "rechts") { htmlElement.style.left = parseInt(getComputedStyle(htmlElement.parentElement!).width) - parseInt(getComputedStyle(htmlElement).width) + "px"; }
    else { htmlElement.style.left = "0px"; }

    const intervalID = setInterval(() => {
        let neachsterLeftWert: string;
        let naechsterTopWert: string;
        if (richtungHorizontal === "rechts") //berechung für style.left
        {
            if (parseInt(getComputedStyle(htmlElement).left) + parseInt(getComputedStyle(htmlElement).width) >= parseInt(getComputedStyle(htmlElement.parentElement!).width)) { //Richtungswächsel
                neachsterLeftWert = parseInt(getComputedStyle(htmlElement).left) - 1 + "px";
                richtungHorizontal = "links";
                if (iteration !== 0) {
                    playRandomCatSound(soundarray);
                     }
                
            }
            else //normal in die Richtung weiter
            {
                neachsterLeftWert = parseInt(getComputedStyle(htmlElement).left) + 1 + "px";
            }
        }
        else //für Richtung "links"
        {
            if (parseInt(getComputedStyle(htmlElement).left) <= 0) { //Richtungswächsel
                neachsterLeftWert = parseInt(getComputedStyle(htmlElement).left) + 1 + "px";
                richtungHorizontal = "rechts";
                if (iteration !== 0) 
                    {
                    playRandomCatSound(soundarray);
                   
                }
            }
            else //normal in die Richtung weiter
            {
                neachsterLeftWert = parseInt(getComputedStyle(htmlElement).left) - 1 + "px";
            }
        }

        if (richtungVertikal === "unten") //berechung style.top
        {

            //Richtungswächsel
            if (parseInt(getComputedStyle(htmlElement).top) + parseInt(getComputedStyle(htmlElement).height) >= parseInt(getComputedStyle(htmlElement.parentElement!).height)) {
                naechsterTopWert = parseInt(getComputedStyle(htmlElement).top) - 1 + "px";
                richtungVertikal = "oben";
                if (iteration !== 0) 
                    {
                    playRandomCatSound(soundarray);
                    
                }
            }
            else //normal in die Richtung weiter
            {
                naechsterTopWert = parseInt(getComputedStyle(htmlElement).top) + 1 + "px";
            }
        }
        else //für Richtung "oben"
        {
            if (parseInt(getComputedStyle(htmlElement).top) <= 0) { //Richtungswechsel
                naechsterTopWert = parseInt(getComputedStyle(htmlElement).top) + 1 + "px";
                richtungVertikal = "unten";
                if (iteration !== 0) {
                    playRandomCatSound(soundarray);
                    
                }
            }
            else //normal in die Richtung weiter
            {
                naechsterTopWert = parseInt(getComputedStyle(htmlElement).top) - 1 + "px";
            }
        }

        //Anwendung des Berechneten Positionswechels
        htmlElement.style.top = naechsterTopWert;
        htmlElement.style.left = neachsterLeftWert;
        iteration++;
        
    }
        , geschwidigkeit); //ende des intervalls
    setTimeout(() => clearInterval(intervalID), 1000000);
}
function playRandomCatSound(soundarray: string | any[]) {
    const soundPicker = getRndInteger(0, soundarray.length - 1);
    soundarray[soundPicker].play();
}
function getRndInteger(min: number, max: number) { //  gibt eine zahl zwischen min und max, beide mit engeschlossen.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function katzenChaos() {

    const catSoundArray1 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    const catSoundArray2 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    const catSoundArray3 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    const catSoundArray4 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    const catSoundArray5 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];


    tvLogoBounce(document.getElementById("katzeText")!, "oben", "links", 1 , catSoundArray1 );
    tvLogoBounce(document.getElementById("katzeBild1")!, "unten", "rechts", 1, catSoundArray2 );
    tvLogoBounce(document.getElementById("katzeBild2")!, "oben", "rechts", 1,catSoundArray3);
    tvLogoBounce(document.getElementById("katzeBild3")!, "oben", "links", 1,catSoundArray4) ;
    tvLogoBounce(document.getElementById("katzeBild4")!, "unten", "links",1 ,catSoundArray5);
}
document.getElementById("katzeText")!.addEventListener("click", () => {katzenChaos(), document.getElementById("katzeText")!.innerText = "Katze"});
