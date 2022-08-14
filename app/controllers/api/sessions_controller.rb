    require 'google-apis-calendar_v3.rb'
    require 'google/api_client/client_secrets'

class Api::SessionsController < ApplicationController
    
    
    skip_before_action :authorize, only: [:create, :new, :button]

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

    def new
        render json: {res: "hello"}
    end
    def omniauth
        byebug
    end
    def button
        

        client_secrets = Google::APIClient::ClientSecrets.load
        auth_client = client_secrets.to_authorization
        auth_client.update!(
        :scope => 'https://www.googleapis.com/auth/calendar.metadata.readonly',
        :redirect_uri => 'http://localhost:4000',
        :additional_parameters => {
            "access_type" => "offline",         # offline access
            "include_granted_scopes" => "true"  # incremental auth
        }
        )
        auth_uri = auth_client.authorization_uri.to_s
        
        render json: {auth_uri: auth_uri}
       
    end
      
end
