import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Head from 'next/head'

const config: DocsThemeConfig = {
  logo: (
    <div>
      <img
        src="/serenity.jpg"
        alt="Logo"
        style={{
          height: '40px',
          borderRadius: '10px',
          left: '10px',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  ),
  project: {
    link: 'https://roblox.com/',
  },
  chat: {
    link: 'https://discord.com/invite/c2yaGH5aWe',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Serenity Docs (Powered with Vercel, Template by https://nextra.site/)',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath === '/' ? '%s' : '%s', // Keeps title clean without "Nextra"
    }
  },
  // You can add Open Graph meta tags here to control how it looks on Discord.
  Head: () => (
    <>
      <Head>
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Serenity" />
        <meta property="og:description" content="Welcome to Serenity Docs" />
        <meta property="og:image" content="/serenity.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serenity" />
        <meta name="twitter:description" content="Welcome to Serenity Docs" />
        <meta name="twitter:image" content="/serenity.jpg" />
      </Head>
    </>
  ),
}

export default config

