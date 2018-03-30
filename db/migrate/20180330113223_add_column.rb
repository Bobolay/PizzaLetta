class AddColumn < ActiveRecord::Migration
  def change
     add_column :pizzas, :weight, :integer
     add_column :orders, :price, :integer
     add_column :orders, :promocode, :string
  end
end
