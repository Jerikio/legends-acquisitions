import { $, component$, useSignal, useOnWindow } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { MENU } from "~/constants";
import Logo from "./icons/logo.webp";
import Burger from "./icons/burger";
import Close from "./icons/close";

const menuClassesDefault = [
  "hidden",
  "flex-col",
  "text-slate-300",
  "justify-end",
  "items-end",
  "gap-2",
  "text-xs",
  "md:flex",
];
const innerMenuClassesDefault = [
  "uppercase",
  "flex",
  "gap-4",
  "items-end",
  "m-0",
  "p-0",
];
const visibleClasses = [
  "flex-col",
  "text-slate-300",
  "justify-end",
  "items-end",
  "gap-2",
  "text-xs",
  "md:flex",
  "fixed",
  "left-0",
  "right-0",
  "top-0",
  "bottom-0",
  "animate-slide-in",
  "bg-black",
  "max-w-screen",
  "h-screen",
  "z-10",
  "overflow-y-auto",
  "shadow-md",
  "p-4",
  "sm:max-w-sm",
];

const visibleInnerMenuClasses = [
  "uppercase",
  "flex",
  "gap-4",
  "m-0",
  "p-0",
  "flex-col",
  "mt-4",
];

export default component$(() => {
  const location = useLocation();
  const menuClasses = useSignal(menuClassesDefault);
  const innerMenuClasses = useSignal(innerMenuClassesDefault);

  const showMenu = $(() => {
    menuClasses.value = visibleClasses;
    innerMenuClasses.value = visibleInnerMenuClasses;

    document.body.style.overflow = "hidden";
  });

  const hideMenu = $(() => {
    menuClasses.value = menuClassesDefault;
    innerMenuClasses.value = innerMenuClassesDefault;

    document.body.style.overflow = "auto";
  });

  const handleClick = $(() => {
    // Toggle visibility of menu
    const hidden = menuClasses.value.indexOf("hidden");
    if (hidden > -1) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  useOnWindow(
    "resize",
    $(() => {
      if (window.innerWidth >= 768) {
        const hidden = menuClasses.value.indexOf("hidden");
        if (hidden === -1) {
          hideMenu();
        }
      }
    })
  );

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

        <div class="flex items-center text-white md:hidden">
          <button onClick$={handleClick} aria-label="Toggle Menu">
            <Burger />
          </button>
        </div>

        <div class={menuClasses}>
          <div class="flex items-center text-white mb-4 justify-end md:hidden">
            <button onClick$={handleClick} aria-label="Toggle Menu">
              <Close />
            </button>
          </div>

          <a
            href="mailto:legends.acquisitions@proton.me"
            class="transition-colors text-primary-400 hover:text-primary-300"
          >
            legends.acquisitions@proton.me
          </a>

          <ul class={innerMenuClasses}>
            {MENU.map((item) => (
              <li key={item.content}>
                <Link
                  href={item.href}
                  class={`pt-4 pb-4 block border-b-2 transition-colors border-transparent hover:border-warning-500 hover:text-white pointer-events-auto ${
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
