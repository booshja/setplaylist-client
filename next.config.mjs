/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible";

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [],
    },
};

export default withPlausibleProxy()(nextConfig);
