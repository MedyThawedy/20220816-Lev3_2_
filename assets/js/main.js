let
    numArr = [5, 22, 15, 100, 55]


/*
Ein Array aus Zahlen und möchten herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
*/

let arrFnArrayIterator = (numArr) => {

    document.write('<h1>Please open the console! : </h1>');

    document.write(`<p>Array numArr = ${numArr} </p>`);
    document.write('<hr>');
    for (let index = 0; index < numArr.length; index++) {
        arrFnZahlen(numArr[index]);
    }
}

let arrFnZahlen = (nr) => {
    for (let i = 2; i < nr; i++) {
        if (nr % i === 0) {
            console.log('Die Zahl ' + nr + ' lässt sich durch ' + i + ' teilen! ');
            console.log(' Das Ergebnis von (' + nr + ' / ' + i + ') = ' + (nr / i));
            document.write('<p> Die Zahl ' + nr + ' lässt sich durch ' + i + ' teilen! ' + ` Das Ergebnis von (' + ${nr} + ' / ' + ${i} + ') = ${(nr / i)} </p>`);
        }
    }
}

arrFnArrayIterator(numArr);
