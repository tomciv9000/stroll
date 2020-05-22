class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description
  belongs_to :user
end
