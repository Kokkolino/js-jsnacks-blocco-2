document.getElementById('inputPair').addEventListener('click', pair);
document.getElementById('gatsbyParty').addEventListener('click', readInvite);
document.getElementById('hitmanParty').addEventListener('click', hitmanPartyInvite);



function pair(){
    let pairNumber = parseInt(prompt("immetti un numero"));
    if (pairNumber % 2 == 0){
        alert(`${pairNumber} é un numero pari`);
    }
    else{
        alert(`${pairNumber + 1} é il numero successivo pari`);
    }
}

let nomiInvitati = ["Gianni", "Carlo", "Silvio", "Zlatan", "Giulio"];
let cognomiInvitati = ["Versace", "Conti", "Berlusconi", "Ibrahimović", "Andreotti"];

function hitmanPartyInvite(){
    let x;
    let hitmanPartyNomi = [];
    let hitmanPartyCognomi = [];

    let howMany = parseInt(prompt("quanti falsi invitati vuoi fare?"));
    for (let i = 0; i < howMany; ++i){
        let maxLength = nomiInvitati.length;
        
        x = Math.floor(Math.random() * (maxLength - 1));
        hitmanPartyNomi.push(nomiInvitati[x])
        x = Math.floor(Math.random() * (maxLength - 1));
        hitmanPartyCognomi.push(cognomiInvitati[x]);
        alert(`${i + 1} "falso" invitato ${hitmanPartyNomi[i] + " " + hitmanPartyCognomi[i]}`);
    }
    console.log(hitmanPartyNomi);
    console.log(hitmanPartyCognomi);
}

function readInvite(){
    let guestNumber = nomiInvitati.length;
    for (let i = 0; i < guestNumber; ++i){
        alert(`${i + 1} invitato ${nomiInvitati[i]+" "+cognomiInvitati[i]}`);
    }
}