class CreateAlert < ActiveRecord::Migration
  def change
    create_table :alerts do |t|
      t.boolean :show
      t.text :text
    end
  end
end
