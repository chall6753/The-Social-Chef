class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  skip_before_action :authorize, exept: [:destroy, :create, :update]
  
  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  #need to serialize this data
  def show
  
    render json: @recipe, include: ['user', 'recipe_ingredients.ingredient', 'comments.user.username']
  end

  # POST /recipes
  def create
    @user = User.find_by(id: session[:user_id])
    @recipe = @user.recipes.create(recipe_params)
    byebug
    recipe_ingredient_params[:recipe_ingredients].map do |ingredient|     #map through the array of recipe ingredient objects
      ingredient_id = Ingredient.find_or_create_by(name: ingredient[:ingredient]).id      
      @recipe.recipe_ingredients.create(ingredient_id: ingredient_id, quantity: ingredient[:quantity], unit: ingredient[:unit] )
      byebug
    end

    
    byebug
    
    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
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
      byebug
      params.require(:recipe).permit(:name, :description, :instructions)
    end
    def recipe_ingredient_params
      params.permit(recipe_ingredients: [ :ingredient, :quantity, :unit])
    end
end
