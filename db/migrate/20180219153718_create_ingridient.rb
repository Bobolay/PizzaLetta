class CreateIngridient < ActiveRecord::Migration
  def change
    create_table :ingridients do |t|
      t.string :category
      t.string :name
      t.integer :price
      t.string :image
      t.boolean :show
    end
  end
end
