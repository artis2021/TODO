import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'white'
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo