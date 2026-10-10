const allowBtn = document.getElementById("allowBtn");
const surprise = document.getElementById("surprise");
const againBtn = document.getElementById("againBtn");

allowBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  allowBtn.querySelector("span").textContent = "Unlocked!";
  document.querySelector(".cartoon-stage").classList.add("party");
  for (let i = 0; i < 12; i++) {
    const confetti = document.createElement("span");
    confetti.textContent = ["✦", "★", "•", "✧"][i % 4];
    confetti.style.cssText = `position:fixed;z-index:20;left:${Math.random()*100}vw;top:-20px;color:${["#ffe66d","#ff6eaa","#7af4e4","#ffffff"][i%4]};font-size:${16+Math.random()*20}px;pointer-events:none;transition:transform 1.6s ease-in,opacity 1.6s;`;
    document.body.appendChild(confetti);
    requestAnimationFrame(() => {
      confetti.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random()*600}deg)`;
      confetti.style.opacity = "0";
    });
    setTimeout(() => confetti.remove(), 1800);
  }
});

againBtn.addEventListener("click", () => {
  surprise.classList.add("hidden");
  allowBtn.querySelector("span").textContent = "Allow";
});
