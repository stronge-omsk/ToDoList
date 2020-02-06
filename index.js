const todoList = [];
$('#Btn').on('click', addItem)

function addItem() {
  const todoInput = $('#text');
  if (!todoInput.val()) {
    return;
  }
  todoList.push(todoInput.val())
  todoInput.val('');
  renderToDoList();

};
// document.getElementById('Btn').addEventListener('click', addItem)
// const b = document.createElement('button')
// document.body.appendChild(b)
// console.log(b);
// $('#Btn').on('click', addItem)

function renderToDoList() {
  const list = $('.todo-list');
  list.empty();
  for (let i = 0; i < todoList.length; i++) {
    const li = $('<li>') // const li = document.createElement('li');
    li.text(todoList[i])
    //   li.appendChild(document.createTextNode(todoList[i]));
    const deleteBtn = $('<input type="button">');
    // deleteBtn.attr('type', 'button');
    deleteBtn.addClass('todo-button-delete')
    deleteBtn.val('Delete');   //= 'Delete';
    $(deleteBtn).on('click', function () {
      deleteItem(i);
    })
    li.append(deleteBtn);
    li.addClass('todo-item');
    list.append(li);

  }

}

function deleteItem(index) {
  todoList.splice(index, 1)


  renderToDoList();

}






































// let i = 0;
// while (i < 10) {
//   i++;
// }


// const todoList = [];
// document.getElementById('Btn').addEventListener('click', function () {
//   const list = document.getElementsByClassName('todo-list')[0];
//   list.value = '';
//   const todoInput = document.getElementById('text').value;
//   todoList.push(todoInput)

//   const item = document.createElement('li');
//    todoList.forEach (function() {
//     const listItem = document.createTextNode(todoList[i]);
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(todoList[i]));
//     list.append(li);
//   })
// });





// // const todoList = [];
// document.getElementById('Btn').onclick = function () {
//   const inp = document.getElementById('text');
//   const type = inp.value;
//   inp.value = '';
//   const todoList = [1];
//   todoList.forEach(myFunction);
//   function myFunction() {
//     const list = document.createElement('div');
//     list.innerText = type;
//     list.classList.add('todo-item');
//     document.getElementsByClassName('todo-list')[0].appendChild(list);
//     const press = document.createElement('input');
//     press.type = 'button';
//     press.value = 'Delete';
//     press.classList.add('todo-button-delete');
//     list.appendChild(press);
//     press.addEventListener("click", (event) => {
//       list.remove('div')

//     });
//   }


// };
