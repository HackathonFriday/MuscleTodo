class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :gender, null: false
      t.integer :level, null: false, default: 1
      t.integer :exp, null: false, default: 0
      t.column :token, "char(8)", null: false

      t.timestamps
    end
  end
end
