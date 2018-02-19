class Gift < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  scope :show, -> {where(show: true)}
end
