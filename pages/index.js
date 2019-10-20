import React from "react";
import Link from "next/link";
import Head from "next/head";


const Home = ({ result }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Link href="/test" as={`/test`}>
      <a>Test</a>
    </Link>

    <div className="hero">
      <ul>
        {result.map(data => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  </div>
);

Home.getInitialProps = async () => {
  const AWS = await import("aws-sdk");
  var s3 = new AWS.S3({ apiVersion: "2006-03-01" });

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["data", "from", "the", "api"]);
    }, 1000);
  });

  return { result };
};

export default Home;
