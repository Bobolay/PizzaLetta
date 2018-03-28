class Order < ActiveRecord::Base
  has_many :orderlists
end
