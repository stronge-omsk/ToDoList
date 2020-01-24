document.getElementById('Btn').onclick = function() {
  const inp = document.getElementById('text');
  const type = inp.value;
  inp.value = '';
  const list = document.createElement('div');
  list.innerText = type;
  document.getElementsByClassName('main')[0].appendChild(list);
 
  const press = document.createElement('input');
  press.type = 'button';
  press.value = 'Delete';
  list.appendChild(press);


}