class Drink < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  validates :title, presence: true
  validates :image, presence: true
  validates :category, presence: true
  validates :volume, presence: true
  validates :price, presence: true
end