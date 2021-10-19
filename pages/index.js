import Head from "next/head";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - Next JS</title>
      </Head>
      <div className="home">
        <div className="container">
          <h1>Weather App</h1>
          <SearchBox placeholder="Search for a city..." />
        </div>
      </div>
    </div>
  );
}
