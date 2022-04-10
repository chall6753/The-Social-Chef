class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :can_modify_comment, :user
  has_one :user
  

  def can_modify_comment
    if current_user
      can_modify = current_user.id == self.object.user_id
    else 
      can_modify = false
    end
  end
end
