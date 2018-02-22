class CreateContact < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :facebook
      t.string :instagram
      t.string :first_number
      t.string :second_number
      t.string :third_number
    end
  end
end
