import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Arena from "./pages/Arena";
import ErrorPage from "./pages/ErrorPage";
import WebpageLoading from "./components/WebpageLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <WebpageLoading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arena" element={<Arena />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;