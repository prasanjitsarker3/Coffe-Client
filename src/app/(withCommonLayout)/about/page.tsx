import AboutBanner from "@/Components/pages/About/AboutBanner";
import ContactHome from "@/Components/pages/HomeContact";
import ShowExperience from "@/Components/pages/ShowExperience";
import Timeline from "@/Components/pages/TimeLine";
import React from "react";

const AboutPage = () => {
  return (
    <div className="">
      <AboutBanner />
      <div className=" py-10">
        <ShowExperience />
      </div>
      <Timeline />
      <ContactHome />
    </div>
  );
};

export default AboutPage;
