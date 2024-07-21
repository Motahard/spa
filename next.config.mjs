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
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ninjas.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  env: {
    EMAIL_PUBLIC: 'PPDlr0K0DvPUAU5QL',
    EMAIL_SERVICE_ID: 'service_6nwrevg',
    EMAIL_TEMPLATE_ID: 'template_bv4hini',
    PAYPAL_CLIENT_ID:
      'AXGQbaOTqmWkCxG5WNpoi6M6TpVYGJfl6fTyHuGyK_cgb8q-59Z7vSabuzoe7IsXK-fYv4zV2fc2lLpW',
    PAYPAL_CLIENT_SECRET:
      'EJb2CJdB7VvB-SoWASuf_Nq-6qxeSSKa3qWyREaHzhdK0fUx4dTsBsQsWX_DdPuudXiO4Sc1e9UsHweJ',
    NEXT_PUBLIC_SERVER_GRAPHQL: 'http://localhost:3000/api',
    DOGS_API: 'DdOiEDBgIr9QMrW82bjyWQ==mTkQcHRvr6KZirMC',
  },
};

export default nextConfig;
