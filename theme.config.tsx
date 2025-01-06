import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

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
      titleTemplate: asPath === '/' ? '%s' : '%s', // Remove "Nextra" from all pages
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Serenity" />
      <meta property="og:description" content="Official Serenity Download Page & Documentation" />
      <meta property="og:image" content="/serenity.jpg" />
      <meta name="theme-color" content="#ff0000" />
    </>
  )
}

export default config
