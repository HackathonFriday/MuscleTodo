class InsertCharacters < ActiveRecord::Migration[5.1]
  def insert_data
    [
      { name: 'dandy', image_path: 'macho/dandy.jpg'},
      { name: 'cafe_macho', image_path: 'macho/cafe_macho.png'},
      { name: 'bear', image_path: 'macho/bear.jpg'},
      { name: 'jinsei', image_path: 'macho/jinsei.png'},
    ]
  end

  def change
    insert_data.each do |record|
      Character.create(record)
    end
  end
end
