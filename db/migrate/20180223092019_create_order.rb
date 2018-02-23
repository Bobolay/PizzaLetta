class CreateOrder < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :type_of_shipping
      t.string :name
      t.string :phone
      t.string :email
      t.boolean :subscribe
      t.string :city
      t.string :street
      t.string :building
      t.string :flat
      t.string :date_of_shipping
      t.string :fast_or_not
      t.string :type_of_pay
      t.string :rest
      t.text :comment
      t.string :pick_up_from
      t.string :date_of_picking
      t.string :time_of_picking
    end
  end
end
