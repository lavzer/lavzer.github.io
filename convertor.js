document.getElementById('output').style.visibility = 'hidden';
document.getElementById('kmInput').addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    let km = e.target.value;
    document.getElementById('metersOutput').innerHTML = km * 1000;
    document.getElementById('smOutput').innerHTML = km * 100000;
    document.getElementById('milimetersOutput').innerHTML = km * 1000000;
});