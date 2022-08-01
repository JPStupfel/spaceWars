class CreateArmies < ActiveRecord::Migration[7.0]
  def change
    create_table :armies do |t|
      t.string :name
      t.float :northing
      t.string :easting
      t.string :float
      t.float :souls

      t.timestamps
    end
  end
end
