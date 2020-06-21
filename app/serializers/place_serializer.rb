class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :lat, :lng, :id, :user_id, :spots
  belongs_to :user

  def spots
    object.spots.map { |e| {spotID: e.id, location: e.location, lat: e.lat, lng: e.lng, memories:e.memories.map{ |j| {memoryID: j.id, description: j.description, placeID: j.place_id, userID: j.user_id} }} }
  end
end
