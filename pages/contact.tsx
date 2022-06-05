import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <h1>Contact page</h1>
      <Link href={"/"}>Go to Homepage page</Link>
    </div>
  );
};

export default Contact;
