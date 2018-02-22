class CreateCall < ActiveRecord::Migration
  def change
    create_table :calls do |t|
      t.string :phone
    end
  end
end
