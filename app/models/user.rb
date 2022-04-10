class User < ApplicationRecord
    #Associations
    has_many :recipes, dependent: :destroy 
    has_many :comments, dependent: :destroy
    has_secure_password

    
    #validations
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates_presence_of :first_name, :last_name

end
