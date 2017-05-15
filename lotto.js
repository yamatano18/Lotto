var button = document.getElementById('buttonRandom');
var board = document.getElementById('board');

function generateRandoms() {
/* Generating new array with numbers from 1 to 'n' */
    var n = 49;
    var v = new Array(n);
    for (var i=0; i<n; i++) {
        v[i] = i + 1;
    }
    /* Generating 'k' random numbers */
    var vect = '';
    k = 6;
    var vToSort = [6];
    for (var i=0; i<k; i++) {
        var r = Math.floor(Math.random() * n);
        vToSort[i] = v[r];
        v[r] = v[n-1];
        n--;
    }
    vToSort.sort(function(a, b){return a-b});
    for (var i=0; i<k; i++)
        vect += vToSort[i] + ' ';
    return vect;
}

function writeToDiv() {
    vector = generateRandoms();
    'use strict';
    board.innerHTML = '';
    board.innerHTML = board.innerHTML + vector;
}
                     
button.addEventListener('click', writeToDiv);