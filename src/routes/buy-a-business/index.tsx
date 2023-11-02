import { component$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';
import CallOutBox from '~/components/call-out-box';

export default component$(() => {
  useImageProvider({
    resolutions: [1920],
  });

  return (
    <>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/galleria-1.4.2.min.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/galleria.classic.min.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/download-files.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/jsignature.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-constants.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-main.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-buyer-profile.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-contact-form.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-library.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-listing.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-password-reset.js"></script>
      <script src="//api1.verticacrm.com/bbcrm-assets/js-noconflict/bbcrm-search-tool.js"></script>

      <section class="relative overflow-hidden">
        <Image
          layout="fullWidth"
          objectFit="cover"
          width={1920}
          height={1080}
          alt=""
          src="/home_hero.jpeg"
          class="pointer-events-none absolute w-full h-full z-[-1] top-0 -translate-y-1/4"
        />

        <div class="bg-white-gradient w-full h-full pt-8 pb-48">
          <div class="container mx-auto">
            <CallOutBox>
              <h1 class="text-4xl mb-4 leading-snug">
                We&apos;ll help you buy a business
              </h1>
              <p>
                We at Legends Acquisitions always seek creative ways to connect
                buyers, sellers, deal finders, and everyone in between to make
                our deals happen.
              </p>
              <p>
                In today's age, things move quickly in this space, and we are no
                different. We are laser-focused on helping you acquire the right
                business.
              </p>
              <p>
                With our vast network of buyers, sellers, deal finders, and
                everyone in between, we can make this deal happen, together.
              </p>
            </CallOutBox>
          </div>
        </div>
      </section>

      <section>
        <bbcrm api_string="buyerregistration"> </bbcrm>
      </section>
    </>
  );
});
