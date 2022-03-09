class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :unit
  has_one :recipe
  has_one :ingredient
end
