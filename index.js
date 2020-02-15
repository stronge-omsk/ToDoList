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
    const li = $('<li>');
    const date = $('<div class="date">');
    date.text(todoItem.date.getHours() + ':' + todoItem.date.getMinutes() + ':' + todoItem.date.getSeconds());
    const name = $('<div class="name">');
    name.text(todoItem.name);
    const check = $('<input type="checkbox" id="cheked">')
    const deleteBtn = $('<input type="image" src="image/delete.png">');
    deleteBtn.addClass('todo-button-delete')
    $(deleteBtn).on('click', function () {
      deleteItem(i);
    })
    const accept = $('<input type="image" src="image/check.png">');
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
    li.append(check);
    li.append(name);
    li.append(date);
    li.append(deleteBtn);
    li.append(accept);
    li.addClass('todo-item');
    list.append(li);
  }
}

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
