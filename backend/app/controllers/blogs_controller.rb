class BlogsController < ApplicationController
    def index
        # projects = Project.all
        render json: Blog.all
    end
end
