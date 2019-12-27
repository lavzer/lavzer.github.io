document.getElementById('outputer').style.visibility = 'hidden';

document.getElementById("select").onchange = function() {
    var value = this.options[this.selectedIndex].value;
    if(value == '0') {
        document.getElementById('inputer').placeholder = 'Введите километры';
    } else if(value == '1') {
        document.getElementById('inputer').placeholder = 'Введите килограммы';
    } else {
        document.getElementById('inputer').placeholder = 'Введите километры/час';
    }
}


document.getElementById('inputer').addEventListener('input', function(e) {
    var value = document.getElementById('select').options[document.getElementById('select').selectedIndex].value;
    if(value == '0') {
        document.getElementById('outputer').style.visibility = 'visible';
        let km = e.target.value;
        document.getElementById('firstOutput').innerHTML = km * 1000 + 'm';
        document.getElementById('secondOutput').innerHTML = km * 100000 + 'sm';
        document.getElementById('thirdOutput').innerHTML = km * 1000000 + 'mm';
    } else if(value == '1') {
        document.getElementById('outputer').style.visibility = 'visible';
        let kg = e.target.value;
        document.getElementById('firstOutput').innerHTML = kg / 1000 + 't';
        document.getElementById('secondOutput').innerHTML = kg * 1000 + 'g';
        document.getElementById('thirdOutput').innerHTML = kg * 1000000 + 'mg';
    } else {
        document.getElementById('outputer').style.visibility = 'visible';
        let kmh = e.target.value;
        document.getElementById('firstOutput').innerHTML = kmh * 1000 + 'm/s';
        document.getElementById('secondOutput').innerHTML = kmh * 100000 + 'm/h';
        document.getElementById('thirdOutput').innerHTML = kmh * 1000000 + 'km/s';
    }
});