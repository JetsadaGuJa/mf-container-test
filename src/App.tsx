import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("mf1/Home"));
const Pokemon = React.lazy(() => import("mf1/Pokemon"));

const BasicSpeedDial = React.lazy(() => import("mf2/BasicSpeedDial"));

const AppBar = React.lazy(() => import("mf3/AppBar"));
const Logo = React.lazy(() => import("mf3/Logo"));
const IconResolver = React.lazy(() => import("mf3/IconResolver"));

const App = () => {
  const onClickMf3 = async (e: number) => {
    console.log("onClickMf3 =>", e);

    const util = {
      generateTranscriptID: await import("mf2/GlobalUtil").then(
        (module) => module.default.generateTranscriptID
      ),
    };

    console.log("generateTranscriptID =>", util.generateTranscriptID());
  };
  return (
    <BrowserRouter>
      <AppBar
        logoElement={<Logo />}
        iconElement={<IconResolver iconName="Menu" />}
        onClickLogo={onClickMf3}
      />
      <div style={{ marginTop: "4rem" }}>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback="loading...">
                <Home />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/:pokemonName"
            element={
              <React.Suspense fallback="loading...">
                <Pokemon />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </div>
      <BasicSpeedDial />
    </BrowserRouter>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
