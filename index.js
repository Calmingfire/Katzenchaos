var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//gültig für anfangObenOderUnten: "oben", "unten", anfangRechtsOderLinks: "rechts", "links"
//für geschwidigkeit: kleinere zahl ist gleich schneller
//SchnellerJaoderNein: boolean
function tvLogoBounce(htmlElement, anfangObenOderUnten, anfangRechtsOderLinks, anfangsGeschwindigkeit, soundarray) {
    return __awaiter(this, void 0, void 0, function () {
        var geschwidigkeit, richtungHorizontal, richtungVertikal, iteration, intervalID;
        return __generator(this, function (_a) {
            geschwidigkeit = anfangsGeschwindigkeit;
            richtungHorizontal = "rechts" //speichert in welche richtung das Element sich bewegt
            ;
            richtungVertikal = "unten";
            htmlElement.style.position = "absolute";
            htmlElement.style.bottom = "";
            htmlElement.style.right = "";
            iteration = 0;
            //Anfangspositionierung
            if (anfangObenOderUnten === "unten") {
                htmlElement.style.top = parseInt(getComputedStyle(htmlElement.parentElement).height) -
                    parseInt(getComputedStyle(htmlElement).height)
                    + "px";
            }
            else {
                htmlElement.style.top = "0px";
            }
            if (anfangRechtsOderLinks === "rechts") {
                htmlElement.style.left = parseInt(getComputedStyle(htmlElement.parentElement).width) - parseInt(getComputedStyle(htmlElement).width) + "px";
            }
            else {
                htmlElement.style.left = "0px";
            }
            intervalID = setInterval(function () {
                var neachsterLeftWert;
                var naechsterTopWert;
                if (richtungHorizontal === "rechts") //berechung für style.left
                 {
                    if (parseInt(getComputedStyle(htmlElement).left) + parseInt(getComputedStyle(htmlElement).width) >= parseInt(getComputedStyle(htmlElement.parentElement).width)) { //Richtungswächsel
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
                        if (iteration !== 0) {
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
                    if (parseInt(getComputedStyle(htmlElement).top) + parseInt(getComputedStyle(htmlElement).height) >= parseInt(getComputedStyle(htmlElement.parentElement).height)) {
                        naechsterTopWert = parseInt(getComputedStyle(htmlElement).top) - 1 + "px";
                        richtungVertikal = "oben";
                        if (iteration !== 0) {
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
            }, geschwidigkeit);
            setTimeout(function () { return clearInterval(intervalID); }, 1000000);
            return [2 /*return*/];
        });
    });
}
function playRandomCatSound(soundarray) {
    var soundPicker = getRndInteger(0, soundarray.length - 1);
    soundarray[soundPicker].play();
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function katzenChaos() {
    var catSoundArray1 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    var catSoundArray2 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    var catSoundArray3 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    var catSoundArray4 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    var catSoundArray5 = [new Audio("catsound1.mp3"), new Audio("catsound2.mp3"), new Audio("catsound3.mp3"), new Audio("catsound4.mp3"), new Audio("catsound5.mp3"), new Audio("catsound6.mp3")];
    tvLogoBounce(document.getElementById("katzeText"), "oben", "links", 1, catSoundArray1);
    tvLogoBounce(document.getElementById("katzeBild1"), "unten", "rechts", 1, catSoundArray2);
    tvLogoBounce(document.getElementById("katzeBild2"), "oben", "rechts", 1, catSoundArray3);
    tvLogoBounce(document.getElementById("katzeBild3"), "oben", "links", 1, catSoundArray4);
    tvLogoBounce(document.getElementById("katzeBild4"), "unten", "links", 1, catSoundArray5);
}
var test = 3;
test /= 2;
console.log(test);
