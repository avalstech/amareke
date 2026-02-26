import { Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/site-layout";
import Home from "@/pages/home";
import Product from "@/pages/product";
import Pricing from "@/pages/pricing";
import Docs from "@/pages/docs";
import Demo from "@/pages/demo";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
