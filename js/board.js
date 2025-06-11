const buttonclick = function (e) {};
const inputtyping = function (e) {
  console.log("scrivi", e);
};
const buttonover = function (e) {
  console.log("ok", e);
};
const myform = document.getElementById("inputtyping");
myform.addEventListener("submit", (e) => {
  e.preventDefault();
  const myinputtyping = document.getElementById("inputtyping");
  const inputtyping = myinputtyping.value;
});
