import React, { Fragment, useContext, useState } from "react";
import Navigation from "../Components/Index/Navigation";
import Content from "../Components/SignIn/Content";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";

const signin = () => {
  const router = useRouter();
  const loginHandler = (data) => {
    const result = signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    result.then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        router.push("/");
      }
    });
  };
  return (
    <Fragment>
      <Navigation />
      <Content LoginSubmit={loginHandler} />
    </Fragment>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permant: false,
      },
    };
  }
  return { props: {} };
}
export default signin;
