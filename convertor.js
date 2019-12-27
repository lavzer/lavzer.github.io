document.getElementById('theme').onchange = function() {
    var value = this.options[this.selectedIndex].value;
    if(value == 0) {
        body.style.backgroundColor = '#333';
    } else if(value == 1) {
        body.style.backgroundColor = 'grey';
    } else if(value == 2) {
        body.style.backgroundColor = 'blue';
    } else {
        body.style.backgroundColor = 'red';
    }
}





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
        document.getElementById('firstOutput').innerHTML = km * 1000 + ' Метров';
        document.getElementById('secondOutput').innerHTML = km * 100000 + ' Сантиметров';
        document.getElementById('thirdOutput').innerHTML = km * 1000000 + ' Миллиметров';
    } else if(value == '1') {
        document.getElementById('outputer').style.visibility = 'visible';
        let kg = e.target.value;
        document.getElementById('firstOutput').innerHTML = kg / 1000 + ' Тонн';
        document.getElementById('secondOutput').innerHTML = kg * 1000 + ' Килограмм';
        document.getElementById('thirdOutput').innerHTML = kg * 1000000 + 'Миллиграмм';
    } else {
        document.getElementById('outputer').style.visibility = 'visible';
        let kmh = e.target.value;
        document.getElementById('firstOutput').innerHTML = kmh * 1000 / 3600 + ' Метров в секунду';
        document.getElementById('secondOutput').innerHTML = kmh * 1000 + ' Метров в час';
        document.getElementById('thirdOutput').innerHTML = kmh / 3600 + ' Километров в час';
    }
});