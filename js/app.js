let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  let emojiOne = Math.floor(Math.random() * fighters.length)
  let emojiTwo = Math.floor(Math.random() * fighters.length)
  stageEl.textContent = fighters[emojiOne] + " vs " + fighters[emojiTwo]
})

