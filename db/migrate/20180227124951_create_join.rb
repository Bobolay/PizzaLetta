class CreateJoin < ActiveRecord::Migration
  def change
    create_join_table :ingredients, :pizzas
  end
end
