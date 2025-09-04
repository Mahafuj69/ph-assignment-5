let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function increaseHeart() {
  heartCount++;
  document.getElementById("heartCount").textContent = heartCount;
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    copyCount++;
    document.getElementById("copyCount").textContent = copyCount;
    alert(" Number " + number + " copied to clipboard!");
  });
}

function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert(" Not enough coins to make this call!");
    return;
  }
  coinCount -= 20;
  document.getElementById("coinCount").textContent = coinCount;

  alert(" Calling " + serviceName + " at " + number);

  const li = document.createElement("li");
  li.classList.add("history-item");

  const left = document.createElement("div");
  left.classList.add("history-left");
  left.innerHTML = `<strong>${serviceName}</strong><br><span>${number}</span>`;

  const right = document.createElement("div");
  right.classList.add("history-time");
  right.textContent = new Date().toLocaleTimeString();

  li.appendChild(left);
  li.appendChild(right);

  document.getElementById("historyList").prepend(li);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
