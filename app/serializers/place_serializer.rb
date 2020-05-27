class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :lat, :lng, :id, :user_id
  belongs_to :user
end
