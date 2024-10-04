import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import  store from "./redux/store"
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./configs/react-query";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
   <Provider store={store}>
			
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
					<ToastContainer />
				</QueryClientProvider>
			
		</Provider>
     
  </React.StrictMode>
);
