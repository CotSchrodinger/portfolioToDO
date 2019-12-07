const {I, mainPage} = inject()

Feature('Filters');
Before(()=>{
    I.amOnPage('/');
    I.wait(5)
})

Scenario('User see only active tasks', () => {

mainPage.addTask('The task 1');
mainPage.addTask('The task 2');
mainPage.addTask('The task 3');
I.see( 'The task 1');
I.see( 'The task 2');
I.see( 'The task 3');
mainPage.completeTask();
I.seeElement('ul > li.todo.completed')
I.click('a[href="#/active"]');
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
I.seeElement('ul > li.todo.completed')
I.click('a[href="#/completed"]');
I.see( 'The task 1');
I.dontSee('The task 2');
I.dontSee('The task 3');








});