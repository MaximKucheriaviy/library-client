import { SharedLayout } from "./components/SharedLayout/SharedLaytout";
import { SignUpPage } from "./pages/SignUpPage";
import { AdminPage } from "./pages/AdminPage";
import { Route, Routes } from "react-router";
import { ClosedRout } from "./components/RoutingController/RoutingController";
import { useStoreDispatch } from "./redux/store";
import { useEffect } from "react";
import { signupByRFT } from "./redux/operations/userOperations";

function App() {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(signupByRFT());
  }, [dispatch]);
  return (
    <div className="App">
      <SharedLayout>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route
            path="/admin"
            element={
              <ClosedRout type="admin">
                <AdminPage />
              </ClosedRout>
            }
          />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
