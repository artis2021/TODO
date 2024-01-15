import Todo from "../models/todo.model.js"

async function getAllTodos(req, res){
    // Get all todos from the databse and send it to the client
    try {
        const todos = await Todo.find({})
        res.status(200).json({
            data: todos,
            message: "Succesfully retrieved the todos."
        })
    } catch (error) {
        res.status(500).json({
            data: null,
            message: "Something went wrong. Please try after sometime."
        })
    }
}

async function getTodoById(req, res){
    // Get the todo from the database and send it to the client
    const id = req.params.todoId
    try {
        const todo = await Todo.findById(id)
        if(!todo){
            res.status(404).json({
                data: null,
                message: "No such todo exist!"
            })
        }
        else{
            res.status(200).json({
                data: todo,
                message: "Successfully retrieved the todo"
            })
        }
    } catch (error) {
        res.status(500).json({
            data: null,
            message: "Something went wrong"
        })
    }

}

async function createTodo(req, res){
    const todo = req.body
    try {
        const createdTodo = await Todo.create(todo)
        res.status(200).json({
            data: createdTodo,
            message: "Successfully created the todo"
        })
    } catch (error) {
        res.status(500).json({
            data: null,
            message: "Something went wrong"
        })
    }
}

async function deleteTodo(req, res){
    const id = req.params.todoId
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id)
        if(!deletedTodo){
            res.status(404).json({
                data: null,
                message: "No such todo exist"
            })
        }
        else{
            res.status(200).json({
                data: deletedTodo,
                message: "Successfully deleted the todo"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            data: null,
            message: "Something went wrong"
        })
    }
}

async function updateTodo(req, res){
    const id = req.params.todoId
    const update = req.body
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, update, {
            new: true
        })
        res.status(200).json({
            data: updatedTodo,
            message: "Successfully updated the todo"
        })

    } catch (error) {
        res.status(500).json({
            data: null,
            message: "Something went wrong"
        })
    }
}
export {
    getAllTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo

}