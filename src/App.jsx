import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import AdoptedPetContext from "./context/AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity, cacheTime: Infinity },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">
              <h1>Find You Pet!</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </AdoptedPetContext.Provider>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
