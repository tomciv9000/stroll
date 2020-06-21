class User < ApplicationRecord
    has_secure_password
    has_many :places, dependent: :destroy
    has_many :spots, through: :places
    has_many :memories

    validates :email, uniqueness: true, presence: true
    validates :password_digest, presence: true, length: {minimum: 7}
end
