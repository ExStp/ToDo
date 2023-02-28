const output = document.querySelector('#output');

document.addEventListener('submit', handleFormSubmit)

let data = [

]

function render(data, output) {
    output.querySelectorAll('*').forEach(n => n.remove());
    
    data.forEach(element => {
        let div = document.createElement('div');
        div.textContent = element.text;
        div.setAttribute('data-id', element.id);
        div.setAttribute('data-priority', element.priority);
        output.append(div);
    });
    console.log('----------------')
}

function handleFormSubmit(event) {
    event.preventDefault();

    let obj = event.target.input

    data.unshift({
        id: Date.now(), 
        priority: obj.dataset.priority, 
        text: obj.value
    })


    render(data, output);
}