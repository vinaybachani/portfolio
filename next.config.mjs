/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@assets'] = path.join(process.cwd(), 'public/images'); // Adjust this path
        return config;
    },
};

export default nextConfig;
