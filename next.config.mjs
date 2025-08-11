/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  trailingSlash: true,

  // ✅ Abilita ottimizzazione immagini
  images: {
    formats: ['image/avif', 'image/webp'], // formati moderni
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com', // vercel storage
      },
      {
        protocol: 'https',
        hostname: 'www.palestrabodyharmony.it', // tuo dominio
      },
    ],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [64, 96, 128, 256, 384],
  },

  modularizeImports: {
    lodash: { transform: 'lodash/{{member}}' },
    'date-fns': { transform: 'date-fns/{{ member }}' },
    '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' },
    'lucide-react': { transform: 'lucide-react/dist/esm/icons/{{member}}' },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
})

export default nextConfig
