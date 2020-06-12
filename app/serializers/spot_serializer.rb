class SpotSerializer
  include FastJsonapi::ObjectSerializer
  has_many :memories
  belongs_to :place
  attributes :id, :location, :place_id, :lat, :lng, :memories

  def memories
    object.memories.map { |j| {memoryID: j.id, description: j.description, spotID: j.spot_id, userID: j.user_id}}
  end
  
  
end
