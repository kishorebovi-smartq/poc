import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'

import PostService from '../../api/post-service'
import { setPosts } from "../../store/reducers/posts";
import DashboardView from "./view";

const Dashboard = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.postsList)

  useEffect(() => {
    PostService.get().then((response) => {
      dispatch(setPosts(response))
    })
  }, [dispatch])

  


  return <DashboardView posts={posts} />;
};

export default Dashboard;
