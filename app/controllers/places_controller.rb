class PlacesController < ApplicationController
    before_action :set_place, only: [:show, :update, :destroy]
    before_action :authenticate_user

  ## eliminate all useless routes

    def index
        @places = current_user.places

        render json: @places
    end

  # GET /users/1
  def show
    render json: @place
  end
  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end
  def find
    @place = User.find_by(email: params[:user][:email])
    if @place
      render json: { user: UserSerializer.new(@place) }
    else
      @errors = @place.errors.full_messages
      render json: @errors
    end
  end

  # POST /users
  def create
    @place = User.create(user_params)
    if @place.valid?
      payload = {user_id: @place.id}
      @token = encode_token(payload)
      render json: { user: UserSerializer.new(@place), token: @token }, status: :created
      #render json: { user: UserSerializer.new(@place)}, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  # PATCH/PUT /users/1
  def update
    if @place.update(user_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @place.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password, :password_digest, :admin)
    end
end
