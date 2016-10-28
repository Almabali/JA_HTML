/**
 * Created by 212585843 on 10/28/2016.
 */
//Scripten belül definiált függvény
function functionFillDiv(p1) {
    for (var i=0; i<=p1;i++){
        document.getElementById('javatestDiv').innerHTML += i+ '<br>';
    }
}
functionFillDiv(15);

//Simán a Scripten belül lefutó egyszei kód
for (var i=0; i<=10;i++){
    console.log(i);
}

//Függvény lehet változó is, nevesítetlenül át lehet adni - létre lehet hozni
var functionVar = function () {
    return document.getElementById("rep").innerHTML;
}
document.getElementById('javatestDiv').innerHTML += functionVar();

setInterval(document.getElementById('javatestDiv').innerHTML += this.currentTime.toString(1) + '<br>', 1);
