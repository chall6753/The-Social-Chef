class RecipeSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :description, :instructions

  belongs_to :user
  
  has_many :recipe_ingredients
  has_many :comments do 
    object.comments.order(created_at: :desc) #newest comments first
  end

  
end
