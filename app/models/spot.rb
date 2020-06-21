class Spot < ApplicationRecord
    belongs_to :place
    has_many :memories, dependent: :destroy
end
