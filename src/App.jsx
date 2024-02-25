import {Header,Footer,Blog,Features,WhatGPT4, Possibility,} from "./containers/Containers.jsx";
import { CTA, Brand, Navbar } from "./components/Components.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
