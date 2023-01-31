
// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

// We start the song at 99 bottles
// -> Take _1_ down, pass it around
// -> we have now 98 bottles

// -> then, Take _2_ down, pass them around
// -> we have now 96 bottles

// -> then, Take _3_ down, pass them around
// -> we have now 93 bottles

// ... ect

let bottles = prompt( "saisir le nombres de bouteilles" )

let start=confirm("We start the song at " + bottles + " bottles ? " )
let taken = 1;
console.log("We start the song at " + bottles + " bottles");
while (bottles > 0) {
    // taken == 1 ? itOrThen="it" : itOrThen="then";
    if (taken === 1) {
        itOrThen="it";
        orThen=""
        
    } else {
        itOrThen = "then"
        orThen=itOrThen+", "
    }
    
        bottles = bottles-taken;
        console.log(orThen+"Take " + taken + " down, pass "+itOrThen+" around ");
        if (bottles < 0 ) {
            bottles = 0;
        }
        console.log(" -> we have now " + bottles + " bottles ");
        taken++;
        
}

// 3. La chanson doit se terminer par "0 bouteille de bière sur le mur" ou "pas de bouteille de bière sur le mur".


// 4. Remarque : Assurez-vous que la grammaire est correcte.

// Pour 1 bouteille, vous la faites passer.
// Pour plus d'une bouteille, vous les faites passer.