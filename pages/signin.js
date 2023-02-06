import React, { Fragment, useContext, useState } from "react";
import Navigation from "../Components/Index/Navigation";
import Content from "../Components/SignIn/Content";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useCookies } from "react-cookie";
import authApi from "../api/authApi";

const signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginHandler = async (data) => {
    authApi
      .login(data.email, data.password)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("id", response.data.id);

        dispatch(authActions.login());
        router.push("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    // axios({
    //   method: "post",
    //   url: "http://localhost:8080/auth/login",
    //   data: {
    //     email: data.email,
    //     password: data.password,
    //   },
    // })
    //   .then((response) => {
    //     localStorage.setItem("token", response.data.accessToken);
    //     localStorage.setItem("id", response.data.id);

    //     dispatch(authActions.login());
    //     router.push("/");
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //   });
  };

  return (
    <Fragment>
      <Navigation />
      <Content Login={loginHandler} />
    </Fragment>
  );
};

export default signin;
