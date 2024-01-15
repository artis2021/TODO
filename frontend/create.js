const btn = document.querySelector("button")

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    const titleInput = document.getElementById("title")
    const descriptionInput = document.getElementById("description")
    const colorInput = document.getElementById("color")

    // POST http://localhost:8080/todos
    const baseURL = 'http://localhost:8080/todos'
    const dataToSend = {
        title: titleInput.value,
        description: descriptionInput.value,
        color: colorInput.value
    }

    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        const data = await response.json();
        window.location = 'todos.html'
    } catch (error) {
        console.log(error.message)
    }
})