class CreateSubscribe < ActiveRecord::Migration
  def change
    create_table :subscribes do |t|
      t.string :phone
    end
  end
end
