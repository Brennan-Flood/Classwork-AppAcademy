class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  def activation_email(user)
    @user = user
    mail(to: user.email, subject: "Welcome to Brennan's music website, activate your account")
  end
end
