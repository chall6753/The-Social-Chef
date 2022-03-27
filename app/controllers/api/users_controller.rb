class Api::UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy, :showChef]
  skip_before_action :authorize, only: [:show, :create, :showChef, :index]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /auth
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, include: ['recipes'], status: :ok
    else
      render json: {error: "Please login"}, status: :not_found
    end
  end
  
  # GET /chefs/:id
  def showChef
    
    if @user
      render json: @user, status: :ok
    else
      render json: {error: "Chef does not exist"}, status: :not_found
    end
  end

  # POST /users
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1  makes sure user logged in can only delete their own account
  def destroy
    user = User.find(session[:user_id])
    byebug
    if user.id == params[:id].to_i
      user.destroy
    else
      render json: {error: "not authorized to delete this user"}, status: :unauthorized

    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :first_name, :last_name, :email, :password)
    end

 
end
