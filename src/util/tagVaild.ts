const tags = ["html","base","head","style","title","address","article","footer","header","h1","h2","h3","h4","h5","h6","hgroup","nav","section","dd","div","dl","dt","figcaption","figure","hr","li","main","ol","p","pre","ul","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","map","track","video","embed","object","param","source","canvas","noscript","script","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","keygen","label","legend","meter","optgroup","option","output","progress","select","details","dialog","menu","menuitem","summary","content","element","shadow","template","acronym","applet","basefont","big","blink","center","dir","frame","frameset","isindex","listing","noembed","plaintext","spacer","strike","tt","xmp"]
const validSet = new Set();
tags.forEach(tag => {
  validSet.add(tag);
});

export default function vaildTagIsNative(tag: string): boolean {
  return validSet.has(tag);
}