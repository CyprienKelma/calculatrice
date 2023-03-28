/* Etape 2 : 
  + Le code JS de l'étape 1 à été mis dans la classe Calculette
  + Création d'une instance de la classe Calculette
  + Création d'un historique du dernier calcul
*/

/* IMPORTANT : J'ai fait une version avec liste en guise d'historique.
               Mais je me suis rendu compte que c'était plus simple de faire une variable 
               qui contient le dernier calcul.
               De plus, il y a un bug dans la version avec liste. Alors que la version avec variable
               fonctionne parfaitement.
               C'est pourquoi j'ai fait une version avec variable aussi (que je vous recommande plutôt que l'autre).
               Je vous laisse choisir laquelle vous préférez. EN SACHANT QU'il EST DEMANDÉ
               D'AFFICHER QUE LE DERNIER CALCUL AVEC UN BOUTON. => Donc une variable est bien plus simple.
*/

/* Version avec variable en guise d'historique */


  class Calculator {
    constructor() {
      this.calcul = document.querySelector("#calcul"); // On récupère le champ de calcul
      this.buttons = document.querySelectorAll("button"); // On récupère le champ de calcul
      this.previousCalculation = null; // On initialise la variable qui contient le dernier calcul
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.buttons.forEach((elem) => {
        elem.addEventListener("click", () => {  // On ajoute un événement à chaque bouton
          if (elem.id === "AC") {
            this.calcul.value = ""; // On vide le champ de calcul
          } 
          else if (elem.id === "=") {
            this.previousCalculation = this.calcul.value; // On stocke le dernier calcul
            this.calcul.value = eval(this.calcul.value); // On évalue le calcul pour afficher le résultat
          } 
          else if (elem.id === "remove") {

            /*Le bouton return "←" permet à la fois de supprimer
              le dernier caractère et de revenir au dernier calcul */

            if (this.previousCalculation) { // Si on a un dernier calcul
              this.calcul.value = this.previousCalculation; // On affiche le dernier calcul
              this.previousCalculation = null; // On vide la variable qui contient le dernier calcul
            } else {
              this.calcul.value = this.calcul.value.slice(0, -1); // Sinon on supprime simplement le dernier caractère
            }
          } 
          else {
            this.calcul.value += elem.id; // On ajoute le caractère au champ de calcul quand on appuie sur un bouton
          }
        });
      });
    }
  }
  
  const calculator = new Calculator(); // On crée une instance de la classe Calculette


                      /* ************************************************ */
                          /* Version avec liste en guise d'historique */

/*
  class CalculetteListe {
    constructor(){
      this.calcul = document.querySelector("#calcul"); // On récupère le champ de calcul
      this.buttons = document.querySelectorAll("button"); // On récupère le champ de calcul
      this.addEventListener(); // On ajoute les événements
  
      this.historique = []; // On initialise l'historique des calculs
    }
  
    addEventListener(){
      this.buttons.forEach((elem) => {
        elem.addEventListener("click", () => {
          if(elem.id === "AC"){
            this.calcul.value = ""; // On vide le champ de calcul
            this.historique = []; // On vide l'historique des calculs
          } 
          else if(elem.id === "=") {
            this.calcul.value = eval(this.calcul.value);
            this.historique.push(this.calcul.value); // On ajoute la ligne de calcul à l'historique
          } 
          else if(elem.id === "remove"){
            if (this.calcul.value !== '') {
              // Si on supprime le dernier caractère ET qu'il s'agit d'un calcul déjà effectué
              if(this.historique.length > 0 && this.calcul.value === this.historique[this.historique.length - 1].toString()){
                this.calcul.value = this.historique.pop(); // On supprime la ligne de calcul de l'historique
              } else {
                // On supprime le dernier caractère
                this.calcul.value = this.calcul.value.slice(0, -1);
              }
            }
          } 
          else {
            // On ajoute le caractère au champ de calcul
            this.calcul.value += elem.id;
          }
        });
      });
    }
  }
  
  const calculetteListe = new CalculetteListe(); // On crée une instance de la classe CalculetteListe

*/
