import React, { Fragment, useContext } from "react";
import Content from "../Components/SignUp/Content";
import Navigation from "../Components/Index/Navigation";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const signup = () => {
  const router = useRouter();
  const submitHandler = (data) => {
    fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Account successfully created");
          router.push("/signin");
        } else {
          return res.json().then((data) => {
            let errorMessage = "Unable to create account";
            if (data.data[0].msg) {
              errorMessage = data.data[0].msg;
            }
            console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      <Navigation />
      <Content onAdd={submitHandler} />
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
export default signup;
