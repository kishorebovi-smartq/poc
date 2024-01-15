import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import PostService from '../../api/post-service'
import { setPosts } from "../../store/reducers/posts";
import DashboardView from "./view";

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.postsList)

  useEffect(() => {
    PostService.get().then((response) => {
      dispatch(setPosts(response))
    })
  }, [dispatch])

  const logoutClickHandler = () => {
    navigate('/')
  };
  


  return <DashboardView posts={posts} logoutClickHandler={logoutClickHandler} />;
};

export default Dashboard;
