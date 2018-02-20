class CreateAbout < ActiveRecord::Migration
  def change
    create_table :abouts do |t|
      t.text :description
      t.text :cookers
      t.text :fast_work
      t.text :clean_truth
      t.string :frase
      t.string :image
    end
  end
end
