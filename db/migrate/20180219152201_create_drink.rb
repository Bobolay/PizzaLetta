class CreateDrink < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :title
      t.string :category
      t.integer :price
      t.string :image
      t.float :volume
      t.boolean :show
    end
  end
end
