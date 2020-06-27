class ApplicationController < ActionController::Base

def after_sign_in_path_for(resource)
    matchingpage_path
end
def after_sign_out_path_for(resource)
    login_path
end


end
