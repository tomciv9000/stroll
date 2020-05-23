class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :id, :user_id
  belongs_to :user
end
