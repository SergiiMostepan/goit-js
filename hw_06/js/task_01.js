'use strict';

import users from './users.js';

console.log('TASK_01______________________________________________________');

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));

console.log('TASK_02______________________________________________________');

const getUsersWithEyeColor = (users, color) =>
  users.filter(({
    eyeColor
  }) => eyeColor === color);

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log('TASK_03______________________________________________________');

const getUsersWithGender = (users, selectedGender) =>
  users
  .filter(({
    gender
  }) => selectedGender === gender)
  .map(user => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log('TASK_04______________________________________________________');

const getInactiveUsers = users => users.filter(({
  isActive
}) => !isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log('TASK_05______________________________________________________');

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.log('TASK_06______________________________________________________');

// const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min).filter(user => user.age <= max);
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log('TASK_07______________________________________________________');

const calculateTotalBalance = users =>
  users.reduce((totalSum, user) => totalSum + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.log('TASK_08______________________________________________________');
const getUsersWithFriend = (users, friendName) =>
  users
  .filter(user => user.friends.includes(friendName))
  .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.log('TASK_09______________________________________________________');

const getNamesSortedByFriendsCount = users =>
  users
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log('TASK_10______________________________________________________');

const getSortedUniqueSkills = users =>
  users
  .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
  // .reduce((unicSkills, skill) => !unicSkills.includes(skill) ? unicSkills = unicSkills.concat(skill) : unicSkills, [])
  .filter((elem, index, unicSkills) => unicSkills.indexOf(elem) === index)
  // .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  .sort((a, b) => b.localeCompare(a, 'en'));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]