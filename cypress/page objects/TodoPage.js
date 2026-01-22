class TodoPage {
  // Selectors
  get inputField() { return cy.get('.new-todo'); }
  get todoList() { return cy.get('.todo-list li'); }

  // Actions
  visit() {
    cy.visit('/');
  }

  addTodo(text) {
    this.inputField.type(`${text}{enter}`);
  }

  validateTodoExists(text) {
    this.todoList.should('contain', text);
  }
}
export default new TodoPage();