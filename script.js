// Глобальная переменная хранит ссылку на дочернее окно
var win;

function access() {
  while (prompt('Введите пароль для доступа к странице:') !== '222222') {
    alert('Пароль не верный.');
    if (confirm('Пароль не верный. Повторить ввод?') === false) {
      window.location.href = 'error.html';
      break;
    }
  }
}

function new_form() {
  var x, y;
  var w = 350;
  var h = 270;
  x = (window.innerWidth - w) / 2 + window.screenX;
  y = (window.innerHeight - h) / 2 + window.screenY;
  win = window.open('', 'w1', 'height=' + h + ',width=' + w + ',left=' + x + ',top=' + y);
  win.document.open();
  win.document.write('<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><title>Новое окно</title>');
  win.document.write('<style>body{font-family:Verdana,Arial;font-size:13px;padding:15px;text-align:center;} a{color:#4682B4;} input{margin-top:10px;}</style>');
  win.document.write('</head><body>');
  win.document.write('<h2>Новое окно</h2>');
  win.document.write('<p>JavaScript - это удобно для работы с окнами и формами.</p>');
  win.document.write('<p><a href="https://dontu.ru/" target="_blank">ДонГТУ</a></p>');
  win.document.write('<p><input type="button" value="Закрыть" name="B1" onclick="opener.exit(opener.win);"></p>');
  win.document.write('</body></html>');
  win.document.close();
}

function new_from() { new_form(); }

function exit(param) {
  if (param && !param.closed) {
    param.alert('Внимание! Окно будет закрыто!');
    param.close();
  } else {
    alert('Дочернее окно не открыто.');
  }
}

function plus() { var a = +document.form1.T1.value; var b = +document.form1.T2.value; document.form1.T3.value = a + b; }
function minus() { var a = +document.form1.T1.value; var b = +document.form1.T2.value; document.form1.T3.value = a - b; }
function proizv() { var a = +document.form1.T1.value; var b = +document.form1.T2.value; document.form1.T3.value = a * b; }
function delen() {
  var a = +document.form1.T1.value; var b = +document.form1.T2.value;
  if (b !== 0) { document.form1.T3.value = a / b; }
  else { alert('Делить на ноль нельзя!'); document.form1.T2.focus(); document.form1.T2.select(); }
}
function stepen() { var a = +document.form1.T1.value; var b = +document.form1.T2.value; document.form1.T3.value = Math.pow(a, b); }
function modul() { var a = +document.form1.T1.value; document.form1.T3.value = Math.abs(a); }
function koren() {
  var a = +document.form1.T1.value;
  if (a >= 0) { document.form1.T3.value = Math.sqrt(a); }
  else { alert('Нельзя извлечь корень из отрицательного числа!'); document.form1.T1.focus(); document.form1.T1.select(); }
}
function exponent() { var a = +document.form1.T1.value; document.form1.T3.value = Math.exp(a); }
function logarifm() {
  var a = +document.form1.T1.value;
  if (a > 0) { document.form1.T3.value = Math.log(a); }
  else { alert('Нельзя рассчитать логарифм для значения меньше или равного 0!'); document.form1.T1.focus(); document.form1.T1.select(); }
}
function sinus() { var a = +document.form1.T1.value; document.form1.T3.value = Math.sin(a); }
function cosinus() { var a = +document.form1.T1.value; document.form1.T3.value = Math.cos(a); }
function tangens() { var a = +document.form1.T1.value; document.form1.T3.value = Math.tan(a); }
function cotangens() {
  var a = +document.form1.T1.value;
  if (a !== 0) { document.form1.T3.value = 1 / Math.tan(a); }
  else { alert('Нельзя рассчитать котангенс из нуля!'); document.form1.T1.focus(); document.form1.T1.select(); }
}
function tochnost() { var a = +prompt('Введите точность', '2'); var b = +document.form1.T3.value; document.form1.T3.value = b.toFixed(a); }
function okruglvverh() { var a = +document.form1.T3.value; document.form1.T3.value = Math.ceil(a); }
function okruglvniz() { var a = +document.form1.T3.value; document.form1.T3.value = Math.floor(a); }
function okrugl() { var a = +document.form1.T3.value; document.form1.T3.value = Math.round(a); }
function steret() { document.form1.T1.value = 0; document.form1.T2.value = 0; document.form1.T3.value = 0; document.form1.T1.focus(); document.form1.T1.select(); }
