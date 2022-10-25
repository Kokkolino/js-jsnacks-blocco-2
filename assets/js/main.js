document.getElementById('inputPair').addEventListener('click', even);
document.getElementById('gatsbyParty').addEventListener('click', readInvite);
document.getElementById('hitmanParty').addEventListener('click', hitmanPartyInvite);
document.getElementById('oddArray').addEventListener('click', sumOdd);
document.getElementById('inputArrays').addEventListener('click', arrays);




function even(){
    let evenNumber = parseInt(prompt("immetti un numero"));
    if (evenNumber % 2 == 0){
        alert(`${evenNumber} é un numero pari`);
    }
    else{
        alert(`${evenNumber + 1} é il numero successivo pari`);
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

function sumOdd(){
    let z = parseInt(prompt("quanti numeri vuoi immettere?"));
    let sum = 0;
    let oddArray = [];
    for (let i = 0; i < z; ++i){
        oddArray.push(parseInt(prompt("immetti un numero")));
        if(i % 2 != 0){
            sum += oddArray[i];
        }
    }
    console.log(oddArray);
    console.log(sum);
    alert(`la somma é ${sum}`);
}

function arrays(){
    let arrayLength1 = parseInt(prompt("quanto grande deve essere il  vettore A?"));
    let arrayLength2 = parseInt(prompt("quanto grande deve essere il  vettore B?"));
    let array1 = [];
    let array2 = [];
    
    for (let i = 0; i < arrayLength1; ++i){
        array1.push(Math.floor(Math.random() * 9999));
    }
    console.log(array1, `inizialmente il vettore A conteneva ${array1.length} numeri`);
    for (let i = 0; i < arrayLength2; ++i){
        array2.push(Math.floor(Math.random() * 9999));
    }
    console.log(array2, `inizialmente il vettore B conteneva ${array2.length} numeri`);
    
    if(array1.length > array2.length){
        let y = array1.length - array2.length;
        for (let i = 0; i < y; ++i){
            array2.push(parseInt(prompt("immetti un numero")))
        }
        
    }
    else if(array1.length < array2.length){
        let y = array2.length - array1.length;
        for (let i = 0; i < y; ++i){
            array1.push(parseInt(prompt("immetti un numero")))
        }
    }
    console.log(array1, `ora il vettore A contiene ${array1.length} numeri`);
    console.log(array2, `ora il vettore B contiene ${array2.length} numeri`);

}