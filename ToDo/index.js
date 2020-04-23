((ns) => {

    document.querySelector('#additem').addEventListener('change', addItem);
    document.querySelector('#addlist').addEventListener('change', newList);
    let listan = document.querySelector('#listan');
    let h1 = document.querySelector('h1');
    let input = document.querySelector('#input');

    function addItem() {
        let text = this.value;
        let li = createLi(text);
        let button = createButton();
        li.appendChild(button);
        listan.append(li);
        this.value = "";
    }

    function createButton() {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'btn.sm', 'right');
        button.innerText = 'X';
        button.addEventListener('click', removeItem);
        return button;
    }

    function createLi(text) {
        let li = document.createElement('li');
        li.innerHTML = text;
        li.classList.add('list-group-item');
        li.addEventListener('click', change);
        return li;
    }

    function removeItem() {
        this.parentElement.remove();
    }

    function change() {
        this.classList.toggle('change');
    }

    function newList() {
        let text = this.value;
        h1.textContent = text + "lista";
        this.value = "";
        this.blur();
        input.classList.remove('invisible');
        input.firstElementChild.focus();


    }






})(window.ToDo = window.ToDo || {});


