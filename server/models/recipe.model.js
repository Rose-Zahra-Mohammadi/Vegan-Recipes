const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters long'],
    },
    img: {
      type: String,
      required: [true, 'Image is required!'],
    },
    type: {
      type: String,
      required: [true, 'Type of the meal is required!'],
    },
    ingredients: {
      type: String,
      required: [true, 'Ingredients are required!'],
    },
    instruction: {
      type: String,
      required: [true, 'Instruction is required!'],
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports.Recipe = mongoose.model('Recipe', RecipeSchema)
