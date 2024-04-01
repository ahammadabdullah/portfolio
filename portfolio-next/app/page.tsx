import Gallery from "@/Components/Gallery";
import Title from "@/Components/Title";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" relative lg:h-screen flex flex-col lg:flex-row  items-center justify-evenly overflow-hidden ">
      <Head>
        <title>Ahammad Abdullah</title>
        <meta property="og:title" content="Ahammad Abdullah" />
        <meta property="og:description" content="A project showcasing portfolio of Ahammad Abdullah" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/796439138403352596/1224448180259782707/image.png?ex=661d873b&is=660b123b&hm=496be7d952db245f73d01ef3da43b949a1525a5246d8833c096c9cc6232e27ac&" />
        <meta property="og:url" content="https://ahammadabdullah.vercel.app/" />
      </Head>
        <Title />
        <Gallery />
        <div className="hidden lg:block ">
          <h3 className="text-highlight">
            S <br />c <br />r <br />o <br /> l <br /> l <br />D <br /> o <br />{" "}
            w <br /> n
          </h3>
        </div>
      </main>
  );
}
