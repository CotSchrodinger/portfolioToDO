
Feature('Main scripts');
const {I, mainPage} = inject()

Before(() => {
    I.amOnPage('/');
    I.wait(5);
    
}); 

Scenario('User add a new task', () => {
    mainPage.addTask('The Task 1 added');
    I.see('The Task 1 added');
    I.see('1 item left', '.todo-count');
});

Scenario('User completed a task', ()=>{

    mainPage.addTask('The Taske 2 is completed');
    mainPage.completeTask();
    I.seeElement('ul > li.todo.completed')
    //I.see('0 item left', '.todo-count');
    });

Scenario('User delete completed a task', () =>{
    mainPage.addTask('The Taske 3 is completed');
    mainPage.completeTask();
    mainPage.deleteTask();
    I.dontSee('The Taske 3 is completed')
});

Scenario('User edit a task', ()=>{
    mainPage.addTask('The Taske 4 is added');
    I.see('The Taske 4 is added');
    I.doubleClick('The Taske 4 is added')
    I.pressKey('Control', 'a');
    I.fillField({css: ':focus'}, 'The Task 4 edited');
    I.pressKey('Enter')
    I.see('The Task 4 edited')
    I.see('1 item left')
});

Scenario('User delete an active task', ()=>{
    mainPage.addTask('This task will be delete');
    I.see('This task will be delete');
    I.click('This task will be delete');
    I.click('button.destroy');
   

});
Scenario('User mark all task comleted', ()=>{
    mainPage.addTask('The task 1');
    mainPage.addTask('The task 2');
    mainPage.addTask('The task 3');
    I.click('label[for="toggle-all"]')

});