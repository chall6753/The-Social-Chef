class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :can_modify_comment
  has_one :user
  has_one :recipe

  def can_modify_comment
    if current_user
      can_modify = current_user.id == self.object.user_id
    else 
      can_modify = false
    end
  end
end
