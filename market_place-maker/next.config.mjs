/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    // Some useful comment

    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      myFont: ['"IBM Plex Sans"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
};

export default nextConfig;
