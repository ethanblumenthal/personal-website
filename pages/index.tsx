import React from "react";
import Head from "next/head";

import NavBar from "../components/navbar";

const Home = () => (
  <div>
    <Head>
      <title>Ethan Blumenthal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />
  </div>
);
export default Home;
