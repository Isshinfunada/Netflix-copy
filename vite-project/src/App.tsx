import { requests } from "./request";
import { Row } from "./components/Row/index";
import { Banner } from "./components/Banner/index";

function App() {
  return (
   // 追加箇所
    <div className="App bg-black">
     <Banner />
     <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
     />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="News Movies" fetchUrl={requests.fetchNewsMovies} />
      <Row title="Kids Movies" fetchUrl={requests.fetchKidsMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;