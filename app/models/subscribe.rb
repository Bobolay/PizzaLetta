class Subscribe< ActiveRecord::Base
  after_create :notify_admin
  def notify_admin
  	UserMailer.subscribe_email(self).deliver_now
  end
end
