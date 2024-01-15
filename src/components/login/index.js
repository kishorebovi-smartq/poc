import { useEffect } from "react";

import View from './view';

import PostService from '../../api/post-service'

const Login = () => {

    useEffect(() => {
        PostService.get().then((response) => {
            console.log(response)
        })
    }, [])
    return <View />;
};

export default Login;
