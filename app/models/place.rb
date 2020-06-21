class Place < ApplicationRecord
    has_many :spots, dependent: :destroy
    belongs_to :user 
end
