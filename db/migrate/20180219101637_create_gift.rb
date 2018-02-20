class CreateGift < ActiveRecord::Migration
  def change
    create_table :gifts do |t|
      t.string :image
      t.text :description
      t.boolean :show
    end
  end
end
