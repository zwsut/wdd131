// 5
const input = document.querySelector('#favchap');
const button = document.querySelector('button')
const list = document.querySelector('#list');

// 6
const li = document.createElement('li');

// 7
const deleteButton = document.createElement('button');

// 8
li.textContent = input.value;

// textContent is preferred over innerHTML because it is more secure.
// However, if you need to include HTML tags, then you would use innerHTML.
// textContent will not render HTML tags. It will display the tags as text.

// 9
deleteButton.textContent = '❌';

// 10
li.appendChild(deleteButton);

// 11
list.appendChild(li);