class SpotsController < ApplicationController
    before_action :set_spot, only: [:show, :update, :destroy]
    before_action :authenticate_user

    def index
        @spots = Spot.all

        render json: { spot: SpotSerializer.new(@spots) }
    end

  
  def show
    render json: @spot
  end

  def find
    @spot = Spot.find_by(id: params[:spot][:id])
    if @spot
      render json: { spot: SpotSerializer.new(@spot) }
    else
      @errors = @spot.errors.full_messages
      render json: @errors
    end
  end

  
  def create
    @spot = Spot.create(spot_params)
    if @spot.valid?
      render json: { spot: SpotSerializer.new(@spot)}, status: :created
    else
      render json: { error: 'failed to create spot' }, status: :not_acceptable
    end
  end

  # PATCH/PUT /users/1
  def update
    if @spot.update(spot_params)
      render json: @spot
    else
      render json: @spot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @spot.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spot
      @spot = Spot.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def spot_params
      params.require(:spot).permit(:location, :lat, :lng, :place_id)
    end
end