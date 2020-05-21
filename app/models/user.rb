class User < ApplicationRecord
    has_secure_password
    has_many :places
    #validates :email, uniqueness: true, presence: true
    #validates :password_digest, presence: true, length: {minimum: 7}
end
