/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',   // 👈 This is required
    images: {
        unoptimized: true,  // Required for static export
    },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         unoptimized: true,
//     },
// };

// export default nextConfig;
