let container = document.querySelector('.todo-list');
document.querySelector('.plus').addEventListener('click', (e) =>{
    let todo = document.querySelector('#todo');
    const newdiv = document.createElement('div');
    newdiv.innerHTML = `<p>${todo.value}</p>`;
    newdiv.classList.add('todo-element');
    container.appendChild(newdiv);
    newdiv.addEventListener('click', (e) => {
        container.removeChild(newdiv);
    })
});
document.querySelector('.plus').addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        let todo = document.querySelector('#todo');
        const newdiv = document.createElement('div');
        newdiv.innerHTML = `<p>${todo.value}</p>`;
        newdiv.classList.add('todo-element');
        container.appendChild(newdiv);
        newdiv.addEventListener('click', (e) => {
            container.removeChild(newdiv);
        })
    } 
});