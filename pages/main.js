const { I, mainPage } = inject();

module.exports = {

  elements: {
    field:'input[placeholder="What needs to be done?"]',
    rbComplete: 'ul>li.todo input[type="checkbox"]',
    clearCompleted: 'button.clear-completed',
    deleteTask: 'button.destroy',
    allTasks: 'ul.filters>li>a[href="#/all"]',
    activeTasks: 'ul.filters li>a[href="#/active"]',
    completedTasks: 'ul.filters li>a[href="#/completed"]',
    completeAllTask: 'label[for="toggle-all"]',
    activeTaskList: 'a[href="#/active"]',
    compeletedTaskList: 'ul > li.todo.completed'

  },

  addTask(field){
    I.click(this.elements.field);
    I.fillField(this.elements.field, field);
    I.pressKey('Enter');
  },

  completeTask(){
    I.click(this.elements.rbComplete);
  }, 

  deleteTasks(){
    I.click(this.elements.clearCompleted);
  },

  deleteTask(){
    I.click('This task will be delete');
    I.click(this.elements.deleteTask);
  },

  completeAllTask(){
    I.click(this.elements.completeAllTask);
  },


  editTask(){
    I.doubleClick('The Taske 4 is added');
    I.pressKey('Control', 'a');
    I.fillField({css: ':focus'}, 'The Task 4 edited');
    I.pressKey('Enter');
  },
  
  turnActiveList(){
    I.click(this.elements.activeTaskList)

  },
  turnCompletedList(){
    I.click(this.elements.compeletedTaskList);
  }


}
