class Salat < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  validates :image, presence: true
  validates :category, presence: true
  validates :weight, presence: true
  validates :price, presence: true
end
