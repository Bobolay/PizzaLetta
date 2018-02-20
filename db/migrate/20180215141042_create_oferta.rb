class CreateOferta < ActiveRecord::Migration
  def change
    create_table :oferta do |t|
      t.string :image
      t.string :first_title
      t.string :second_title
      t.text :first_description
      t.text :second_description
    end
  end
end
