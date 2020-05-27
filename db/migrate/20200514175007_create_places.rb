class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :description
      t.float :lat
      t.float :lng
      t.integer :user_id

      t.timestamps
    end
  end
end
