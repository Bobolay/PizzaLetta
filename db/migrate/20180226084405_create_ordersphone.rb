class CreateOrdersphone < ActiveRecord::Migration
  def change
    create_table :ordersphones do |t|
      t.string :phone
    end
  end
end
