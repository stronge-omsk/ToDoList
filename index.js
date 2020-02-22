let todoList = [];
todoList = JSON.parse(localStorage.getItem('todoList'));
todoList.forEach(function(todoItem) {
  todoItem.date = new Date(todoItem.date);
})
renderToDoList(todoList);
$('#Btn').on('click', addItem)
$('.search-tasks').on('click', search)
$('.sortName').on('click', sortName)
$('.sortDate').on('click', sortDate)


$('#chk-delete').on('click', function () {
 
  todoList.forEach(function (todoItem, index) {
    if (todoItem.check === true) {
      todoList.splice(index, 1);
    }
  });
  renderToDoList(todoList);
});


const qwe = $('.sortName');
if (qwe === true) {

}

function addItem() {
  const todoInput = $('#text');
  if (!todoInput.val()) {
    return;
  }
  const item = {
    date: new Date,
    name: todoInput.val(),
    completed: false,
    check: false
  };

  todoList.push(item);
  todoInput.val('');
  renderToDoList(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

function renderToDoList(array) {
  const list = $('.todo-list');
  list.empty();
  for (let i = 0; i < array.length; i++) {
    const todoItem = array[i];
    const li = $('<li>');
    // const sort = $('<div class="sortItem">');
    const date = $('<div class="date">');
    date.text(todoItem.date.getHours() + ':' + todoItem.date.getMinutes() + ':' + todoItem.date.getSeconds());
    const name = $('<div class="name">');
    name.text(todoItem.name);
    const check = $('<input type="checkbox" class="cheked">')
    const deleteBtn = $('<input type="image" src="image/delete.png">');
    deleteBtn.addClass('todo-button-delete')
    $(deleteBtn).on('click', function () {
      deleteItem(i);
      localStorage.setItem('todoList', JSON.stringify(todoList));
    })
    //$("#myCheckbox").prop("checked");
    $(check).on('click', function () {
      if (todoItem.check === false) {
        todoItem.check = true;
        // renderToDoList(todoList);  
      }
      // renderToDoList(todoList);
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

let ascDate = true;
let ascName = true;

function sortDate() {
  if (ascDate) {
    sort_ascending('date');
    ascDate = false;
  }
  else {
    sort_descending('date');
    ascDate = true;
  }
}

function sortName() {
  if (ascName) {
    sort_ascending('name');
    ascName = false;
  }
  else {
    sort_descending('name');
    ascName = true;
  }
}

function sort_ascending(sortName) {
  todoList.sort(function (a, b) {
    if (a[sortName] > b[sortName]) {
      return 1;
    } else if (a[sortName] < b[sortName]) {
      return -1;
    } else if (a[sortName] == b[sortName]) {
      return 0;
    }
  });
  renderToDoList(todoList);

}

function sort_descending(sortName) {
  todoList.sort(function (a, b) {
    if (a[sortName] > b[sortName]) {
      return -1;
    } else if (a[sortName] < b[sortName]) {
      return 1;
    } else if (a[sortName] == b[sortName]) {
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
