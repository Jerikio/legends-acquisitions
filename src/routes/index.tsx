import { component$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';
import Button from '~/components/button';
import CallOutBox from '~/components/call-out-box';
import Divider from '~/components/divider';
import ImageWithCaption from '~/components/image-with-caption';
import OurTeam from '~/components/our-team';

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
                At Legends Acquisitions, we like to think outside the box.
              </h1>
              <div class="text-2xl max-w-xs">
                <Button color="primary" href="/contact-us">
                  Get Started!
                </Button>
              </div>
            </CallOutBox>
          </div>
        </div>
      </section>

      <section class="bg-accent-500 flex items-center justify-center pt-24 pb-24 text-white">
        {/* <h2 class="text-2xl font-header font-semibold">Businesses for Sale</h2> */}
      </section>

      <section class="pt-24 pb-24 flex items-center justify-center flex-col gap-12 container mx-auto">
        <h3 class="font-header font-semibold text-2xl">
          We make deals happen by
        </h3>

        <div class="flex gap-4 flex-col md:flex-row">
          <ImageWithCaption src="/home_deal_1.jpeg">
            Using a collaborative approach and deep industry knowledge to bring
            parties together.
          </ImageWithCaption>

          <ImageWithCaption src="/home_deal_2.jpeg">
            Trust and transparency to provide exceptional service to both buyers
            and sellers
          </ImageWithCaption>

          <ImageWithCaption src="/home_deal_3.jpeg">
            Leveraging our experience and network to create opportunities for
            success.
          </ImageWithCaption>
        </div>

        <div class="h-1 w-1/12 mt-8 mb-8">
          <Divider />
        </div>

        <div class="flex gap-8 items-center justify-center">
          <div class="flex-1 hidden md:flex">
            <Image
              layout="fullWidth"
              src="/home_buy_a_biz.jpeg"
              width="640"
              height="427"
              class="shadow-bottom-left-warning"
            />
          </div>

          <div class="flex flex-1 flex-col gap-4 text-left">
            <p class="font-header font-semibold text-2xl">
              Looking to buy a business?
            </p>
            <p>
              We will help you find what you are looking to buy and analyze your
              current situation to allow you to acquire the right business.
            </p>
            <p>
              Our vast web of connections will vet the business financials
              audited by a CPA firm and reviewed by an SBA lender so that you
              will have the peace of mind that the business you are buying is
              profitable.
            </p>
            <Button color="primary" href="/buy-a-business">
              Buy a Business
            </Button>
          </div>
        </div>

        <div class="flex gap-8 items-center justify-center">
          <div class="flex flex-col gap-4 flex-1 text-right">
            <p class="font-header font-semibold text-2xl">
              Planning to sell your existing business?
            </p>
            <p>
              We will leverage our extensive network to not only find the right
              buyers for your business but also to find creative deal
              combinations so that you can maximize the value of your business.
            </p>
            <p>
              We&apos;ll ensure that the time, effort, and investment you spent
              growing the business will be valued because we know that every
              part of it counts.
            </p>
            <Button color="primary" href="/sell-a-business">
              Sell your Business
            </Button>
          </div>

          <div class="hidden flex-1 md:flex">
            <Image
              layout="fullWidth"
              src="/homes_complex.jpeg"
              width="640"
              height="427"
              class="shadow-bottom-right-warning"
            />
          </div>
        </div>
      </section>

      <section class="bg-accent-500 pt-24 pb-24 text-white">
        <div class="container mx-auto flex items-center justify-center flex-col gap-8">
          <h4 class="text-2xl font-header font-semibold">Why work with us?</h4>
          <p>
            We believe in the power of collaboration. Everyone in our network
            will strive to find the best deal for you We make deals happen,
            together.
          </p>
          <div class="flex-col flex gap-4 md:flex-row">
            <ImageWithCaption src="/home_deal_1.jpeg">
              Smooth and Easy Negotiations
            </ImageWithCaption>

            <ImageWithCaption src="/home_deal_2.jpeg">
              Global Network of Buyers, Sellers and Deal Finders
            </ImageWithCaption>

            <ImageWithCaption src="/home_deal_3.jpeg">
              Endless Oppurtunities
            </ImageWithCaption>
          </div>
        </div>
      </section>

      <OurTeam />
    </>
  );
});
