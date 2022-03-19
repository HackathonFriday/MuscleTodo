require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get fetch_task" do
    get api_fetch_task_url
    assert_response :success
  end

end
