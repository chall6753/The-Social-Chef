class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :first_name, :last_name, :email, :password_digest, :bio

  has_many :recipes
end
