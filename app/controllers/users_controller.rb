require 'pry'

class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
  
    ##this is what knock recommends for authentication in controllers
    ##before_action :authenticate_user
  
  
  
  
    ## eliminate all useless routes
    # GET /users
    def index
      @users = User.all
  
      render json: @users
    end
  
    # GET /users/1
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
  
    # POST /users
    def create
      @user = User.create(user_params)
      if @user.valid?
 
        render json: { user: UserSerializer.new(@user) }, status: :created

      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
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
  
    # DELETE /users/1
    def destroy
      @user.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def user_params
        params.require(:user).permit(:email, :password, :password_digest, :admin)
      end
  end
