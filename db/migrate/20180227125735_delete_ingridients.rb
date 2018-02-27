class DeleteIngridients < ActiveRecord::Migration
  def change
    remove_column :pizzas, :ingridients
  end
end
