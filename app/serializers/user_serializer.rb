class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :first_name, :last_name, :email, :password_digest

  has_many :recipes
end
