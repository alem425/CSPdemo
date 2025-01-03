"use strict";
class App {
    constructor() {
        this.container = document.getElementById('app');
        this.init();
    }
    init() {
        const message = {
            text: "Welcome to TypeScript!",
            date: new Date()
        };
        this.displayMessage(message);
    }
    displayMessage(message) {
        this.container.innerHTML = `
            <div>
                <p>${message.text}</p>
                <small>Posted on: ${message.date.toLocaleString()}</small>
            </div>
        `;
    }
}
// Initialize the app when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    new App();
});
