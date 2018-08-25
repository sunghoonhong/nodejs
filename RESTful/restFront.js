function getUser() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var list = document.getElementById('list');
            list.innerHTML = '';
            Object.keys(users).map(function (key) {
                var userDiv = document.createElement('div');
                var span = document.createElement('span');
                span.textContent = users[key];
                var edit = document.createElement('button');
                edit.textContent = 'edit';
                edit.addEventListener('click', function () {
                    var name = prompt('Enter new name');
                    if(!name) {
                        return alert('ENTER THE GOD DAMN NAME!');
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        if(xhr.status === 200) {
                            console.log(xhr.responseText);
                            getUser();
                        }
                        else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PUT', '/users/' + key);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({name: name}));
                });
                var remove = document.createElement('button');
                remove.textContent = 'remove';
                remove.addEventListener('click', function() {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if(xhr.status === 200) {
                            console.log(xhr.responseText);
                            getUser();
                        }
                        else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/users/' + key);
                    xhr.send();
                });
                userDiv.appendChild(span);
                userDiv.appendChild(edit);
                userDiv.appendChild(remove);
                list.appendChild(userDiv);
            });
        }
        else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}

window.onload = getUser;
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = e.target.username.value;
    if(!name) {
        return alert('Enter name');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 201) {
            console.log(xhr.responseText);
            getUser();
        }
        else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({name: name}));
    e.target.username.value = '';
});