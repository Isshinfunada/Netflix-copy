import { requests } from "./request";
import { Row } from "./components/Row/index";

function App() {
  return (
   // 追加箇所
    <div className="App">
     <Row 
          title="Netflix Originals"
     fetchUrl={requests.fetchNetflixOriginals}
     />
    </div>
  );
}

export default App;