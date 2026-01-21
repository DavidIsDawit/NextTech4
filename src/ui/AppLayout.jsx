import { Outlet, useLocation } from "react-router-dom";
import CoverImage from "./CoverImage";
import { getBannerConfig } from "../utils/bannerConfigs";

function AppLayout() {
  const location = useLocation();
  const banner = getBannerConfig(location.pathname);

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto]">
      <header className="h-16 bg-blue-400">
        <div>Header + Navbar</div>
      </header>

      <main className="min-h-screen">
        {banner && (
          <CoverImage
            title={banner.title}
            backgroundImage={banner.backgroundImage}
            breadcrumbs={banner.breadcrumbs}
          />
        )}
        <Outlet />
      </main>
      <footer className="h-56 bg-neutral-500">Footer</footer>
    </div>
  );
}

export default AppLayout;
