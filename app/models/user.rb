class User < ApplicationRecord
    #Associations
    has_many :recipes 
    has_many :comments
    has_secure_password

    #validations
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates_presence_of :first_name, :last_name

end
