import React from "react";
import MainNav from "../components/MainNav";
import SocialNav from "../components/SocialNav";

export default function Home() {
  return (
    <React.Fragment>
      <SocialNav></SocialNav>
      <MainNav></MainNav>
    </React.Fragment>
  );
}
