// Write your code in this file!
const currentUser = 'Michael Ngige';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = 'Welcome, &{M}!'
// you can also use slice method incase of future changes, its the best!
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
