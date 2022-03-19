class AddColumToPhrases < ActiveRecord::Migration[5.1]
  def change
    add_column :phrases, :is_creation, :boolean, default: false, null: false, comment: 'タスク作成時 or 完成時表示識別用'
  end
end
