var mois = [ "Janvier","Février", "Mars", "Avril", "mai", "juin", "Juillet", "aout", "Septembre", "Octobre", "Novembre", "Décembre"];

mois.splice(7,1,"Août");

for (var i = 0; i < mois.length; i++) {
	
	console.log (i);
}


console.log(mois[3]);
console.log(mois[5]);
console.log(mois[10]);
