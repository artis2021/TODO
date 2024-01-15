window.addEventListener('load', async () => {
    const todoId = window.localStorage.getItem('todoId')
    console.log(todoId)

    try {
        // GET http://localhost:8080/todos/:todoId
        const baseURL = 'http://localhost:8080/todos/'
        const response = await fetch(`${baseURL}/${todoId}`, {
            method: "GET"
        })
        const result = await response.json();

        const data = result.data
        
        const container = document.querySelector('.container')
        console.log(data)

        const todo = document.createElement("div")
        todo.setAttribute("id","specific-todo")
        const title = document.createElement("h2")
        title.innerText = data.title

        const description = document.createElement("p")
        description.innerText = data.description

        const color = document.createElement("div")
        color.style.backgroundColor = data.color
        color.setAttribute("id", "todo-color")

        const status = document.createElement("div")
        status.setAttribute("id", "status")
        if(data.isCompleted == true){
            status.innerText = "Completed"
        }
        else{
            status.innerText = "Pending"
        }

        const btn = document.createElement("button")
        btn.setAttribute("id", "mark-btn")
        if(data.isCompleted == true){
            btn.innerText = "Mark as incompleted"
        }
        else{
            btn.innerText = "Mark as completed"
        }

        const updateData = {
            isCompleted: !data.isCompleted
        }
        btn.addEventListener("click", async() => {
            const baseURL = 'http://localhost:8080/todos/'
            try {
                const response = await fetch(`${baseURL}/${todoId}`, {
                    method: "PATCH",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updateData)
                })
                const data = await response.json()
                window.location.reload()
            } catch (error) {
                console.log(error.message)
            }
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("id", "delete-btn")
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener("click", async() => {
            const baseURL = 'http://localhost:8080/todos/'
            try {
                const response = await fetch(`${baseURL}/${todoId}`, {
                    method: "DELETE",
                })
                const data = await response.json()
                window.location = 'todos.html'
            } catch (error) {
                console.log(error.message)
            }
        })

        todo.append(title)
        todo.append(description)
        todo.append(color)
        todo.append(status)
        todo.append(btn)
        todo.append(deleteBtn)

        container.append(todo)
    } catch (error) {
        console.log(error.message)
    }
})