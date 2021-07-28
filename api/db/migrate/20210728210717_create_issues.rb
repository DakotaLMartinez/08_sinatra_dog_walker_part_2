class CreateIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :title
      t.text :description
      t.boolean :resolved
      t.datetime :started_at
      t.belongs_to :computer, null: false, foreign_key: true
      t.belongs_to :technician, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
