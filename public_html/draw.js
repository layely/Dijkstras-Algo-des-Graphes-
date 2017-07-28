var xdakar = 16;
var ydakar = 66;

var xthies = 36;
var ythies = 62;

var xdiourbel = 65;
var ydiourbel = 67;

var xfatick = 60;
var yfatick = 82;

var xkaolack = 83;
var ykaolack = 93;

var xkaffrine = 112;
var ykaffrine = 82;

var xtambacounda = 200;
var ytambacounda = 86;

var xmatam = 180;
var ymatam = 59;

var xlouga = 97;
var ylouga = 49;

var xsaint_louis = 111;
var ysaint_louis = 23;

var xkedougou = 240;
var ykedougou = 116;

var xkolda = 155;
var ykolda = 115;

var xsedhiou = 105;
var ysedhiou = 117;

var xziguinchor = 65;
var yziguinchor = 120;


var villes = ['dakar', 'thies', 'louga', 'diourbel', 'sedhiou', 'kaffrine', 'saint_louis', 'kaolack', 'fatick', 'kedougou', 'ziguinchor', 'kolda', 'matam', 'tambacounda'];
reset();
//var cordonnees = new Array();
//cordonnees[0] = new Array();
//cordonnees[0]['0'] =  16;
//cordonnees[0]['1'] =  66;

function reset() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    ctx.clearRect(0, 0, 800, 600);

    drawAllPoints();
}


var pathGlobal = [];

function draw(path) {
    pathGlobal = path;
    reset();
    var delayMillis = 1000; //1 second
    var i = 0;
    var end = path.length - 1;
    
    $.each(path, function (i, ville) {
        if (i <= path.length - 2) {
            setTimeout(function () {
//                console.log(i + " / " + path.length);
                drawLineBeetwen2city(path[i], path[i+1]);
            }, i * delayMillis);
        }
    });
}



function drawAllPoints() {
    villes.forEach(function (ville) {
        var x = window['x' + ville];
        var y = window['y' + ville];
//        alert(x + " " + y);

        drawPoint(x, y);
    });
}

function drawPoint(x, y) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle="#FF0000";
    ctx.beginPath();

    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLine(xsource, ysource, xdestination, ydestination) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    ctx.moveTo(xsource, ysource);
    ctx.lineTo(xdestination, ydestination);
    ctx.strokeStyle="#FF0000";
    ctx.stroke();

}

function drawLineBeetwen2city(ville1, ville2) {
    var source = ville1.toLowerCase().replace('-', '_');
    var destination = ville2.toLowerCase().replace('-', '_');

    var xsource = window['x' + source];
    var ysource = window['y' + source];

    var xdestination = window['x' + destination];
    var ydestination = window['y' + destination];

    drawLine(xsource, ysource, xdestination, ydestination);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}