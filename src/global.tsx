import { Head } from "minista";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Content from "@/layouts/Content";
import '@/styles';
import Banner from "./sections/Banner";

import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default (props: any) => {
  const {
    title,
    children,
    url,
    isHeaderFixed
  } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>StramVibe :: {title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />

        <script src="/src/main.js" type="module" />
      </Head>
      <Header url={url} isFixed={isHeaderFixed} />
      <Content isResetPaddingTop={isHeaderFixed}>
        {children}
        <Banner />
      </Content>
      <Footer />
    </>
  )
}
