class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions
  has_one :user
end
