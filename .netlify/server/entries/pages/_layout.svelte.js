import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
/* empty css               */
import { N as Navbar } from "../../chunks/Navbar.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="${escape(
    $page.url.pathname === "/" ? "h-screen justify-center" : "",
    true
  ) + " flex flex-col items-center"}">${$page.url.pathname !== "/" ? `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
