class CreateArmies < ActiveRecord::Migration[7.0]
  def change
    create_table :armies do |t|
      t.string :name
      t.float :northing
      t.float :easting
      t.float :souls
      t.float :mobility
      t.float :range

      t.timestamps
    end
  end
end
