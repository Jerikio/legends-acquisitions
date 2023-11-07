import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';
import CallOutBox from '~/components/call-out-box';

export default component$(() => {
  useImageProvider({
    resolutions: [1920],
  });

  useVisibleTask$(() => {
    // @ts-ignore
    // eslint-disable-next-line
    window?.renderTags();
  });

  return (
    <>
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
              <h1 class="text-4xl mb-4 leading-snug font-header">
                We&apos;ll help you sell your business
              </h1>
              <p>
                We at Legends Acquisitions always seek creative ways to connect
                buyers, sellers, deal finders, and everyone in between to make
                our deals happen.
              </p>
              <p>
                In today's age, things move quickly in this space, and we are no
                different. We are laser-focused on Selling your Business to the
                right Buyers.
              </p>
              <p>
                With our vast network of buyers, sellers, deal finders, and
                everyone in between, we can make this deal happen, together.
              </p>
            </CallOutBox>
          </div>
        </div>
      </section>

      <section class="p-2">
        <bbcrm api_string="customform" formid="5"></bbcrm>
      </section>
    </>
  );
});
