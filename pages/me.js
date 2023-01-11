import React, { Fragment } from "react";
import Content from "../Components/Me/Content";
import Navigation from "../Components/Index/Navigation";
import { getSession, useSession } from "next-auth/react";

const me = (props) => {
  return (
    <Fragment>
      <Navigation />
      <Content data={props.data.user} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permant: false,
      },
    };
  }

  const token = session.accessToken;
  const res = await fetch("http://localhost:8080/auth/me", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}
export default me;
