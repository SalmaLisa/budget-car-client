import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
