

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.B_14t_QA.js","_app/immutable/chunks/scheduler.C2wLBm9p.js","_app/immutable/chunks/index.B4unDPPD.js"];
export const stylesheets = [];
export const fonts = [];
