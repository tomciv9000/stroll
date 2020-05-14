class CreateSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :spots do |t|
      t.string :location
      t.float :lat
      t.float :lng
      t.integer :place_id

      t.timestamps
    end
  end
end
