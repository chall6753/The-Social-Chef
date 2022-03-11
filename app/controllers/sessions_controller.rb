class SessionsController < ApplicationController
    skip_before_action: :authorized, only: :create
    #login
    def create
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            byebug
            render json: user, status: :created
        else
            render json: {errors: user.errors}, status: :unprocessable_entity
        end
    end


end
