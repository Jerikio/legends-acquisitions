import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { TbBrandFacebook, TbBrandLinkedin } from '@qwikest/icons/tablericons';
import { Image, useImageProvider } from 'qwik-image';

export default component$(() => {
  useImageProvider({
    resolutions: [1920],
  });

  return (
    <section class="flex flex-col gap-4 items-center justify-center pt-24 pb-24">
      <p class="font-header font-semibold text-2xl">Our Team Leaders</p>
      <div class="flex-col flex gap-4 md:flex-row">
        <div class="bg-accent-500 text-white p-8 max-w-sm flex flex-col gap-4">
          <div class="rounded-full overflow-hidden w-[250px] h-[250px] self-center bg-slate-400">
            <Image
              layout="constrained"
              src="/jeff_new.png"
              width={395}
              height={334}
              class="w-full h-full"
            />
          </div>
          <div>
            <p class="text-xs">Managing Partner</p>
            <p class="text-xl">Jeff Short</p>
          </div>
          <div class="flex-1 flex gap-2 flex-col">
            <p>
              Jeff served the community for 13 years as a professional
              firefighter helping keep the community safe. In 2023, he partnered
              with Brandon in Legends Acquisitions and also as a self-funded
              searcher, he landed his first business acquisition with a home
              services company. Among his other notable endeavors, he is
              currently managing a roll-up in the home services industry.
            </p>

            <p>
              In addition to his business experience, Jeff created A Father's
              Flame podcast where he promotes strong families and equips the
              future generations of America. Through the podcast, people learn
              wisdom regarding faith, family, finances, and fitness.
            </p>
          </div>
          <div class="flex text-2xl text-warning-500">
            <Link href="https://www.facebook.com/thejeffshort" target="_blank">
              <TbBrandFacebook />
            </Link>

            <Link
              href="https://www.linkedin.com/in/thejeffshort/"
              target="_blank"
            >
              <TbBrandLinkedin />
            </Link>
          </div>
        </div>

        <div class="bg-accent-500 text-white p-8 max-w-sm flex flex-col gap-4">
          <div class="rounded-full overflow-hidden w-[250px] h-[250px] self-center bg-slate-400">
            <Image
              layout="constrained"
              src="/brandon.png"
              width={395}
              height={334}
              class="w-full h-full"
            />
          </div>
          <div>
            <p class="text-xs">Managing Partner</p>
            <p class="text-xl">Brandon Henry</p>
          </div>
          <div class="flex-1 flex gap-2 flex-col">
            <p>
              The company’s Founder and CEO, Brandon Henry, has a unique
              combination of entrepreneurial, executive, leadership, and
              high-tech systems experience. As an advisor, he has utilized these
              attributes to create a first-of-its-kind business that
              systematically removes the mystery and obstacles associated with
              finding a business, financing, and buying the business you want,
              preparing your existing business for sale, and marketing your
              business efficiently to its next owner.
            </p>

            <p>
              Brandon is a trusted and sought-after business advisor, involved
              in various industries such as Accounting/CPA, Architecture &
              Engineering (A&E) , E-Commerce, Digital Marketing, Government
              Contracting, Home Services & funeral home industries to name a
              few.
            </p>
          </div>
          <div class="flex text-2xl text-warning-500">
            <Link
              href="https://www.facebook.com/brandon.henry.1840"
              target="_blank"
            >
              <TbBrandFacebook />
            </Link>

            <Link
              href="https://www.linkedin.com/in/brandon-henry-570460a8/"
              target="_blank"
            >
              <TbBrandLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});
