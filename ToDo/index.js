((ns) => {

    let currentlist = [];
    document.querySelector('#additem').addEventListener('change', addItem);
    document.querySelector('#addlist').addEventListener('change', newList);
    document.querySelector('#inputGroupSelect02').addEventListener('change', load);
    let listan = document.querySelector('#listan');
    let h1 = document.querySelector('h1');
    let input = document.querySelector('#input');
    let selectlist = document.querySelector('#inputGroupSelect02');

    function addItem() {

        insertItem(this.value);
        this.value = "";
    }

    function insertItem(text) {
        let li = createLi(text);
        let button = createButton();

        li.appendChild(button);
        listan.append(li);

        currentlist.push(text);
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
        li.classList.add('list-group-item', 'item');
        li.addEventListener('click', change);
        return li;
    }

    function removeItem() {
        var text = this.parentElement.innerText;
        this.parentElement.remove();
        const index = currentlist.indexOf(text);
        currentlist.splice(index, 1);
    }

    function change() {
        this.classList.toggle('change');
    }

    function load() {
        let loaded = getItems(selectlist.value);
        remove();
        if (loaded !== null) loaded.forEach((i) => insertItem(i));

    }

    function getItems(name) {
        const items = localStorage.getItem(name);
        return JSON.parse(items);
    }

    function newList() {
        let text = this.value;
        h1.textContent = text + "lista";
        this.value = "";
        this.blur();
        input.classList.remove('invisible');
        input.firstElementChild.focus();

        let selected = selectlist.value;

        let option = document.createElement('option');
        option.innerHTML = text;
        option.value = text;
        option.selected = true;
        selectlist.append(option);

        if (currentlist.length !== 0) {
            localStorage.setItem(selected, JSON.stringify(currentlist));
            remove();
        }
    }

    function remove() {
        currentlist = [];
        listan.querySelectorAll('.item').forEach((i) => listan.removeChild(i));
    }






})(window.ToDo = window.ToDo || {});


