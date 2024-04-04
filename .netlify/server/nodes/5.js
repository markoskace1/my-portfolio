

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DTpIksYm.js","_app/immutable/chunks/scheduler.C2wLBm9p.js","_app/immutable/chunks/index.B4unDPPD.js","_app/immutable/chunks/index.D-KB10Oz.js"];
export const stylesheets = [];
export const fonts = [];
