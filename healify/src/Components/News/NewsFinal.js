 import React, { createContext, useEffect, useState } from "react";
 import { NewsContextProvider } from "./NewsContext";
 import News from "./News";
import { Header } from "../Home/Header";

function Newsfinal() {
   return (
     <NewsContextProvider>
       <Header/>
       <News />
     </NewsContextProvider>
   );
}

export default Newsfinal;