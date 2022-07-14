import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Trattoria Il Cafone</title>
          <meta
            name="description"
            content="Innovative Italian Cusine and Rodizio in Lyndhurst New Jersey, Phone: 201.933.3355."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&family=The+Nautigal&display=swap"
            rel="stylesheet"
          />
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://demelodining.com" />
          <meta name="twitter:title" content="Demelo Dining" />
          <meta
            name="twitter:description"
            content="Private Dining and Catering"
          />
          <meta
            name="twitter:image"
            content="https://www.demelodining.com/home-hero.jpg"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Demelo Dining" />
          <meta
            property="og:description"
            content="Private Dining and Catering"
          />
          <meta property="og:url" content="https://demelodining.com" />
          <meta
            property="og:image"
            content="https://www.demelodining.com/home-hero.jpg"
          /> */}
        </Head>
        <body className="font-Roboto">
          <Main />
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
