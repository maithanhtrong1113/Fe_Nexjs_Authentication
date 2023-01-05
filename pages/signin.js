import React, { Fragment, useContext, useState } from "react";
import Navigation from "../Components/Index/Navigation";
import Content from "../Components/SignIn/Content";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
const signin = () => {
  const router = useRouter();

  const loginHandler = (data) => {
    // fetch("http://localhost:8080/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json().then((data) => {
    //         let errorMessage = "";
    //         if (data.message) {
    //           errorMessage = data.message;
    //         }
    //         throw new Error(errorMessage);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     router.push("/");
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    const result = signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    result.then((data) => {
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else router.push("/");
    });
  };
  return (
    <Fragment>
      <Navigation />
      <Content LoginSubmit={loginHandler} />
    </Fragment>
  );
};

export default signin;
