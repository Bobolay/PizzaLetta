class CreateConstructor < ActiveRecord::Migration
  def change
    create_table :constructors do |t|
      t.integer :small_price
      t.integer :big_price
    end
  end
end
