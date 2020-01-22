const {I, mainPage} = inject()

Feature('Filters');
Before(()=>{
    I.amOnPage('/');
    I.wait(3);
})

Scenario('User see only active tasks', () => {

mainPage.addTask('The task 1');
mainPage.addTask('The task 2');
mainPage.addTask('The task 3');
I.see( 'The task 1');
I.see( 'The task 2');
I.see( 'The task 3');
mainPage.completeTask();
I.seeElement('ul > li.todo.completed');
mainPage.turnActiveList();
I.see( 'The task 2');
I.see( 'The task 3');
I.dontSee('The task 1');

});

Scenario('User see only completed tasks', ()=>{

mainPage.addTask('The task 1');
mainPage.addTask('The task 2');
mainPage.addTask('The task 3');
I.see( 'The task 1');
I.see( 'The task 2');
I.see( 'The task 3');
mainPage.completeTask();
I.click('a[href="#/completed"]');
mainPage.turnCompletedList();
I.see( 'The task 1');
I.dontSee('The task 2');
I.dontSee('The task 3');

});