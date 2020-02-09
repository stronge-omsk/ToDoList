const todoList = [];
$('#Btn').on('click', addItem)

function addItem() {
  const todoInput = $('#text');
  if (!todoInput.val()) {
    return;
  }
  
  const item = {
    date: new Date,
    name: todoInput.val(),
    completed: false
  };
  // todoList.push(accept);
  todoList.push(item);
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
    const todoItem = todoList[i];
    const li = $('<li>') // const li = document.createElement('li');
    const date = $('<div class="date">');
    date.text(todoItem.date.getHours() + ':' + todoItem.date.getMinutes() + ':' + todoItem.date.getSeconds());
    const name = $('<div class="name">');
    name.text(todoItem.name);
    //   li.appendChild(document.createTextNode(todoList[i]));
    const deleteBtn = $('<input type="button">');
    // deleteBtn.attr('type', 'button');
    deleteBtn.addClass('todo-button-delete')
    deleteBtn.val('Delete');   //= 'Delete';
    $(deleteBtn).on('click', function () {
      deleteItem(i);
    })
    const accept = $('<input type="button">');
    accept.val('Done');
    accept.addClass('todo-button-accept')
    if (todoItem.completed) {
      li.addClass('button-cross-out')
    }
    $(accept).on('click', function (){
      todoList[i].completed = true;
      renderToDoList();
      if(todoItem.completed) {
        li.addClass('todo-button-accept:active')       
      }
      
    })
    li.append(name);
    li.append(date);
    li.append(deleteBtn);
    li.append(accept);
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


// }
