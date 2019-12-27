document.getElementById('lengthOutput').style.visibility = 'hidden';
document.getElementById('wgInput').style.visibility = 'hidden';
document.getElementById('spdInput').style.visibility = 'hidden';

document.getElementById("select").onchange = function() {
    var value = this.options[this.selectedIndex].value;
    if(value == '0') {
        document.getElementById('kmInput').style.visibility = 'visible';
        document.getElementById('wgInput').style.visibility = 'hidden';
        document.getElementById('spdInput').style.visibility = 'hidden';
    } else if(value == '1') {
        document.getElementById('kmInput').style.visibility = 'hidden';
        document.getElementById('wgInput').style.visibility = 'visible';
        document.getElementById('spdInput').style.visibility = 'hidden';
    } else {
        document.getElementById('kmInput').style.visibility = 'hidden';
        document.getElementById('wgInput').style.visibility = 'hidden';
        document.getElementById('spdInput').style.visibility = 'visible';
    }
}

document.getElementById('kmInput').addEventListener('input', function(e) {
    document.getElementById('lengthOutput').style.visibility = 'visible';
    let km = e.target.value;
    document.getElementById('metersOutput').innerHTML = km * 1000;
    document.getElementById('smOutput').innerHTML = km * 100000;
    document.getElementById('milimetersOutput').innerHTML = km * 1000000;
});