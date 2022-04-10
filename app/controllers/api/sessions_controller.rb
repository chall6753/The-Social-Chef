class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    #POST/api/login
    def create
        user = User.find_by(username: params[:username])
        
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: "Incorrect username password combo"}, status: :unauthorized
        end

    end
    #DELETE /api/destroy
    def destroy
        session.delete :user_id
    end

end
