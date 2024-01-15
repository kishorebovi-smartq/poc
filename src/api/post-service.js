import apiClient from "./apiclient"

function get(){
  return apiClient({method: 'GET', url: '/posts'})
}

const PostService = { get }

export default PostService