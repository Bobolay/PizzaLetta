class CreateSalat < ActiveRecord::Migration
  def change
    create_table :salats do |t|
      t.string :name
      t.string :image
      t.integer :weight
      t.string :category
      t.boolean :show
      t.string :ingredients
      t.integer :price
    end
  end
end
