class Call < ActiveRecord::Base
  after_create :notify_admin
  def notify_admin
  	UserMailer.call_email(self).deliver_now
  end
end
