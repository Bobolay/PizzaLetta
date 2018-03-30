class UserMailer < ApplicationMailer
  default from: ENV["smtp_gmail_user_name"]

 def order_email(order)
   @array=order
   @list= order[:cart]
   mail(to: "viktor.o@voroninstudio.eu", subject: 'замовлення')
 end

end
