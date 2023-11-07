import { component$ } from '@builder.io/qwik';
import { Image, useImageProvider } from 'qwik-image';
import Button from '~/components/button';
import CallOutBox from '~/components/call-out-box';
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
                Legends Acquisitions
              </h1>
              <p>
                Started by Brandon Henry and Jeff Short. Legends Acquisitions'
                system runs in an extensive network of individual advisors, deal
                finders, and companies focused on making deals happen together.
              </p>
              <p>
                We understand the unique challenge of every transaction, and our
                goal is to provide custom-fit solutions for our clients to
                ensure that the deal is closed quicker and smoother.
              </p>
              <div class="text-2xl max-w-xs mt-4">
                <Button color="primary" href="/contact-us">
                  Get Started!
                </Button>
              </div>
            </CallOutBox>
          </div>
        </div>
      </section>

      <section class="pt-24 pb-24 flex items-center justify-center flex-col gap-12 container mx-auto">
        <div class="flex gap-8 items-center justify-center">
          <div class="hidden md:flex">
            <Image
              layout="fullWidth"
              src="/tall_banner_notepad.jpeg"
              width="640"
              height="960"
              class="shadow-bottom-left-warning max-h-[700px] max-w-[420px]"
            />
          </div>

          <div class="flex flex-1 flex-col gap-4 text-left">
            <p class="font-header font-semibold text-2xl">Buyers</p>

            <div>
              <p class="font-header font-semibold text-xl">
                Experienced industry professionals:
              </p>
              <p>
                If you are a buyer with industry experience and are looking to
                expand your business or make your first acquisition, we are the
                right fit for you. We understand that you deeply understand your
                chosen industry and are seeking opportunities to grow and
                thrive. Our extensive network and expertise enable us to find,
                vet, and share the right deals that align with your specific
                acquisition goals and requirements.
              </p>
            </div>

            <div>
              <p class="font-header font-semibold text-xl">
                Investors seeking quality deals:
              </p>
              <p>
                If you are an investor with industry knowledge but are
                struggling to find quality deals to acquire and invest in, we
                can help. We specialize in locating high-quality businesses that
                meet your investment criteria. Our rigorous evaluation process
                ensures that the businesses we present to you are of the highest
                quality and have the potential for successful financing. With
                our hands-on approach, we will be by your side throughout the
                process to ensure a smooth and quick transaction.
              </p>
            </div>

            <div>
              <p class="font-header font-semibold text-xl">
                First-time buyers needing customized solutions:
              </p>
              <p>
                We understand that every transaction is unique and aim to
                provide custom-fit solutions for our clients. If you are looking
                for personalized assistance in finding and closing deals, we are
                the right fit. We tailor our services to your specific needs,
                ensuring that the deal is closed quicker and smoother. Whether
                you are a seasoned buyer or making your first acquisition, our
                dedicated team will provide the support and guidance you need to
                succeed.
              </p>
            </div>

            <div class="self-start w-48">
              <Button color="primary" href="/buy-a-business">
                Buy a Business
              </Button>
            </div>
          </div>
        </div>

        <div class="flex gap-8 items-center justify-center">
          <div class="flex flex-col gap-4 flex-1 text-right">
            <p class="font-header font-semibold text-2xl">Sellers</p>

            <div>
              <p class="font-header font-semibold text-xl">
                Qualities we look for:
              </p>
              <ul>
                <li>Privately-owned and profitable businesses</li>
                <li>$1M - $100M in revenue</li>
                <li>Business value between $500K and $100M*</li>
                <li>Three or more full years of financials preferred</li>
              </ul>
            </div>

            <div>
              <p class="font-header font-semibold text-xl">We do not sell:</p>
              <ul>
                <li>Unprofitable businesses</li>
                <li>Distressed businesses</li>
                <li>Turnaround situations</li>
                <li>
                  Under-documented, unproven businesses (one full year in
                  business is the absolute minimum)
                </li>
                <li>Businesses in dying industries</li>
              </ul>
            </div>

            <p class="text-xs font-bold italic">
              *If your business is smaller than we usually accept, we can refer
              you to reputable business brokers. If your business is larger than
              we usually accept, we can refer you to specialty M&A firms.
            </p>

            <div class="self-end w-48">
              <Button color="primary" href="/sell-a-business">
                Sell a Business
              </Button>
            </div>
          </div>

          <div class="hidden md:flex">
            <Image
              layout="fullWidth"
              src="/tall_banner_meeting.jpeg"
              width="640"
              height="960"
              class="shadow-bottom-right-warning max-h-[700px] max-w-[420px]"
            />
          </div>
        </div>
      </section>

      <section class="bg-accent-500 flex items-center justify-center pt-24 pb-24 text-white">
        <div class="container mx-auto flex-col flex items-center justify-center text-center gap-4">
          <h2 class="text-2xl font-header font-semibold">About the Founders</h2>
          <p>
            In early 2023, a chance connection brought Jeff Short and Brandon
            Henry together, sparking a friendship fueled by the ambition and
            shared values. They soon realized that their meeting was meant for
            something greater.
          </p>
          <p>
            The prevailing atmosphere in the business advisor world was one of
            cutthroat competition, where "Lone Wolf" advisors strove to devour
            the others. However, Jeff and Brandon firmly believed that this
            approach was flawed. They knew that business, like men, thrived on
            connections, networks, and collaboration.
          </p>
          <p>
            Driven by their vision to reshape the landscape, they decided to
            create something extraordinary. This counter-movement would
            revolutionzie the way business is conducted. Legends Acquisitions
            emerged as a beacon of change as Jeff and Brandon set out to
            redefine the very essence of business consulting.
          </p>
          <p>
            True success can only be achieved by bringing together a network of
            individual advisors, deal finders, and companies, all united by a
            shared purpose. By collaboriating with a network of advisors, deal
            finders, and companies, they can close the right deals for their
            clients faster, smoother, and more equitable. Legends Acquisitinos
            embodies this vision-a company that embraces the strength of
            teamwork and collaboration.
          </p>
          <p>
            Jeff and Brandon seek to inspire a new generation of entrepeneurs
            and industry professionals with aspirational leadership,
            demonstrating that remarkable things can happen when business minds
            join forces.
          </p>
          <p>
            Welcome to Legends Acquisitions, where <em>we</em> make deals
            happen,
            <em>together</em>.
          </p>
        </div>
      </section>

      <OurTeam />
    </>
  );
});
