class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :isbn
      t.string :title
      t.text :description
      t.integer :rating
      t.string :author

      t.timestamps
    end
  end
end
