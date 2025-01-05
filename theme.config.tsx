import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
          transform: 'translateY(-50%);', // Add this line to set the border radius  
        }}
      />
      
    </div>
  ),
  project: {
    link: 'https://roblox.com/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Serenity Docs (Powered with Vercel, Template by https://nextra.site/)',
  },
}

export default config
