import { component$ } from "@builder.io/qwik";
import { MENU } from "~/constants";
import Logo from "./icons/logo.webp";
import { Link } from "@builder.io/qwik-city";
import PhoneIcon from "./icons/phone";
import EnvelopeIcon from "./icons/envelope";
import BuildingIcon from "./icons/building";

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
                legends.acquisitions@proton.me
              </li>
              <li
                class={`border-b-2 transition-colors border-transparent flex gap-2`}
              >
                <span class="text-warning-500">
                  <BuildingIcon />
                </span>
                72850 Icie Stravenue
                <br />
                New Jersey, South Lindsayhaven 94800
              </li>
              <li
                class={`border-b-2 transition-colors border-transparent flex gap-2`}
              >
                <span class="text-warning-500">
                  <PhoneIcon />
                </span>
                267-867-5309
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
            href="https://www.jerik.io/"
            target="_blank"
            class="hover:text-white"
          >
            <span>Made with ♡ by Jerikio</span>
          </a>
        </div>
      </div>
    </footer>
  );
});
