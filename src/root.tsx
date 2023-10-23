import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/galleria-1.4.2.min.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/galleria.classic.min.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/download-files.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/jsignature.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-constants.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-main.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-buyer-profile.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-contact-form.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-library.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-listing.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-password-reset.js"></script>
        <script src="https://api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-search-tool.js"></script>
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
