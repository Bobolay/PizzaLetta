class CreatePizza < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
      t.string :name
      t.string :ingridients
      t.integer :pricesmall
      t.integer :pricebig
      t.boolean :meat
      t.boolean :cheese
      t.boolean :fish
      t.boolean :vegeterian
      t.string :image
      t.boolean :show, default: true
    end
  end
end
