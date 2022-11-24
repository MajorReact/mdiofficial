import Head from "next/head";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nnamdi | FrontEnd Developer</title>
        <meta
          name="Ogbangwo Nnamdi Portfolio Built on NextJS"
          content="Welcome to My Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <About />
      <Skills />
    </div>
  );
}
