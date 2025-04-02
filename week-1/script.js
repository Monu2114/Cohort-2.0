// let p = document.getElementById("count");
// p.textContent = 30;
// function counter(count) {
//   if (count < 0) return;
//   p.textContent = count;
//   console.log(p.textContent);
//   setTimeout(() => {
//     counter(count - 1);
//   }, 1000);
// }
// for (let i = p.textContent; i >= 0; i--) {
//   setTimeout(() => {
//     p.textContent = i;
//     console.log(p.textContent);
//   }, (30 - i) * 1000);
// }

// counter(30);
// // task 2
// const startTime = Date.now(); // Record the current timestamp

// setTimeout(() => {
//   const endTime = Date.now(); // Record the timestamp when callback runs
//   const actualDelay = endTime - startTime; // Calculate time difference

//   console.log(`Expected Delay: 1000ms`);
//   console.log(`Actual Delay: ${actualDelay}ms`);
// }, 1000);

// console.log("Hii");
// console.log(Date.now() - startTime);
// console.log("Bye");
// console.log(Date.now() - startTime);

// task 3
let clock = setInterval(() => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  console.log(`${hours} : ${minutes} : ${seconds}`);
}, 1000);
