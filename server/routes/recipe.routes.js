const RecipeController = require('../controllers/recipe.controller')
module.exports = function (app) {
  app.post('/api/recipe', RecipeController.createRecipe)
  app.get('/api/recipes/:type', RecipeController.getAllRecipesByType)
  app.get('/api/recipes', RecipeController.getAllRecipes)
  app.get('/api/recipe/:id', RecipeController.getRecipe)
  app.put('/api/recipe/:id', RecipeController.updateRecipe)
  app.delete('/api/recipes/:id', RecipeController.deleteRecipe)
  app.delete('/api/recipes/picks', RecipeController.getFourFirstRecipes)
}
