class Calculator {
  constructor() {
    this.calcul = document.querySelector("#calcul"); // On récupère le champ de calcul
    this.buttons = document.querySelectorAll("button"); // On récupère les boutons
    this.previousCalculation = null; // On initialise la variable qui contient le dernier calcul
    this.addEventListeners();
  }

  addEventListeners() {
    this.buttons.forEach((elem) => {
      elem.addEventListener("click", () => {  // On ajoute un événement à chaque bouton
        if (elem.id === "AC") {
          this.calcul.value = ""; // On vide le champ de calcul
        } else if (elem.id === "=") {
          const calculation = this.calcul.value.trim();
          const isValid = /^(\d+(\.\d+)?[\+\-\*\/])*[\+\-\*\/]?\d+(\.\d+)?$/.test(calculation);
          if (isValid) {
            const start = Date.now();
            fetch('http://localhost:3000/success', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                calculation: calculation
              })
            })
            .then(response => response.json())
            .then(data => {
              const end = Date.now();
              const time = end - start;
              console.log(`Time taken to evaluate calculation: ${time}ms`);
            })
            .catch(error => console.error(error));
          } else {
            fetch('http://localhost:3000/error', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                message: 'Invalid calculation'
              })
            })
            .then(response => response.json())
            .then(data => {
              console.error(data);
            })
            .catch(error => console.error(error));
          }
        } else if (elem.id === "remove") {
            if (this.previousCalculation) {
              this.calcul.value = this.previousCalculation;
              this.previousCalculation = null;
            } else {
              this.calcul.value = this.calcul.value.slice(0, -1);
            }
        } else {
          this.calcul.value += elem.id;
        }
      });
    });
  }
}
