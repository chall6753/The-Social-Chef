class RecipeIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient

  def self.new_recipe_ingredient(recipe_ingredient_params,recipe)
    recipe_ingredient_params[:recipe_ingredients].map do |ingredient|     #map through the array of recipe ingredient objects
      ingredient_id = Ingredient.find_or_create_by(name: ingredient[:ingredient]).id      
      recipe.recipe_ingredients.create(ingredient_id: ingredient_id, quantity: ingredient[:quantity], unit: ingredient[:unit] )
    end
  end
end
