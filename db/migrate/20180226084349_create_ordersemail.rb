class CreateOrdersemail < ActiveRecord::Migration
  def change
    create_table :ordersemails do |t|
      t.string :email
    end
  end
end
