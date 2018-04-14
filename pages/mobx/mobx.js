// pages/mobx/mobx.js
import { TodoStore } from '../../stores/index'
const observer = require('../../static/libs/observer.js').observer
const action = require('../../static/libs/mobx.js').action

Page(observer({
  props: {
    todoStore: TodoStore
  },
  // your other code below
  onLoad: function () {
  },
  handleAddTodo: function(title) {
    this.props.todoStore.addTodo('haah')
  },
  handleRemoveTodo: function() {
    this.props.todoStore.removeTodo()
  }
})
)