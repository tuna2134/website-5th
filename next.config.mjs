/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "cdn.discordapp.com",
            }
        ]
    }
};

if (process.env.OUTPUT === "standalone") {
    nextConfig.output = "standalone";
}

export default nextConfig;
