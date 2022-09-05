
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Didact+Gothic&family=DotGothic16&family=Geostar&family=Geostar+Fill&family=Goldman:wght@400;700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,600;0,700;1,100;1,200;1,400;1,500&family=Keania+One&family=Monofett&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument
// view raw
// _document.js hosted with ❤ by GitHub
