import { UserContextProvider } from "../lib/UserContext";
import { supabase } from "../utils/initSupabase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../style.css";
import React from "react";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </UserContextProvider>
      <Footer></Footer>
    </main>
  );
}
