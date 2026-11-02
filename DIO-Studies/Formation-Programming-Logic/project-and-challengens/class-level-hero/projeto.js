//Nomeação do Heroi e quantidade de XP
let heroName = "Matheus, Deus supremo do Universo"
let heroExp = 9000
let heroLevel = ""

//Classificação do Heroi por quantidade de XP

if(heroExp <= 1000){
    heroLevel = "Ferro"
} else if(heroExp <= 2000){
    heroLevel = "Bronze"
} else if(heroExp <= 5000){
    heroLevel = "Prata"
} else if(heroExp <= 7000){
    heroLevel = "Ouro"
} else if(heroExp <= 8000){
    heroLevel = "Platina"
} else if(heroExp <= 9000){
    heroLevel = "Ascente"
} else if(heroExp <= 10000){
    heroLevel = "Imortal"
} else {
    heroLevel = "Radiante"
}

console.log(`The hero by name ${heroName} is on the level of ${heroLevel}`);

