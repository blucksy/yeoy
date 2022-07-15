import Head from 'next/head'

const titleDefault = 'YEOY.LOL'
const url = 'https://yeoy.lol/'
const description = 'YEOY.LOL IS ONLINE'
const author = 'Studio TheAneW'

const Header = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>YEOY.LOL</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content='YEOY.LOL' />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={'/purple.png'} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='16x16' href='/purple.png' />
        <link rel='apple-touch-icon' sizes='32x32' href='/purple.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/purple.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' color='#000000' href='/purple.png' />
        <link rel='apple-touch-startup-image' href='/purple.png' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/purple.png' />
      </Head>
    </>
  )
}

export default Header
