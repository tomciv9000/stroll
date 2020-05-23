class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :user_id
  belongs_to :user
end
