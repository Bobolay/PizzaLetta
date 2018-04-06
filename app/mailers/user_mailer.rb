class UserMailer < ApplicationMailer
  default from: ENV["smtp_gmail_user_name"]

 def order_email(order)
   @array=order
   @list= order[:cart]
   mail(to: "pizzaletta17@gmail.com", subject: 'замовлення')
 end
 def subscribe_email(email)
   @email = email
   mail(to: "pizzaletta17@gmail.com", subject: 'замовлення')
 end
 def call_email(call)
   @call=call
   mail(to: "pizzaletta17@gmail.com", subject: 'замовлення')
 end

end
