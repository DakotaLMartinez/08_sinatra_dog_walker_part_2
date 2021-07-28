class CreateTechnicians < ActiveRecord::Migration[5.2]
  def change
    create_table :technicians do |t|
      t.string :first_name
      t.string :last_name
      t.string :specialization
      t.date :start_date
    end
  end
end
