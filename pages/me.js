import React, { Fragment } from "react";
import Content from "../Components/Me/Content";
import Navigation from "../Components/Index/Navigation";
import { getSession } from "next-auth/react";

const me = () => {
  return (
    <Fragment>
      <Navigation />
      <Content />
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
  return {
    props: { session },
  };
}
export default me;
