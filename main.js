const calcul = document.querySelector("#calcul");
const buttons = document.querySelectorAll("button");

buttons.forEach((elem) => {
  elem.addEventListener("click", () => {
      if(elem.id === "AC"){
        calcul.value = "";
      } else if(elem.id === "=") {
        calcul.value = eval(calcul.value);
      } else if(elem.id === "remove"){
        calcul.value = calcul.value.slice(0, -1);
      } else {
        calcul.value += elem.id;
      }
    });
});