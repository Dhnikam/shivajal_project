import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "Shivjal - Your dreams, our Commitment!!"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
