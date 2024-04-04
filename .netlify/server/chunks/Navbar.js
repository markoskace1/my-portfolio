import { c as create_ssr_component, b as subscribe, e as escape } from "./ssr.js";
import { p as page } from "./stores.js";
const css = {
  code: "header.svelte-jpwo5g{view-transition-name:navlinks}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="flex items-center justify-center pt-12 pb-24 svelte-jpwo5g"><nav><ul class="flex flex-col text-lg font-medium md:flex-row items-center justify-between space-x-2 md:space-x-8"><li class="${escape(
    $page.url.pathname === "/about" ? 'bg-yellow-300 text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-sm after:border-transparent after:shadow-yellow-300 after:shadow-xl after:-z-10' : "hover:bg-yellow-300 hover:text-slate-900 ",
    true
  ) + " relative tracking-widest p-3 transition duration-500 ease-in-out"}"><a href="/about" class="p-3" data-svelte-h="svelte-1h6bviw">about</a></li> <li class="${escape(
    $page.url.pathname === "/skills" ? 'bg-cyan-300 text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-cyan-300 after:shadow-xl after:-z-10' : "hover:bg-cyan-300 hover:text-slate-900",
    true
  ) + " relative tracking-widest p-3 transition duration-500 ease-in-out"}"><a href="/skills" class="p-3" data-svelte-h="svelte-kwreuo">skills</a></li> <li class="font-logo font-normal px-6 text-slate-50 text-6xl md:text-8xl lg:text-9xl order-first md:order-none" data-svelte-h="svelte-fdczmi"><a href="/">MB</a></li> <li class="${escape(
    $page.url.pathname == "/work" ? 'bg-lime-300  text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-lime-300 after:shadow-xl after:-z-10' : "hover:bg-lime-300 hover:text-slate-900",
    true
  ) + " relative tracking-widest p-3 transition duration-500 ease-in-out"}"><a href="/work" class="p-3" data-svelte-h="svelte-1n72qjo">work</a></li> <li class="${escape(
    $page.url.pathname == "/contact" ? 'bg-violet-300  text-slate-900 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:border-8 after:w-full after:rounded-md after:border-transparent after:shadow-violet-300 after:shadow-xl after:-z-10' : "hover:bg-violet-300 hover:text-slate-900",
    true
  ) + " relative tracking-widest p-3 transition duration-500 ease-in-out"}"><a href="/contact" class="p-3" data-svelte-h="svelte-15hn28a">contact</a></li></ul></nav> </header>`;
});
export {
  Navbar as N
};
