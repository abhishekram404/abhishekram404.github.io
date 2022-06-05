import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h1>About page</h1>
      <Link href={"/contact"}>Go to contact page</Link>
    </div>
  );
};

export default About;
