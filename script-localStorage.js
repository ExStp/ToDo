const output = document.querySelectorAll('.output');

document.addEventListener('DOMContentLoaded', render)
document.addEventListener('submit', handleFormSubmit)



function handleFormSubmit(event) {
    event.preventDefault();

    let obj = event.target.input

    if (obj.value === '') return

    localStorage.setItem(
        Date.now(),
        JSON.stringify({
            priority: obj.dataset.priority,
            text: obj.value,
            isDone: false
        })
    )

    obj.value = ''

    render();
}


function render() {
    output.forEach(i => {
        i.querySelectorAll('*').forEach(n => n.remove());
    })

    Object.entries(localStorage).forEach(([key, value]) => {
        value = JSON.parse(value);
        let { priority, text } = value;
        append(key, priority, text);
    })

}
function append(key, priority, text) {

    output[priority].insertAdjacentHTML(
        'afterbegin',
        `<div data-id=${key} data-priority=${priority}>
            ${text}
            <button data-id=${key} class='delTask'>x</button>
        </div>`
    )
}

document.addEventListener('click', e => {
    if (e.target.className === 'delTask') {
        localStorage.removeItem(e.target.dataset.id);
        render()
    }
})