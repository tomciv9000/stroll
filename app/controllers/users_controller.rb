
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    render json: @user
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def find
    @user = User.find_by(email: params[:user][:email])
    if @user
      render json: { user: UserSerializer.new(@user) }
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end
  
   
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  
   
  def destroy
    @user.destroy
  end
  
  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password, :password_digest)
    end
  
end
