import {Routes, Route} from "react-router-dom";
import {HomePage} from "@pages/Home";
import {ErrorPage} from "@pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
