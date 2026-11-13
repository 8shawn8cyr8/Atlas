export const atmospheres={
 archive:{name:'Arcane Archive',bg:'#211b19',panel:'#302722',card:'#42352d',ink:'#f8e9cf',accent:'#e0ae70',font:'Georgia',effect:'dust'},
 terminal:{name:'Ghost Terminal',bg:'#07150f',panel:'#0d261b',card:'#153627',ink:'#c7ffe0',accent:'#63edaa',font:'monospace',effect:'scanlines'},
 laboratory:{name:'Reality Laboratory',bg:'#101d2b',panel:'#1b3143',card:'#29475a',ink:'#edfaff',accent:'#7ed7ff',font:'system-ui',effect:'grid'},
 cosmic:{name:'Cosmic Cartographer',bg:'#130e28',panel:'#21193e',card:'#302550',ink:'#f4eaff',accent:'#c6a0ff',font:'Georgia',effect:'stars'}
};
export function atmosphereOf(state,spaceId){const space=state.spaces.find(s=>s.id===spaceId);return space?.atmosphere||state.atmosphere?.preset||'cosmic'}
export function appliedTheme(state,spaceId){const key=atmosphereOf(state,spaceId),base=atmospheres[key]||atmospheres.cosmic;return {...base,...(state.atmosphere?.useCustom?state.theme:{})}}
export function applyAtmosphere(state,spaceId){const a=appliedTheme(state,spaceId);for(const k of ['bg','panel','card','ink','accent','font'])document.documentElement.style.setProperty('--'+k,a[k]);document.body.dataset.effect=state.atmosphere?.effects===false?'none':a.effect;document.body.dataset.motion=state.atmosphere?.motion===false?'off':'on';return a}
export function spaceTree(state){const byParent=new Map();for(const s of state.spaces){const parent=s.parent||'root';if(s.id==='root')continue;if(!byParent.has(parent))byParent.set(parent,[]);byParent.get(parent).push(s)}return byParent}
