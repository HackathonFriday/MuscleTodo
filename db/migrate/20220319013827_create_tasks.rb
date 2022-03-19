class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :note, null: false
      t.datetime :expire_date
      t.boolean :is_done, default: 0
      t.integer :category_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
