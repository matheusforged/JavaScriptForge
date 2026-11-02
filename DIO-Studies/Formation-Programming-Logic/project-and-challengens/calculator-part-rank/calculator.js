let result = calculationMatches(1000, 1)
let playerRank = ""


function calculationMatches (matchesWon, matchesLost){
    let winLossRecord = matchesWon - matchesLost
    return winLossRecord
}

if (result <= 10) {
    playerRank = "Ferro"

} else if (result <= 20) {
    playerRank = "Bronze"

} else if (result <= 50) {
    playerRank = "Prata"

} else if (result <= 80) {
    playerRank = "Ouro"

} else if (result <= 90) {
    playerRank = "Diamante"

} else if (result <= 100) {
    playerRank = "Lendário"

} else {
    playerRank = "Imortal"
}

console.log(`O Herói tem um saldo de Vitorias de ${result} e está no nível de ${playerRank}`)
