document.getElementById('Btn').onclick = function () {
  const inp = document.getElementById('text');
  const type = inp.value;
  inp.value = '';
  const list = document.createElement('div');
  list.innerText = type;
  list.classList.add('todo-item');
  document.getElementsByClassName('todo-list')[0].appendChild(list);
  const press = document.createElement('input');
  press.type = 'button';
  press.value = 'Delete';
  press.classList.add('todo-button-delete');
  list.appendChild(press);
  press.addEventListener("click", (event) => {
    list.remove('div')
  });


};

