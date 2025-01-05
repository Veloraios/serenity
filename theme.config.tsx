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
          borderRadius: '15px',
          left: '10px',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%);', // Add this line to set the border radius  
        }}
      />
      
    </div>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
