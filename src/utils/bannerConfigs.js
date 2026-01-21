const SHARED_BANNER_IMAGE = "/banner.png";

export const BANNER_CONFIGS = {
    "/aboutus": {
        title: "About Us",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "About Us" }],
    },
    "/services": {
        title: "Our Services",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Services" }],
    },
    "/gallary": {
        title: "Gallery",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Gallery" }],
    },
    "/portfolio": {
        title: "Our Portfolio",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Portfolio" }],
    },
    "/certificate": {
        title: "Certificates",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Certificates" }],
    },
    "/blogs": {
        title: "News",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "News" }],
    },
    "/contact": {
        title: "Contact Us",
        backgroundImage: SHARED_BANNER_IMAGE,
        breadcrumbs: [{ label: "Home", path: "/" }, { label: "Contact Us" }],
    },
};

export const getBannerConfig = (pathname) => {
    if (BANNER_CONFIGS[pathname]) return BANNER_CONFIGS[pathname];

    if (pathname.startsWith("/blogs/")) {
        return {
            title: "News",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "News", path: "/blogs" },
                { label: "News Detail" },
            ],
        };
    }

    if (pathname.startsWith("/service/")) {
        return {
            title: "Service Detail",
            backgroundImage: SHARED_BANNER_IMAGE,
            breadcrumbs: [
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Detail" },
            ],
        };
    }

    return null;
};
