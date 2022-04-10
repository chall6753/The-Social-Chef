class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize #before all controller actions run, the authorize method will run

  private 
  #checks to see if a user is logged in by checking if the session has a user_id thats not nil
  def authorize 
    return render json: {error: 'Not authorized'}, status: :unauthorized unless session.include? :user_id
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end
