document.getElementById('inputPair').addEventListener('click', pair)



function pair(){
    let pairNumber = parseInt(prompt("immetti un numero"));
    if (pairNumber % 2 == 0){
        alert(`${pairNumber} é un numero pari`);
    }
    else{
        alert(`${pairNumber + 1} é il numero successivo pari`);
    }
}