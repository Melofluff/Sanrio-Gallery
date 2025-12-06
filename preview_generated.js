const assetFilenames = [
  'aggretsuko image.jpeg',
  'badtz maru image.png',
  'baku image.png',
  'bonbonribbon image.jpeg',
  'cappuccino image.jpeg',
  'charmmy kitty image.jpeg',
  'cheery chums image.jpeg',
  'chiffon image.jpeg',
  'chococat image.jpeg',
  'cinnamoroll image.png',
  'corocorokuririn image.jpeg',
  'dear daniel image.png',
  'dreamtale kubear image.png',
  'fufu chan image.png',
  'goropikadopn image.jpeg',
  'gudetama image.jpeg',
  'hagurumanstyle image.jpeg',
  'hangyodon image.png',
  'hello kitty image.png',
  'hummingmint sanrio.jpeg',
  'ichigoman image.png',
  'jewelpet image.jpeg',
  'kashiwankomochi image.jpeg',
  'keroppi image.jpeg',
  'kirimichan image.png',
  'kuromi image.png',
  'lloromannic image.jpeg',
  'maimai image.jpeg',
  'Marron Cream image.jpeg',
  'marshmallow mitaina fuwafuwa nyanko image.jpeg',
  'minna no tabo image.jpeg',
  'mocha image.jpeg',
  'monkichi image.jpeg',
  'my little twin stars image.png',
  'my melody image.jpeg',
  'my sweet piano image.jpeg',
  'nya ni image.jpeg',
  'pankunchi image.jpeg',
  'patapatapeppy image.jpeg',
  'patty & jimmy image.png',
  'paupipo image.jpeg',
  'pekkle image.jpeg',
  'pochacco image.png',
  "pokopon's diary image.png",
  'pompompurin image.jpeg',
  'poron image.jpeg',
  'RIilu Rilu Fairilu image.jpeg',
  'shinkaizoku image.jpeg',
  'shinkansen image.png',
  'showbyrock image.jpeg',
  'sugar bunnies image.jpeg',
  'sugarminuet.jpeg',
  'the strawberry king image.png',
  'the vaudeville duo image.jpeg',
  'tiny chum image.png',
  'tuxedo sam image.jpeg',
  'u*sa*ha*na image.png',
  'wish me mell image.jpeg',
  'yoshikitty image.jpeg',
  'zashikibuta iamge.jpeg'
];

function slugify(name){
  return name.toLowerCase().replace(/\.[^/.]+$/, '').replace(/[ _]+/g,'-').replace(/[^a-z0-9\-]/g,'');
}

function titleFromBase(base){
  const b = base.replace(/[_\-]+/g,' ').trim();
  return b.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}

const groups = {};
assetFilenames.forEach(fn=>{
  const noExt = fn.replace(/\.[^/.]+$/,'');
  const base = noExt.replace(/\s*\d+$/,'').trim();
  const key = base.toLowerCase();
  groups[key] = groups[key] || [];
  groups[key].push(fn);
});

console.log('Generated Character IDs and Names:');
console.log('===================================\n');
Object.keys(groups).sort().forEach(base=>{
  const sources = groups[base];
  const id = slugify(base);
  const name = titleFromBase(base);
  console.log(`ID: ${id.padEnd(50)} | Name: ${name}`);
});
