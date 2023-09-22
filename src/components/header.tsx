import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { MENU } from "~/constants";
import Logo from "./icons/logo.webp";

export default component$(() => {
  const location = useLocation();

  return (
    <header class="bg-black pt-4 pb-4">
      <div class="container mx-auto flex justify-between">
        <div>
          <a href="/" title="Legends Acquisitions">
            <img
              src={Logo}
              alt="Legends Acquisitions Logo"
              width="80"
              height="80"
            />
          </a>
        </div>

        <div class="flex flex-col text-slate-300 justify-end items-end gap-2 text-xs">
          <a
            href="mailto:legends.acquisitions@proton.me"
            class="transition-colors text-primary-400 hover:text-primary-300"
          >
            legends.acquisitions@proton.me
          </a>

          <ul class="uppercase flex gap-4 items-end m-0 p-0">
            {MENU.map((item) => (
              <li key={item.content}>
                <Link
                  href={item.href}
                  class={`pt-4 pb-4 block border-b-2 transition-colors border-transparent hover:border-warning-500 hover:text-white ${
                    location.url.pathname === item.href
                      ? "border-warning-500 text-white"
                      : null
                  }`}
                >
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
});
