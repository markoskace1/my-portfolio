import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar } from "../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
