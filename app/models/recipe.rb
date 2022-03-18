class Recipe < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  accepts_nested_attributes_for :recipe_ingredients

  validates :name, uniqueness: {case_sensitive: false, scope: :user_id} 
end
