import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const RouteGuard = (props) => {
  const router = useRouter();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuth) {
    router.push("/signin");
  } else {
    return <Fragment>{props.children}</Fragment>;
  }
};

export default RouteGuard;
