class Recipe < ApplicationRecord
  #Associations
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  #Validations
  validates :name, uniqueness: {case_sensitive: false, scope: :user_id}   #different users can have the same recipe but a user cant have duplicates
end
