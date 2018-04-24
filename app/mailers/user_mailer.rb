class UserMailer < ApplicationMailer
  default from: ENV["smtp_gmail_user_name"]

 def order_email(order)
   @array=order
   @list= order[:cart]
   mail(to: "yuriy.h@voroninstudio.eu", subject: 'замовлення')
 end
 def subscribe_email(email)
   @email = email
   mail(to: "yuriy.h@voroninstudio.eu", subject: 'замовлення')
 end
 def call_email(call)
   @call=call
   mail(to: " yuriy.h@voroninstudio.eu", subject: 'замовлення')
 end

end
