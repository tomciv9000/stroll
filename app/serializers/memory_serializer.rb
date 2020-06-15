class MemorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :people, :dates, :id, :user_id, :spot_id
  belongs_to :spot
  belongs_to :user
end