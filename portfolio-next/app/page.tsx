import Gallery from "@/Components/Gallery";
import Title from "@/Components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" relative lg:h-screen flex flex-col lg:flex-row  items-center justify-evenly overflow-hidden ">
      <Head>
        <title>Ahammad Abdullah</title>
        <meta property="og:title" content="Ahammad Abdullah" />
        <meta
          property="og:description"
          content="A project showcasing portfolio of Ahammad Abdullah"
        />
        <meta property="og:url" content="https://ahammadabdullah.vercel.app/" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <Title />
      <Gallery />
      <div className="hidden lg:block ">
        <h3 className="text-highlight">
          S <br />c <br />r <br />o <br /> l <br /> l <br />D <br /> o <br /> w{" "}
          <br /> n
        </h3>
      </div>
    </main>
  );
}
