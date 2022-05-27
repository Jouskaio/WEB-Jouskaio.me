import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '/lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icon-x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/icon-x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/icon-x72.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Lastest news about Manon Salsou`}
      />
      <meta property="og:image" content="#" />
    </Head>
  )
}