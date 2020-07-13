class ProjectsController < ApplicationController
    def index
        # projects = Project.all
        render json: Project.all
    end
end
