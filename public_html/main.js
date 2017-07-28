var g = new Graph();

g.addVertex('DAKAR', {THIES: 70});
g.addVertex('THIES', {DAKAR: 70, LOUGA: 123, DIOURBEL: 76, FATICK: 92});
g.addVertex('LOUGA', {THIES: 123, DIOURBEL: 178, SAINT_LOUIS: 61, MATAM: 365});
g.addVertex('DIOURBEL', {THIES: 76, LOUGA: 178, KAFFRINE: 124, KAOLACK: 64, FATICK: 47});
g.addVertex('SEDHIOU', {KAOLACK: 196, FATICK: 239, ZIGUINCHOR: 150, KOLDA: 89});
g.addVertex('KAFFRINE', {DIOURBEL: 124, KAOLACK: 65, TAMBACOUNDA: 213});
g.addVertex('SAINT_LOUIS', {LOUGA: 61, MATAM: 419});
g.addVertex('KAOLACK', {DIOURBEL: 64, SEDHIOU: 196, KAFFRINE: 65, FATICK: 37, ZIGUINCHOR: 231});
g.addVertex('FATICK', {THIES: 92, DIOURBEL: 47, SEDHIOU: 239, KAOLACK: 37, ZIGUINCHOR: 275});
g.addVertex('KEDOUGOU', {KOLDA: 390, TAMBACOUNDA: 235});
g.addVertex('ZIGUINCHOR', {SEDHIOU: 150, KAOLACK: 231, FATICK: 275});
g.addVertex('KOLDA', {SEDHIOU: 89, KEDOUGOU: 390, TAMBACOUNDA: 203});
g.addVertex('MATAM', {LOUGA: 365, SAINT_LOUIS: 419, TAMBACOUNDA: 371});
g.addVertex('TAMBACOUNDA', {KAFFRINE: 213, KEDOUGOU: 235, KOLDA: 203, MATAM: 371});
// Log test, with the addition of reversing the path and prepending the first node so it's more readable
//console.log(g.shortestPath('A', 'H').concat(['A']).reverse());

var shortestPath = g.shortestPath('DAKAR', 'ZIGUINCHOR').concat(['DAKAR']).reverse();
console.log(shortestPath);



//document.write(distance);

$(document).on('submit', 'form.entres', function () {
    var source = $('#source').find(":selected").text();
    var destination = $('#destination').find(":selected").text();
    
    $('#labelSource').html(source);
    $('#labelDestination').html(destination);
    
    var shortestPath = g.shortestPath(source.replace('-', '_'), destination.replace('-', '_')).concat([source.replace('-','_')]).reverse();
    distance = g.getPathDistance(shortestPath);
    
    $('#distance').html(distance);
    
    draw(shortestPath);
    return false;
});

