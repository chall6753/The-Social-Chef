class Api::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :destroy]
  before_action :authorize , only:[:create]
  before_action :authorize_user, only: [:destroy]
  
  # GET /recipes
  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe, include: ['user', 'recipe_ingredients.ingredient', 'comments.user']
  end

  # POST /recipes
  def create
    @user = User.find_by(id: session[:user_id])
    @recipe = @user.recipes.create(recipe_params)
    recipe_ingredient_params[:recipe_ingredients].map do |ingredient|     #map through the array of recipe ingredient objects
      ingredient_id = Ingredient.find_or_create_by(name: ingredient[:ingredient]).id      
      @recipe.recipe_ingredients.create(ingredient_id: ingredient_id, quantity: ingredient[:quantity], unit: ingredient[:unit] )
    end
    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
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
      params.require(:recipe).permit(:name, :description, :instructions)
    end

    def recipe_ingredient_params
      params.permit(recipe_ingredients: [ :ingredient, :quantity, :unit])
    end

    #only let users with user_id == recipe.user_id get authorized to delete or update 
    def authorize_user
      user_can_modify = session[:user_id] == @recipe.user_id
      return render json: {error: "not authorized for this action"}, status: :unauthorized unless user_can_modify
    end
end
