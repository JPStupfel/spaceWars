class ArmiesController < ApplicationController

    def index 
       render json: Army.all
    end
end
