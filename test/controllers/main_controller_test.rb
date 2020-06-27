require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get matchingpage" do
    get main_matchingpage_url
    assert_response :success
  end

end
