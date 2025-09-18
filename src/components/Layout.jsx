import React from 'react';

export default function Layout({ children, initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        {/* скрипт наполнения вспомогательнго объекта initState для работы гидратации */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />

        {/* скрипты собранные через Webpack */}
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <title>Bookshop</title>
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
