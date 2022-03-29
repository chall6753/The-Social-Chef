class CommentSerializer < ActiveModel::Serializer
  attributes :comment, :rating
  has_one :user
  has_one :recipe

end
