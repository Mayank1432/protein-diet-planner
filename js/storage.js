const KEYS = {td:'pptd_v5', cu:'ppc_v5', wk:'ppwk_v5', st:'ppst_v5', lg:'ppl_v5'};

const LS = {
  get(k){try{const v=localStorage.getItem(k);return v?JSON.parse(v):null;}catch(e){return null;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};
