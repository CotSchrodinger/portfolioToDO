
Feature('Main scripts');
const {I, mainPage} = inject()

Before(() => {
    I.amOnPage('/');
    I.wait(3);
    
}); 

Scenario('User add a new task', () => {
    mainPage.addTask('The Task 1 added');
    //I.see('The Task 1 added');
    //I.see('1 item left', '.todo-count');
});

Scenario('User completed a task', ()=>{

    mainPage.addTask('The Taske 2 is completed');
    mainPage.completeTask();
    //I.seeElement('ul > li.todo.completed')
    //I.see('0 item left', '.todo-count');
    });

Scenario('User delete completed a task', () =>{
    mainPage.addTask('The Taske 3 is completed');
    mainPage.completeTask();
    mainPage.deleteTasks();
    //I.dontSee('The Taske 3 is completed')
});

Scenario('User edit a task', ()=>{
    mainPage.addTask('The Taske 4 is added');
    //I.see('The Taske 4 is added');
    mainPage.editTask();
    //I.see('The Task 4 edited')
    //I.see('1 item left')
});

Scenario('User delete an active task', ()=>{
    mainPage.addTask('This task will be delete');
    mainPage.deleteTask();
   

});
Scenario('User mark all task comleted', ()=>{
    mainPage.addTask('The task 1');
    mainPage.addTask('The task 2');
    mainPage.addTask('The task 3');
    mainPage.completeAllTask();

});