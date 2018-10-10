//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
for (var i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li)
}

element.appendChild(ul)
