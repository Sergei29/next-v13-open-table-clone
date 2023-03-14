const Head = () => (
  <>
    <title>Open Table Clone</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="description" content="Open Table Clone application" />
    <link rel="icon" href="/favicon.ico" />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', ${process.env.NEXT_PUBLIC_GTM_ID});
`,
      }}
    />
  </>
);

export default Head;
