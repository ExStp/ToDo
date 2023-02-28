const output = document.querySelector('#output');

document.addEventListener('submit', handleFormSubmit)


function render() {
    output.querySelectorAll('*').forEach(n => n.remove());

    Object.entries(localStorage).forEach(([ key, value ]) => {
        value = JSON.parse(value);
        let {priority, text} = value;
        append(key, priority, text);
    })

}

function append(key, priority, text) {
    let div = document.createElement('div');
    div.textContent = text;
    div.setAttribute('data-id', key);
    div.setAttribute('data-priority', priority);
    output.append(div);
}

function handleFormSubmit(event) {
    event.preventDefault();

    let obj = event.target.input

    if (obj.value === '') return

    localStorage.setItem(
        Date.now(),
        JSON.stringify({
            priority: obj.dataset.priority,
            text: obj.value
        })
    )

    obj.value = ''

    render();
}

document.addEventListener('DOMContentLoaded', render)

output.addEventListener('click', e => {
    localStorage.removeItem(e.target.dataset.id);
    render()
})