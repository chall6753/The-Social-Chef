class RecipeDetailSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :instructions, :can_modify_recipe

  belongs_to :user
  
  has_many :recipe_ingredients
  has_many :comments do 
    object.comments.order(updated_at: :desc) #newest comments first
  end

  def can_modify_recipe
    if current_user
      can_modify = current_user.id == self.object.user_id
    else 
      can_modify = false
    end
  end
end