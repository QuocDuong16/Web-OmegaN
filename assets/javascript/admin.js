function showSelect(temp) {
    var actives = document.querySelectorAll(temp);
    var selects = document.querySelectorAll('.select-js');
    var displays = document.querySelectorAll('.dis-js');
    for (var i = 0; i < displays.length; i++) {
        displays[i].style.display = 'none';
    }
    for (var j = 0; j < selects.length; j++) {
        if (selects[j].classList.length > 2) {
            selects[j].classList.remove('active');
        }
    }
    actives[0].classList.add('active');
    actives[1].style.display = 'block';
    actives[2].style.display = 'block';
}