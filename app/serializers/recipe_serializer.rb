class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions
  has_one :user
  has_many :recipe_ingredients
end
