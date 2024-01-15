window.addEventListener('load', async () => {
    const baseURL = 'http://localhost:8080/todos'
    const info = document.createElement("div")
    const output = document.querySelector(".output")
    info.innerText = 'Fetching Todos...'
    output.append(info)
    const container = document.querySelector('.container')
    container.innerHTML = ''

    try {
        const response = await fetch(`${baseURL}`, {
            method: 'GET'
        })
        const data = await response.json()
        info.innerText = data.message
        const todos = data.data;

        for(let todo of todos){
            // New Todo
            const todoDiv = document.createElement('div');
            todoDiv.setAttribute('id', 'todo')
            const heading = document.createElement('h2')
            heading.innerText = todo.title
            const description = document.createElement('p')
            description.innerText = todo.description
            const link = document.createElement('a')
            link.href = 'todo.html'
            link.innerText = 'Know more'
            link.addEventListener("click", () => {
                window.localStorage.setItem('todoId', `${todo._id}`)
            })

            todoDiv.append(heading);
            todoDiv.append(description);
            todoDiv.append(link);

            container.append(todoDiv)
        }
        setTimeout(() => {
            output.innerHTML = ''
        }, 3000)

    } catch (error) {
        console.log(error.message)
    }
})

