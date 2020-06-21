class MemorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :id, :user_id, :spot_id
  belongs_to :spot
  belongs_to :user
end
