document.onmousedown = right;

var isCtrl = false;
var msg2 = "Contenido protegido por la ley de derechos de autor ";

function right(e) {
    var msg = "Contenido protegido por la ley de derechos de autor";
    if (navigator.appName == 'Netscape' && e.which == 3) {
        alert(msg);
    } else if (navigator.appName == 'Microsoft Internet Explorer' && event.button == 2) {
        alert(msg);

        return false;
    }
    return true;
}

document.onkeyup = function (e) {
    if (e.which == 17) isCtrl = false;
}

document.onkeydown = function (e) {
    if (e.which == 17) isCtrl = true;
    if (e.which == 85 && isCtrl == true) {
        alert(msg2);

        return false;
    }
}