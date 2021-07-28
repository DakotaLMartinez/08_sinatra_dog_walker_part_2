class CreateComputers < ActiveRecord::Migration[5.2]
  def change
    create_table :computers do |t|
      t.string :brand
      t.string :model
      t.float :screen_size
      t.integer :model_year
      t.boolean :asleep
      t.datetime :last_backed_up_at
    end
  end
end
