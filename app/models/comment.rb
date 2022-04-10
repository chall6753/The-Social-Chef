class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :recipe

  validates :comment, presence: {message: "Comment can't be empty"} 
end
