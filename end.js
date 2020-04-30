let username = document.getElementById('username')
let saveScoreBtn = document.getElementById('saveScoreBtn')
let finalScore = document.getElementById('finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')

let highScores = JSON.parse(localStorage.getItem('highScores')) || []
let Max_High_Scores = 5

finalScore.innerHTML = mostRecentScore



username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = (e) => {
    e.preventDefault()

    let score = {
    score: mostRecentScore,
    name: username.value
    }
highScores.push(score)
highScores.sort( (a,b) => b.score - a.score)
highScores.splice(5)

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('/')

}
