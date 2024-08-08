let todoItems = [];
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#SubmitButton').onclick = function() {
        todoItems.push(document.querySelector('#InputText').value);
        let list = document.getElementById("TodoList");
        list.innerHTML = ""
        for(i=0; i < todoItems.length; i++){
            let li = document.createElement("li");
            li.innerText = todoItems[i];
            list.appendChild(li);
            li.id="item" + i;
        };
    };
});