const { I, mainPage } = inject();

module.exports = {

  elements: {
    field:'input[placeholder="What needs to be done?"]',
    rbComplete: 'ul>li.todo input[type="checkbox"]',
    clearCompleted: 'button.clear-completed',
    allTasks: 'ul.filters>li>a[href="#/all"]',
    activeTasks: 'ul.filters li>a[href="#/active"]',
    completedTasks: 'ul.filters li>a[href="#/completed"]'

  },

  addTask(field){
    I.click(this.elements.field);
    I.fillField(this.elements.field, field);
    I.pressKey('Enter');
  },

  completeTask(){
    I.click(this.elements.rbComplete);
  }, 

  deleteTask(){
    I.click(this.elements.clearCompleted);
  }

}
