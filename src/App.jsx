import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallary from "./pages/Gallary";
import ServiceDetail from "./pages/serviceDetail";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Certificate from "./pages/Certificate";
import CertificateDetail from "./pages/CertificateDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* <Route index element={<Navigate replace to="/" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="/certificate/:id" element={<CertificateDetail />} />          
          <Route path="blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
