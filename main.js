let button = document.querySelectorAll("button");
let resultat = document.querySelector("div");

for (let i = 0; i < button.length; i++){

	button[i].addEventListener("click", function(){
			let coupJoueur = button[i].innerHTML;
			console.log(coupJoueur);
			coupJoueur = coupJoueur.toLowerCase();

			let coupOrdi = button[parseInt(Math.random() * 3)].innerHTML;	
			console.log(coupOrdi);
			coupOrdi = coupOrdi.toLowerCase();
			
			if (coupJoueur === coupOrdi){
				resultat.textContent = "Egalité ! L'ordinateur a joué: " + coupOrdi;
			}
			else if ((coupJoueur == "pierre" && coupOrdi == "ciseaux") || 
					(coupJoueur == "feuille" && coupOrdi == "pierre") ||
					(coupJoueur == "ciseaux" && coupOrdi == "feuille")){
				resultat.textContent = "Vous avez gagné ! L'ordinateur a joué: " + coupOrdi;
			}
			else {
				resultat.textContent = "Vous avez perdu ! L'ordinateur a joué: " + coupOrdi;
			}	
	});
			}