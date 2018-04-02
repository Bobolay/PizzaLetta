class CreateAttention < ActiveRecord::Migration
  def change
    create_table :attentions do |t|
      t.boolean :show
      t.text :text
    end
  end
end
