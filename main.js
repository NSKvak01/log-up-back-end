// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


// **YOUR** code below. Pass those tests!
function isValidEmail(email) {
  if (email.slice(-19) === '@codeimmersives.com' && email[0] !== '@') {
    return true;
  } else {
    return false;
  }
}

function isValidPassword(pass) {
  if (pass !== pass.toUpperCase() && pass !== pass.toLowerCase() && pass.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function isRegisteredUser(user) {
  if (user === user1 || user === user2 || user === user3) {
    return true;
  } else {
    return false;
  }
}

function passwordMatches(user, pass) {
  if ((user === user1 && pass === password1) || (user === user2 && pass === password2) || (user === user3 && pass === password3)) {
    return true;
  } else {
    return false;
  }
}


// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
