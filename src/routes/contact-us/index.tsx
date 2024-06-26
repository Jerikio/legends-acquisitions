import { component$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';
import Button from '~/components/button';
import CallOutBox from '~/components/call-out-box';

export default component$(() => {
  useImageProvider({
    resolutions: [1920],
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
                Legends Acquisitions
              </h1>
              <p>General Inquiries</p>

              <div class="mt-4 font-header">
                <Button
                  color="primary"
                  href="https://forms.gle/Av7oXmCwcmvaCvc8A"
                  target="_blank"
                >
                  Get started!
                </Button>
              </div>
            </CallOutBox>
          </div>
        </div>
      </section>
    </>
  );
});
