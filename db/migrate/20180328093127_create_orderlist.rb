class CreateOrderlist < ActiveRecord::Migration
  def change
    create_table :orderlists do |t|
      t.integer :order_id
      t.string :name
      t.integer :quantity
      t.string :bonus_name
      t.string :bonus_description
      t.integer :price
      t.string :size
    end
  end
end
