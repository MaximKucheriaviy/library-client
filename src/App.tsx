import { SharedLayout } from "./components/SharedLayout/SharedLaytout";
import { SignUpPage } from "./pages/SignUpPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
