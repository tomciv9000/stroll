class SpotSerializer
  include FastJsonapi::ObjectSerializer
  has_many :entries

  def entries
    object.entries.map { |j| {entryID: j.id, description: j.description, hotels: j.hotels, restaurants: j.restaurants, tours: j.tours, dates: j.dates, placeID: j.place_id, userID: j.user_id, photos: j.photos}}
  end
  
  attributes :id, :location, :place_id, :lat, :lng
end
