class CreateGiftdescription < ActiveRecord::Migration
  def change
    create_table :giftdescriptions do |t|
      t.text :description
    end
  end
end
