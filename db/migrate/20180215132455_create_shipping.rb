class CreateShipping < ActiveRecord::Migration
  def change
    create_table :shippings do |t|
      t.string :time_of_shipping
      t.text :description
      t.string :first_address
      t.string :first_address_map
      t.string :second_address
      t.string :second_address_map
      t.string :payment_description
      t.string :image
    end
  end
end
