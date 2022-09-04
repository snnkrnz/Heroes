const hide = document.getElementById("hide");
const mainModal = document.getElementById("main-modal");
const normal = document.getElementById("normal-mode");
const hard = document.getElementById("hard-mode");
const bottomModal = document.getElementById("bottom-modal");
const send = document.getElementById("send");
const heroes = document.getElementById("heroes");
const heroList = document.getElementById("hero-list");

// hero list - array
const lolHeroes = ["Aatrox",
"Ahri",
"Akali",
"Akshan",
"Alistar",
"Amumu",
"Anivia",
"Annie",
"Aphelios",
"Ashe",
"Aurelion Sol",
"Azir",
"Bard",
"Bel'Veth",
"Blitzcrank",
"Brand",
"Braum",
"Caitlyn",
"Camille",
"Cassiopeia",
"Cho'Gath",
"Corki",
"Darius",
"Diana",
"Dr. Mundo",
"Draven",
"Ekko",
"Elise",
"Evelynn",
"Ezreal",
"Fiddlesticks",
"Fiora",
"Fizz",
"Galio",
"Gangplank",
"Garen",
"Gnar",
"Gragas",
"Graves",
"Gwen",
"Hecarim",
"Heimerdinger",
"Illaoi",
"Irelia",
"Ivern",
"Janna",
"Jarvan IV",
"Jax",
"Jayce",
"Jhin",
"Jinx",
"Kai'Sa",
"Kalista",
"Karma",
"Karthus",
"Kassadin",
"Katarina",
"Kayle",
"Kayn",
"Kennen",
"Kha'Zix",
"Kindred",
"Kled",
"Kog'Maw",
"LeBlanc",
"Lee Sin",
"Leona",
"Lillia",
"Lissandra",
"Lucian",
"Lulu",
"Lux",
"Malphite",
"Malzahar",
"Maokai",
"Master Yi",
"Miss Fortune",
"Mordekaiser",
"Morgana",
"Nami",
"Nasus",
"Nautilus",
"Neeko",
"Nidalee",
"Nilah",
"Nocturne",
"Nunu ve Willump",
"Olaf",
"Orianna",
"Ornn",
"Pantheon",
"Poppy",
"Pyke",
"Qiyana",
"Quinn",
"Rakan",
"Rammus",
"Rek'Sai",
"Rell",
"Renata Glasc",
"Renekton",
"Rengar",
"Riven",
"Rumble",
"Ryze",
"Samira",
"Sejuani",
"Senna",
"Seraphine",
"Sett",
"Shaco",
"Shen",
"Shyvana",
"Singed",
"Sion",
"Sivir",
"Skarner",
"Sona",
"Soraka",
"Swain",
"Sylas",
"Syndra",
"Tahm Kench",
"Taliyah",
"Talon",
"Taric",
"Teemo",
"Thresh",
"Tristana",
"Trundle",
"Tryndamere",
"Twisted Fate",
"Twitch",
"Udyr",
"Urgot",
"Varus",
"Vayne",
"Veigar",
"Vel'Koz",
"Vex",
"Vi",
"Viego",
"Viktor",
"Vladimir",
"Volibear",
"Warwick",
"Wukong",
"Xayah",
"Xerath",
"Xin Zhao",
"Yasuo",
"Yone",
"Yorick",
"Yuumi",
"Zac",
"Zed",
"Zeri",
"Ziggs",
"Zilean",
"Zoe",
"Zyra"]

// click play , display none - flex mainModal bottomModal heroList
function normalMode(){
    mainModal.style.display = "none";
    bottomModal.style.display = "flex";
    heroList.style.display = "flex";

    // time 20:00
    var timeoutHandle;
    function countdown(minutes, seconds) {
    function tick() {
        var counter = document.getElementById("time");
        counter.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();
}

countdown(20, 00);

    

    // ???
    let soru = `<img id="heroes-image" src="images/soru.jpg" alt="Soru">
<span id="hero-name">?</span>`;

    if(heroList.style.display == "flex"){
        for(i=0;i<=lolHeroes.length -1;i++){
            var li = document.createElement('li');
            li.setAttribute("id", `all-heroes-${lolHeroes[i]}`);
            li.innerHTML = soru;
            heroList.appendChild(li);
        };
    }
}

const allHeroes = document.getElementById("all-heroes");
const heroesImage = document.getElementById("heroes-image");
const heroName = document.getElementById("hero-name");
let z = 0;

function hardMode(){
    alert("Zor mod yapım aşamasında");
}

function tahmin(){

    let score = document.getElementById("score");
    let gelenTahmin = document.getElementById("champ-input").value;
    
    if(gelenTahmin==lolHeroes.find(s => s == gelenTahmin)){
        var test = document.getElementById(`all-heroes-${gelenTahmin}`);

        if("all-heroes-"+gelenTahmin == test.getAttribute(`id`)){
            let img = `<img id="heroes-image" src="images/${gelenTahmin}.jpg" alt="${gelenTahmin}">
                        <span id="hero-name">${gelenTahmin}</span>`;
            test.innerHTML = img;
            // go to img
            let goToHero = document.getElementById(`all-heroes-${gelenTahmin}`);
            goToHero.scrollIntoView({behavior: 'smooth'});
            // not same name
            lolHeroes.splice(lolHeroes.indexOf(gelenTahmin), 1);
            // +1
            score.innerText = `${z += 1}/161`;
            let wrong = document.getElementById("champ-input");
            wrong.style.border = "2px solid green";
        }     
    }
    else {
        let wrong = document.getElementById("champ-input");
        wrong.style.border = "2px solid red";
    }
}

