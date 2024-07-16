import AboutBanner from "@/components/pages/About/AboutBanner";
import ContactHome from "@/components/pages/HomeContact";
import ShowExperience from "@/components/pages/ShowExperience";
import Timeline from "@/components/pages/TimeLine";
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
