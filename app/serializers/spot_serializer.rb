class SpotSerializer
  include FastJsonapi::ObjectSerializer
  has_many :memories

  def entries
    object.memories.map { |j| {memoryID: j.id, description: j.description, spotID: j.spot_id, userID: j.user_id}}
  end
  
  attributes :id, :location, :place_id, :lat, :lng
end
