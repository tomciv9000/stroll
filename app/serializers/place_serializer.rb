class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :lat, :lng, :id, :user_id
  belongs_to :user

  def places
    object.spots.map { |e| {spotID: e.id, location: e.location, lat: e.lat, lng: e.lng, memories:e.memories.map{ |j| {memoryID: j.id, description: j.description, people: j.people, dates: j.dates, photos: j.photos, placeID: j.place_id, userID: j.user_id} }} }
  end
end
