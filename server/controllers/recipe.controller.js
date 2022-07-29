const { Recipe } = require('../models/recipe.model')

// create
module.exports.createRecipe = (req, res) => {
  const { name, img, type, ingredients, instruction, notes } = req.body
  Recipe.create({
    name,
    img,
    type,
    ingredients,
    instruction,
    notes,
  })
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json(err))
}

module.exports.getAllRecipesByType = (req, res) => {
  console.log(req.params.type)
  Recipe.find({ type: req.params.type })
    .collation({ locale: 'en' })
    .sort({ name: 'asc' })
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err))
}

module.exports.getFourFirstRecipes = (req, res) => {
  Recipe.find()
    .limit(4)
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err))
}
// Get all
module.exports.getAllRecipes = (req, res) => {
  Recipe.find()
    .collation({ locale: 'en' })
    .sort({ name: 'asc' })
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err))
}

// Get one
module.exports.getRecipe = (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json(err))
}

// update
module.exports.updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedRecipe) => res.json(updatedRecipe))
    .catch((err) => res.status(400).json(err))
}

// delete
module.exports.deleteRecipe = (req, res) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then((deleted) => res.json(deleted))
    .catch((err) => res.status(400).json(err))
}
