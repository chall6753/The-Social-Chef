class Api::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :destroy]
  before_action :authorize , only:[:create, :destroy]
  before_action :authorize_delete, only: [:destroy]
  
  # GET /recipes
  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe, serializer: RecipeDetailSerializer#, include: ['user', 'recipe_ingredients.ingredient', 'comments.user']
  end

  # POST /recipes
  def create
    @recipe = current_user.recipes.create(recipe_params)
    
    if @recipe.save
      RecipeIngredient.new_recipe_ingredient(recipe_ingredient_params, @recipe)
      render json: @recipe, status: :created
    else
      render json: {errors: "You have already created a recipe with the same name"}, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.permit(:name, :description, :instructions)
    end

    def recipe_ingredient_params
      params.permit(recipe_ingredients: [ :ingredient, :quantity, :unit])
    end

    #only let users with user_id == recipe.user_id get authorized to delete or update 
    def authorize_delete
      user_can_modify = session[:user_id] == @recipe.user_id
      return render json: {error: "not authorized for this action"}, status: :unauthorized unless user_can_modify
    end
end
