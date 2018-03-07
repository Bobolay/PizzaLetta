class AddPizza < ActiveRecord::Migration
  def change
    add_column :pizzas, :discountsmall, :integer
    add_column :pizzas, :discountbig, :integer
    add_column :pizzas, :bonus_name, :string
    add_column :pizzas, :bonus_description, :string
  end
end
