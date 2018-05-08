class CreateConstructorimage < ActiveRecord::Migration
  def change
    add_column :constructors, :image, :string
  end
end
