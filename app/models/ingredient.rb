class Ingredient < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  validates :name, presence: true
  validates :image, presence: true
  validates :category, presence: true
  validates :price, presence: true
  has_and_belongs_to_many :pizzas
end
