class AddColumnArticleNum < ActiveRecord::Migration
  def change
    add_column :ingredients, :article_num, :integer
    add_column :pizzas, :article_num, :integer
    add_column :drinks, :article_num, :integer
    add_column :salats, :article_num, :integer
    add_column :constructors, :article_num, :integer
  end
end
