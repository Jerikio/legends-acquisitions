import { component$ } from '@builder.io/qwik';
import { MENU } from '~/constants';
import Logo from './icons/logo.webp';
import { Link } from '@builder.io/qwik-city';
import EnvelopeIcon from './icons/envelope';

export default component$(() => {
  return (
    <footer class="bg-black text-white">
      <div class="container mx-auto pt-12 pb-4 flex flex-col gap-8">
        <div class="flex flex-col gap-8 md:flex-row">
          <div class="flex-1">
            <img
              title="Legends Acquisitions"
              src={Logo}
              alt="Legends Acquisitions Logo"
              width="101"
              height="101"
            />
          </div>
          <div class="flex-1">
            <nav class="flex flex-col gap-4">
              <span class="text-2xl font-header">Quick links</span>
              <ul class="flex flex-col gap-3 text-sm text-slate-300">
                {MENU.map((item) => (
                  <li key={item.content}>
                    <Link
                      href={item.href}
                      class={`border-b-2 transition-colors border-transparent hover:text-white`}
                    >
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div class="flex-1 flex flex-col gap-4">
            <span class="text-2xl font-header">Contact Us</span>
            <ul class="flex flex-col gap-3 text-sm text-slate-300">
              <li
                class={`border-b-2 transition-colors border-transparent flex gap-2`}
              >
                <span class="text-warning-500">
                  <EnvelopeIcon />
                </span>
                info@legendsacquisitions.com
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-transparent border-t-white pt-3 flex justify-between text-xs text-slate-300 flex-col gap-4 md:flex-row text-center">
          <span>
            Copyright {new Date().getFullYear()} &copy; Legends Acquisitions.
            All rights reserved
          </span>

          <a
            href="https://www.linkedin.com/in/devcshort/"
            target="_blank"
            class="hover:text-white"
          >
            <span>Made with ♡ by Chris Short</span>
          </a>
        </div>
      </div>
    </footer>
  );
});
