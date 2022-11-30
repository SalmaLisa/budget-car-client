import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripe = loadStripe(process.env.REACT_APP_STRIPE_PK);
function App() {
  const queryClient = new QueryClient();
  return (
    <Elements stripe={stripe}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
      
    </Elements>
  );
}

export default App;
