/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    EMAIL_PUBLIC: 'PPDlr0K0DvPUAU5QL',
    EMAIL_SERVICE_ID: 'service_6nwrevg',
    EMAIL_TEMPLATE_ID: 'template_bv4hini',
  }
};

export default nextConfig;
