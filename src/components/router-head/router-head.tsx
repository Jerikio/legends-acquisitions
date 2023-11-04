import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

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

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
