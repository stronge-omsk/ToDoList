const todoList = [];
$('#Btn').on('click', addItem)
$('.search-tasks').on('click', search)
$('#sort-ascending').on('click', sort_ascending)
$('#sort-descending').on('click', sort_descending)

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
    
  todoList.push(item);
  todoInput.val('');
  renderToDoList(todoList);
};

function renderToDoList(array) {
  const list = $('.todo-list');
  list.empty();
  for (let i = 0; i < array.length; i++) {
    const todoItem = array[i];   
    const li = $('<li>') // const li = document.createElement('li');
    const date = $('<div class="date">');
    date.text(todoItem.date.getHours() + ':' + todoItem.date.getMinutes() + ':' + todoItem.date.getSeconds());
    const name = $('<div class="name">');
    name.text(todoItem.name);
    //   li.appendChild(document.createTextNode(todoList[i]));
    const deleteBtn = $('<input type="image" src="image/delete.png">');
    // deleteBtn.attr('type', 'button');
    deleteBtn.addClass('todo-button-delete')
    // deleteBtn.val('Delete');   //= 'Delete';
    $(deleteBtn).on('click', function () {
      deleteItem(i);
    })
    const accept = $('<input type="image" src="image/check.png">');  //$('<input type="button">');
    // accept.val('Done');
    accept.addClass('todo-button-accept')
    if (todoItem.completed) {
      li.addClass('button-cross-out')
    }
    $(accept).on('click', function () {
      todoItem.completed = true;
      renderToDoList(array);
    })
    if (todoItem.completed) {
      accept.addClass('button-accept')
    }

    li.append(name);
    li.append(date);
    li.append(deleteBtn);
    li.append(accept);
    li.addClass('todo-item');
    list.append(li);
  }

}
console.log(1);


function sort_ascending() {
  todoList.sort(function(a,b){
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else if (a.name == b.name) {
      return 0;
    }
  });
  renderToDoList(todoList);

}

function sort_descending () {
  todoList.sort(function(a,b){
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else if (a.name == b.name) {
      return 0;
    }
  })
  renderToDoList(todoList);
}

function deleteItem(index) {
  todoList.splice(index, 1)
  renderToDoList(todoList);
}

function search() {
  const srch = $('.search').val();
  const filtered = todoList.filter(todoItem => todoItem.name.indexOf(srch) !== -1);
  renderToDoList(filtered)
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
