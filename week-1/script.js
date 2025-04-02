let p = document.getElementById("count");
p.textContent = 30;
function counter(count) {
  if (count < 0) return;
  p.textContent = count;
  console.log(p.textContent);
  setTimeout(() => {
    counter(count - 1);
  }, 1000);
}
for (let i = p.textContent; i >= 0; i--) {
  setTimeout(() => {
    p.textContent = i;
    console.log(p.textContent);
  }, (30 - i) * 1000);
}

counter(30);
// task 2
const startTime = Date.now(); // Record the current timestamp

setTimeout(() => {
  const endTime = Date.now(); // Record the timestamp when callback runs
  const actualDelay = endTime - startTime; // Calculate time difference

  console.log(`Expected Delay: 1000ms`);
  console.log(`Actual Delay: ${actualDelay}ms`);
}, 1000);

console.log("Hii");
console.log(Date.now() - startTime);
console.log("Bye");
console.log(Date.now() - startTime);

// task 3
let btn = document.getElementById("toggleClock");
let format = document.getElementById("format");
let isRunning = false;
let clockInterval;
let is12HourFormat = false;
let showColon = true;
btn.addEventListener("click", () => {
  if (isRunning) {
    end();

    btn.textContent = "Start";
  } else {
    start();
    btn.textContent = "Pause";
  }
});

format.addEventListener("click", () => {
  is12HourFormat = !is12HourFormat;
  format.textContent == is12HourFormat ? "24-hour" : "12-hour";
});
function start() {
  if (!isRunning) isRunning = true;
  clockInterval = setInterval(updateTime, 1000);
}
function end() {
  if (isRunning) isRunning = false;
  clearInterval(clockInterval);
}

function updateTime() {
  const time = new Date();
  let hours = time.getHours();
  let ampm = "";

  if (is12HourFormat) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // to handle 0 AM 0 is falsy in js therefore we get 12 AM instead
  }
  hours = String(hours).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const colon = showColon ? ":" : " ";
  document.getElementById(
    "clock"
  ).textContent = `${hours}${colon}${minutes}${colon}${seconds} ${ampm}`;
  showColon = !showColon;
}
