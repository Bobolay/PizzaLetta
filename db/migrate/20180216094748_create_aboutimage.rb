class CreateAboutimage < ActiveRecord::Migration
  def change
    create_table :aboutimages do |t|
      t.string :image
    end
  end
end
