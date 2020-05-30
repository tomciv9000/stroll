class Place < ApplicationRecord
    has_many :spots
    belongs_to :user 
end
