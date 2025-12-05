// characters is loaded at runtime from `characters.json` when available.
// This allows using asset metadata while serving placeholder avatars instead of the exact photos.
let characters = [];

// Fallback built-in characters (used if characters.json is missing)
const fallbackCharacters = [
  {
    id: 'hello_kitty',
    name: 'Hello Kitty (placeholder)',
    source: 'sanrio images/hello kitty image.png',
    image: 'sanrio images/hello kitty image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'A cheerful icon from a charming town; known for friendliness and a love of baking and friendship.',
    personality: 'Kind, polite, and endlessly friendly. She loves making new friends and helping others.',
    activities: 'Baking, letter-writing, visiting friends, and collecting cute trinkets.',
    likes: 'Apple pie, ribbons, and cozy tea parties.',
    dislikes: 'Loneliness and cold porridge.',
    friends: 'A big circle of adorable pals in the neighborhood.',
    fun: ['Often carries a tiny accessory in her bag.', 'Has a favorite cafe where she practices baking.']
  },
  {
    id: 'badtz_maru',
    name: 'Badtz‑Maru',
    source: 'sanrio images/badtz maru image.png',
    image: 'sanrio images/badtz maru image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'From a cheeky seaside neighborhood, Badtz‑Maru grew up with a mischievous streak and a love for playful pranks.',
    personality: 'Sassy, confident, and a bit of a troublemaker — but always loyal to friends.',
    activities: 'Skating, collecting novelty caps, and joking with pals by the pier.',
    likes: 'Cool sunglasses, challenge matches, and spicy snacks.',
    dislikes: 'Being bossed around and boring routines.',
    friends: 'A tight crew of street-smart pals and fellow mischief-makers.',
    fun: ['Often wins small skating contests.', 'Has a tiny cap collection he swaps with friends.']
  },
  {
    id: 'my_melody',
    name: 'My Melody',
    source: 'sanrio images/my melody image.jpeg',
    image: 'sanrio images/my melody image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'My Melody is a gentle rabbit from a cozy countryside village, known for her kind heart and thoughtful gifts. She loves slow, comforting days spent crafting and baking with close friends.',
    personality: 'Warm, polite, and considerate — My Melody is shy but deeply loyal. She comforts friends with small gestures and always listens with care.',
    activities: 'Sewing tiny gifts, baking almond cookies, writing letters, and hosting quiet tea parties for friends.',
    likes: 'Almond tarts, her signature pink hood, handmade presents, and handwritten notes.',
    dislikes: 'Loud arguments, messiness, and being rushed.',
    friends: 'Kiko, Mimi, and a circle of close countryside friends who share crafts and tea.',
    fun: ['She embroiderers a tiny motif into every gift she gives.', 'Loves collecting ribbon scraps and turning them into new bows.']
  },
  {
    id: 'kuromi',
    name: 'Kuromi',
    source: 'sanrio images/kuromi image.png',
    image: 'sanrio images/kuromi image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kuromi is a mischievous, punk‑style character from a lively neighborhood, known for a playful rebellious streak.',
    personality: 'Feisty, bold, and a little dramatic — she can be sassy but cares deeply for close friends.',
    activities: 'Skating around town, writing cheeky notes, and planning small playful pranks.',
    likes: 'Skateboards, edgy accessories, and upbeat music.',
    dislikes: 'Boredom and being told what to do.',
    friends: 'A tight-knit group of quirky pals and fellow performers.',
    fun: ['Collects unique pins and badges from local shops.', 'Once organized a midnight rooftop mini-concert for friends.']
  },
  {
    id: 'cinnamoroll',
    name: 'Cinnamoroll',
    source: 'sanrio images/cinnamoroll image.png',
    image: 'sanrio images/cinnamoroll image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'A gentle pup with long ears who arrived from a quiet town; known for flying by flapping his ears.',
    personality: 'Soft-spoken, friendly, and imaginative — loves meeting new friends and smelling the morning breeze.',
    activities: 'Baking, flying short distances with his ears, and running a cozy coffee shop.',
    likes: 'Warm milk, fluffy cushions, and cloud-shaped treats.',
    dislikes: 'Crowded places and spilled coffee.',
    friends: 'Frequent customers and neighborhood pals.',
    fun: ['Often helps deliver sweet treats across town.', 'Has a favorite blue ribbon he never loses.']
  },
  {
    id: 'pompompurin',
    name: 'Pompompurin',
    source: 'sanrio images/pompompurin image.jpeg',
    image: 'sanrio images/pompompurin image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'A golden retriever-like character who loves napping in the sun and collecting cozy scarves.',
    personality: 'Easygoing, friendly, and a lover of naps. He’s always ready to share a snack.',
    activities: 'Napping, eating pudding-inspired treats, and meeting fans at the park.',
    likes: 'Milk pudding, soft berets, and afternoon naps.',
    dislikes: 'Loud alarms and empty snack bowls.',
    friends: 'Local cafe regulars and small animal pals.',
    fun: ['Has a beret he considers his lucky charm.', 'Once held a picnic where everyone brought pudding.']
  },
  {
    id: 'keroppi',
    name: 'Keroppi',
    source: 'sanrio images/keroppi image.jpeg',
    image: 'sanrio images/keroppi image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'A lively frog from Donut Pond who loves sports and friendly competition.',
    personality: 'Energetic, optimistic, and sociable. Keroppi loves cheering on friends.',
    activities: 'Playing soccer, exploring the pond, and organizing neighborhood races.',
    likes: 'Pond adventures, family time, and fast swims.',
    dislikes: 'Stormy weather and missing practice.',
    friends: 'Pond pals and sports teams.',
    fun: ['Keeps a small collection of race ribbons.', 'Can whistle tunes that get frogs hopping.']
  },
  {
    id: 'chococat',
    name: 'Chococat',
    source: 'sanrio images/chococat image.jpeg',
    image: 'sanrio images/chococat image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'A curious cat who loves gadgets and often acts as the clever problem-solver of the group.',
    personality: 'Curious, clever, and observant. He enjoys tinkering and helping friends solve puzzles.',
    activities: 'Reading, collecting interesting gadgets, and helping neighbors with small fixes.',
    likes: 'Techy toys, newspapers, and clever riddles.',
    dislikes: 'Confusion and broken gadgets.',
    friends: 'Inventors and bookish pals.',
    fun: ['Always has a handy tool in his pocket.', 'Can identify the sound of a distant bell.']
  },
  {
    id: 'pochacco',
    name: 'Pochacco',
    source: 'sanrio images/pochacco image.png',
    image: 'sanrio images/pochacco image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Pochacco is a spirited, sporty puppy from a lively neighborhood. He grew up loving games, drawing, and meeting new people at local matches and events.',
    personality: 'Energetic, friendly, and optimistic — Pochacco is endlessly curious and often the first to invite others to play.',
    activities: 'Playing soccer and other sports, sketching cartoons of his adventures, and organizing friendly races with pals.',
    likes: 'Soccer, banana-flavored treats, sketching, and collecting caps.',
    dislikes: 'Rude behavior and canceled games due to rain.',
    friends: 'Neighborhood sports teams and a bunch of creative, playful pals.',
    fun: ['Keeps a small sketchbook where he draws memorable matches and friends.', 'Has a lucky cap he wears for important games.']
  },
  {
    id: 'kiki_lala',
    name: 'Little Twin Stars',
    source: 'sanrio images/my little twin stars image.png',
    image: 'sanrio images/my little twin stars image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Kiki and Lala are twin star siblings who travel the skies sharing kindness and gentle magic.',
    personality: 'Kiki is curious and adventurous; Lala is calm and nurturing — together they balance each other.',
    activities: 'Stargazing, drawing constellations, and sprinkling tiny stardust to cheer people up.',
    likes: 'Star sweets, lullabies, and bedtime stories.',
    dislikes: 'Lonely nights and heavy clouds.',
    friends: 'Dreamy creatures and night-time neighbors.',
    fun: ['They carry a small star-paint set to decorate sleepy skies.', 'They once led a lantern night to help a village find its way.']
  },
  {
    id: 'my-sweet-piano',
    name: 'My Sweet Piano',
    source: 'sanrio images/my sweet piano image.jpeg',
    image: 'sanrio images/my sweet piano image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'My Sweet Piano is a sweet sheep who loves music and making friends smile.',
    personality: 'Gentle, kind, and musical — always ready to share a song.',
    activities: 'Playing piano, composing melodies, and spreading joy through music.',
    likes: 'Music, flowers, and sweet treats.',
    dislikes: 'Loud noises and sad songs.',
    friends: 'Musicians and music lovers.',
    fun: ['Can play any song by ear.', 'Loves to perform at small concerts for friends.']
  },
  {
    id: 'poron',
    name: 'Poron',
    source: 'sanrio images/poron image.jpeg',
    image: 'sanrio images/poron image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Poron is an adorable character who loves adventures and making new friends.',
    personality: 'Cheerful, playful, and full of energy.',
    activities: 'Exploring, playing games, and collecting treasures.',
    likes: 'Adventures, colorful things, and snacks.',
    dislikes: 'Boredom and rainy days.',
    friends: 'Adventurous pals and playful companions.',
    fun: ['Always carries a lucky charm.', 'Loves discovering hidden spots in the neighborhood.']
  },
  {
    id: 'mocha',
    name: 'Mocha',
    source: 'sanrio images/mocha image.jpeg',
    image: 'sanrio images/mocha image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Mocha is a sweet and gentle character who enjoys cozy moments and good company.',
    personality: 'Calm, friendly, and warm-hearted.',
    activities: 'Reading, relaxing with friends, and enjoying warm drinks.',
    likes: 'Coffee, books, and peaceful afternoons.',
    dislikes: 'Rush and chaos.',
    friends: 'Quiet and thoughtful companions.',
    fun: ['Has a favorite reading spot by the window.', 'Enjoys making special coffee blends for friends.']
  },
  {
    id: 'dear-daniel',
    name: 'Dear Daniel',
    source: 'sanrio images/dear daniel image.png',
    image: 'sanrio images/dear daniel image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Dear Daniel is a gentle and kind rabbit who values friendship and kindness.',
    personality: 'Thoughtful, caring, and always considerate of others.',
    activities: 'Writing letters, gardening, and spending time with loved ones.',
    likes: 'Fresh flowers, handwritten notes, and quiet moments.',
    dislikes: 'Rudeness and conflict.',
    friends: 'Tender-hearted companions and caring souls.',
    fun: ['Writes beautiful letters to friends.', 'Has a special garden where he grows flowers.']
  },
  {
    id: 'lloromannic',
    name: 'Lloromannic',
    source: 'sanrio images/lloromannic image.jpeg',
    image: 'sanrio images/lloromannic image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Lloromannic is a gentle and thoughtful character who spreads kindness wherever she goes.',
    personality: 'Sweet, compassionate, and deeply caring about others.',
    activities: 'Spreading joy, making friends smile, and sharing thoughtful moments.',
    likes: 'Kind gestures, flowers, meaningful conversations, and helping others.',
    dislikes: 'Rudeness and negativity.',
    friends: 'Warm-hearted and sincere companions.',
    fun: ['Always carries tokens of friendship.', 'Loves sharing heartfelt stories with others.']
  },
  {
    id: 'charmmy-kitty',
    name: 'Charmmy Kitty',
    source: 'sanrio images/charmmy kitty image.jpeg',
    image: 'sanrio images/charmmy kitty image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Charmmy Kitty is a fashionable and elegant cat who loves all things cute and stylish.',
    personality: 'Glamorous, charming, and absolutely adorable.',
    activities: 'Fashion design, accessorizing, and looking fabulous.',
    likes: 'Pretty things, sparkles, pink items, and shopping.',
    dislikes: 'Anything plain or boring.',
    friends: 'Hello Kitty and other fashionable companions.',
    fun: ['Loves wearing different accessories every day.', 'Has an impeccable sense of style.']
  },
  {
    id: 'baku',
    name: 'Baku',
    source: 'sanrio images/baku image.png',
    image: 'sanrio images/baku image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Baku is a cute and whimsical character inspired by the mythical tapir creature from Japanese folklore.',
    personality: 'Playful, dreamy, and full of imagination.',
    activities: 'Collecting dreams, playing with friends, and having adventures.',
    likes: 'Fantasy, imagination, sleeping, and magical things.',
    dislikes: 'Nightmares and sadness.',
    friends: 'Other imaginative and playful characters.',
    fun: ['Eats bad dreams and turns them into good ones.', 'Loves to dream and daydream throughout the day.']
  }
];

// Keep a backup map of the original fallback profiles so we can restore if an accidental merge
// overwrote canonical entries.
const originalFallbackMap = {};
fallbackCharacters.forEach(c => { originalFallbackMap[c.id] = JSON.parse(JSON.stringify(c)); });

// Auto-generate additional placeholder entries from asset filenames.
// Group assets with the same base name (e.g. 'pom1.png' and 'pom2.png') into one character entry.
const assetFilenames = [
  'sp1.png','pom2.png','pom1.png','pocc2.png','pocc 1.png','po2.png','po1.png','my melody.png','mocha2.png','mocha1.png','mimi.svg','melo3.png','melo2.png','melo1.png','lt4.png','lt3.png','lt2.png','lt1.png','loro2.png','loro1.png','ku3.png','ku2.png','ku1.png','kiko.svg','kero2.png','kero1.png','hello kitty.png','hello kitty 1.png','dd2.png','dd1.png','ck2.png','ck1.png','cin3.png','cin2.png','cin1.png','choco2.png','choco1.png','chiffon2.png','chiffon1.png','cap2.png','cap1.png','bunbun.svg','bm2.png','bm1.png','baku1.png'
];

function slugify(name){
  return name.toLowerCase().replace(/\.[^/.]+$/, '').replace(/[ _]+/g,'-').replace(/[^a-z0-9\-]/g,'');
}

function titleFromBase(base){
  const b = base.replace(/[_\-]+/g,' ').trim();
  return b.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
}

const palette = ['var(--pink)','var(--baby-blue)','var(--lavender)','var(--soft-yellow)'];

// Deterministic birthday generator based on id string.
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function generateBirthdayFromId(id){
  if(!id) return 'Unknown';
  let sum = 0;
  for(let i=0;i<id.length;i++) sum += id.charCodeAt(i);
  const month = sum % 12; // 0-11
  const day = (sum % 28) + 1; // 1-28 to be safe
  return `${monthNames[month]} ${day}`;
}

// Group by base name (remove extension and trailing digits/spaces)
const groups = {};
assetFilenames.forEach(fn=>{
  const noExt = fn.replace(/\.[^/.]+$/,'');
  const base = noExt.replace(/\s*\d+$/,'').trim();
  const key = base.toLowerCase();
  groups[key] = groups[key] || [];
  groups[key].push(fn);
});

// Manual overrides for certain base keys (from asset filenames) to set proper names/ids
// Use the full, canonical names you prefer (e.g. 'My Sweet Piano')
const manualOverrides = {
  'sp': { id: 'my-sweet-piano', name: 'My Sweet Piano' },
  'pom': { id: 'pompompurin', name: 'Pompompurin' },
  'po': { id: 'poron', name: 'Poron' }
};

const generated = Object.keys(groups).map((base,i)=>{
  const sources = groups[base];
  // apply manual overrides when present
  const override = manualOverrides[base];
  const id = override && override.id ? override.id : (slugify(base) || `asset-${i}`);
  const name = override && override.name ? override.name : (titleFromBase(base) || `Character ${i+1}`);
  return {
    id,
    name,
    // keep list of related asset filenames as metadata
    sources: sources.map(s=>`assets/${s}`),
    source: `assets/${sources[0]}`,
    // deterministic placeholder birthday (editable by user)
    birthday: generateBirthdayFromId(id),
    useImage: false,
    bg: palette[i % palette.length],
    origin: `${name} originates from the world of cute companions in this demo.`,
    personality: 'Friendly, playful, and full of charm.',
    activities: 'Spending time with friends, collecting cute items, and enjoying cozy snacks.',
    likes: 'Sweet treats and warm hugs.',
    dislikes: 'Being alone and spilled milk.',
    friends: 'Local pals and neighborhood characters.',
    fun: ['This is a generated placeholder profile based on the asset filename.']
  };
});

// Append generated entries that don't already exist in fallbackCharacters (by id)
const existingIds = new Set(fallbackCharacters.map(c=>c.id));
generated.forEach(g=>{ if(!existingIds.has(g.id)) fallbackCharacters.push(g); });

const state = {
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]'))
};

function saveFavorites(){
  localStorage.setItem('favorites', JSON.stringify(Array.from(state.favorites)));
}

function renderCharacters(list = characters, containerId = 'cards'){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = ch.bg || 'var(--pink)';

    // We intentionally do not load the original photo. Use a cute placeholder instead.
    const initial = ch.name.split(' ').map(s=>s[0]).slice(0,2).join('');
    const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="placeholder-emoji">${initial}</div>`;

    card.innerHTML = `
      <div class="card-img" aria-hidden="true">${imgHtml}</div>
      <h3>${ch.name}</h3>
      <div class="card-bday">${ch.birthday ? `🎂 ${ch.birthday}` : ''}</div>
      <div class="actions"><button class="heart-btn" data-id="${ch.id}">${state.favorites.has(ch.id) ? '💖' : '🤍'}</button></div>
    `;

    // Open detail unless heart button clicked
    card.addEventListener('click', (e)=>{
      if(e.target && e.target.classList.contains('heart-btn')) return;
      openDetail(ch.id);
    });

    card.querySelector('.heart-btn').addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleFavorite(ch.id);
      renderCharacters(list, containerId);
      renderFavoritesGrid();
    });

    container.appendChild(card);
  });
}

function toggleFavorite(id){
  if(state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
}

function openDetail(id){
  const ch = characters.find(c=>c.id===id);
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');
  modal.setAttribute('aria-hidden','false');

  // show placeholder and list the original asset filename (but do NOT load the image)
  const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="detail-placeholder">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>`;

  content.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-img">${imgHtml}</div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="primary" id="favToggleBtn">${state.favorites.has(ch.id)?'Unfavorite 💖':'Save to Favorites 🤍'}</button>
          <button class="ghost" id="editProfileBtn">Edit Profile ✏️</button>
        </div>
      </div>
      <div>
        <h2>${ch.name}</h2>
        <div class="tag">Origin</div>
        <p>${ch.origin}</p>
        <p style="font-size:12px;color:#8a6f8a;margin-top:6px">Asset: <em>${ch.source||'–'}</em> (used as metadata only)</p>
        <p style="font-size:13px;color:#5b415b;margin-top:6px">Birthday: <strong>${ch.birthday||'Unknown'}</strong></p>
        <div class="info-section">
          <h4>Personality Traits</h4>
          <p>${ch.personality}</p>
        </div>
        <div class="info-section">
          <h4>Favorite Activities</h4>
          <p>${ch.activities}</p>
        </div>
        <div class="info-section">
          <h4>Likes / Dislikes</h4>
          <p><strong>Likes:</strong> ${ch.likes}</p>
          <p><strong>Dislikes:</strong> ${ch.dislikes}</p>
        </div>
        <div class="info-section">
          <h4>Friends & Relationships</h4>
          <p>${ch.friends}</p>
        </div>
        <div class="info-section">
          <h4>Fun Facts</h4>
          <div class="funfacts">${ch.fun.map(f=>`<div>• ${f}</div>`).join('')}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('favToggleBtn').addEventListener('click', ()=>{
    toggleFavorite(ch.id);
    openDetail(ch.id);
    renderCharacters();
    renderFavoritesGrid();
  });
  const editBtn = document.getElementById('editProfileBtn');
  if(editBtn){
    editBtn.addEventListener('click', (e)=>{ e.stopPropagation(); startEdit(ch.id); });
  }
}

function closeModal(){
  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden','true');
}

function renderFavoritesGrid(){
  const favIds = Array.from(state.favorites);
  const favChars = characters.filter(c=>favIds.includes(c.id));
  const container = document.getElementById('favorites-grid');
  container.innerHTML = '';
  if(favChars.length===0){
    container.innerHTML = '<p>No favorites yet. Tap the heart on a character to save them here.</p>';
    return;
  }
  favChars.forEach(ch=>{
    const card = document.createElement('div');
    card.className='card';
    card.style.background = ch.bg || 'var(--pink)';
    // Do not load asset photos; use placeholder rendering instead
    const imgHtml = (ch.useImage && ch.image) ? `<img src="${encodeURI(ch.image)}" alt="${ch.name}">` : `<div class="placeholder-emoji">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>`;
    card.innerHTML = `<div class="card-img">${imgHtml}</div><h3>${ch.name}</h3><div class="actions"><button class="heart-btn" data-id="${ch.id}">💖</button></div>`;
    card.addEventListener('click', ()=>openDetail(ch.id));
    card.querySelector('.heart-btn').addEventListener('click',(e)=>{e.stopPropagation();toggleFavorite(ch.id);renderFavoritesGrid();renderCharacters();});
    container.appendChild(card);
  });
}

// Navigation and initialization
document.addEventListener('DOMContentLoaded', ()=>{
  // Use built-in fallback characters (do not load external characters.json or asset photos)
  characters = fallbackCharacters;
  // Ensure every character has a birthday (generated deterministically if missing)
  populateBirthdays();
  // Migrate any manual override old ids to canonical ids (e.g., 'sweet-piano' -> 'my-sweet-piano', 'pom' -> 'pompompurin')
  migrateManualOverrides();
  // Remap any existing duplicates (e.g., pom1/pom2) into a single canonical character id,
  // and move favorites/customProfiles to the canonical id before merging saved profiles.
  remapAndMergeDuplicates();
  // After remapping and merging saved profiles, detect accidental merges where two different
  // characters ended up with identical profile data (this can happen during naive merging),
  // and restore canonical fallback data for known characters when available.
  detectAndFixAccidentalMerges();
  // Merge any saved custom profiles from localStorage
  mergeSavedProfiles();
  renderCharacters();
  renderFavoritesGrid();
  // Search filtering
  const searchInput = document.getElementById('searchInput');
  if(searchInput){
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.trim().toLowerCase();
      if(!q) renderCharacters(characters);
      else renderCharacters(characters.filter(c=>c.name.toLowerCase().includes(q)));
    });
  }
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('detailModal').addEventListener('click',(e)=>{ if(e.target.id==='detailModal') closeModal(); });

  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      showTab(target);
    });
  });

  document.querySelectorAll('[data-tab-target]').forEach(b=>b.addEventListener('click', ()=>showTab(b.dataset.tabTarget)));
});

// Remap duplicates by base id (strip trailing digits/spaces) and merge saved profiles/favorites.
function remapAndMergeDuplicates(){
  const saved = loadCustomProfiles();
  const mergedReport = [];
  // Helper to compute base key for an id
  function baseKeyFromId(id){
    if(!id) return id;
    // remove trailing digits and surrounding separators
    return id.replace(/[\s_\-]*\d+$/,'').toLowerCase();
  }

  // Group characters by base key
  const groups = {};
  characters.forEach(ch => {
    const key = baseKeyFromId(ch.id || ch.name || '');
    groups[key] = groups[key] || [];
    groups[key].push(ch);
  });

  Object.keys(groups).forEach(key => {
    const list = groups[key];
    if(list.length <= 1) return;
    // Choose canonical: prefer an id exactly matching the key, otherwise the first
    let canonical = list.find(c=> (c.id||'').toLowerCase()===key) || list[0];
    const canonicalId = canonical.id;
    const mergedIds = [];
    list.forEach(ch => {
      if(ch.id === canonicalId) return;
      const dupId = ch.id;
      mergedIds.push(dupId);

      // Move saved profile for dupId into canonical (merge shallowly)
      if(saved && saved[dupId]){
        saved[canonicalId] = Object.assign({}, saved[dupId], saved[canonicalId] || {});
        delete saved[dupId];
      }

      // Move favorite flag
      if(state.favorites.has(dupId)){
        state.favorites.add(canonicalId);
        state.favorites.delete(dupId);
      }

      // Merge properties from duplicate into canonical when canonical is missing them
      const cidx = characters.findIndex(x=>x.id===canonicalId);
      const didx = characters.findIndex(x=>x.id===dupId);
      if(cidx>=0 && didx>=0){
        const canObj = characters[cidx];
        const dupObj = characters[didx];
        // merge simple fields if empty
        ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source','sources'].forEach(k=>{
          if(dupObj[k] && (!canObj[k] || (Array.isArray(canObj[k])? canObj[k].length===0 : String(canObj[k]).trim()===''))){
            canObj[k] = dupObj[k];
          } else if(k==='sources' && dupObj[k]){
            // union sources arrays
            canObj.sources = Array.from(new Set([...(canObj.sources||[]), ...(dupObj.sources||[])]));
          }
        });
      }
    });

    // Remove duplicates from characters array (keep canonical)
    if(mergedIds.length){
      characters = characters.filter(c=> c.id===canonicalId || !mergedIds.includes(c.id));
      mergedReport.push({canonical: canonicalId, merged: mergedIds});
    }
  });

  // Persist changes to saved profiles and favorites
  saveCustomProfiles(saved);
  saveFavorites();

  if(mergedReport.length) console.info('Merged duplicate character IDs:', mergedReport);
  return mergedReport;
}

// Detect characters with identical core profiles (possible accidental merges)
// and restore canonical fallback data when appropriate.
function detectAndFixAccidentalMerges(){
  if(!characters || characters.length<2) return;
  const sig = id => {
    const c = characters.find(x=>x.id===id) || {};
    const fun = (c.fun||[]).join('|');
    return [c.origin||'', c.personality||'', c.activities||'', c.likes||'', c.dislikes||'', c.friends||'', fun, c.birthday||''].join('||').trim();
  };

  // build signature map
  const map = {};
  characters.forEach(c=>{
    const s = sig(c.id);
    map[s] = map[s] || [];
    map[s].push(c.id);
  });

  const fixes = [];
  Object.values(map).forEach(group => {
    if(group.length < 2) return;
    // group of ids that currently share the same profile signature
    // for each id in group that has an original fallback different from the shared signature, restore it
    group.forEach(id => {
      const orig = originalFallbackMap[id];
      if(!orig) return; // no fallback to restore
      const origSig = [orig.origin||'', orig.personality||'', orig.activities||'', orig.likes||'', orig.dislikes||'', orig.friends||'', (orig.fun||[]).join('|'), orig.birthday||''].join('||').trim();
      if(origSig !== sig(id)){
        // restore original fallback data for this id
        const idx = characters.findIndex(x=>x.id===id);
        if(idx>=0){
          characters[idx] = JSON.parse(JSON.stringify(orig));
          fixes.push(id);
        }
      }
    });
  });

  if(fixes.length){
    console.info('Restored original fallback profiles for:', fixes);
    showToast(`Restored ${fixes.length} canonical profiles`);
  }
}

// Migrate any previously created 'sweet-piano' character to the canonical 'my-sweet-piano'.
function migrateSweetPianoRename(){
  const oldId = 'sweet-piano';
  const newId = 'my-sweet-piano';
  let saved = loadCustomProfiles();
  const hadOldSaved = saved && saved[oldId];
  const hadNewSaved = saved && saved[newId];

  const oldIdx = characters.findIndex(c=>c.id===oldId);
  const newIdx = characters.findIndex(c=>c.id===newId);

  if(oldIdx === -1 && !hadOldSaved && !state.favorites.has(oldId)) return; // nothing to do

  // If newId exists, merge old into new, else rename old to new
  if(newIdx >= 0 && oldIdx >= 0){
    // merge old -> new
    const newObj = characters[newIdx];
    const oldObj = characters[oldIdx];
    newObj.sources = Array.from(new Set([...(newObj.sources||[]), ...(oldObj.sources||[])]));
    ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source'].forEach(k=>{
      if(oldObj[k] && (!newObj[k] || (Array.isArray(newObj[k])? newObj[k].length===0 : String(newObj[k]).trim()===''))){
        newObj[k] = oldObj[k];
      }
    });
    // remove old from characters
    characters = characters.filter(c=>c.id !== oldId);
  } else if(oldIdx >= 0){
    // rename in-place
    characters[oldIdx].id = newId;
    characters[oldIdx].name = 'My Sweet Piano';
  }

  // Move saved profiles
  if(hadOldSaved){
    saved = saved || {};
    if(hadNewSaved){
      // merge shallowly, old fields take precedence if new missing
      saved[newId] = Object.assign({}, saved[newId], saved[oldId]);
    } else {
      saved[newId] = saved[oldId];
    }
    delete saved[oldId];
    saveCustomProfiles(saved);
  }

  // Move favorites
  if(state.favorites.has(oldId)){
    state.favorites.add(newId);
    state.favorites.delete(oldId);
    saveFavorites();
  }

  if(oldIdx>=0 || hadOldSaved || state.favorites.has(newId)){
    console.info(`Migrated ${oldId} -> ${newId}`);
  }
}

// General migration for any manual override entries: map older ids (base keys) to canonical override ids
function migrateManualOverrides(){
  const saved = loadCustomProfiles() || {};
  const report = [];

  Object.keys(manualOverrides).forEach(base => {
    const override = manualOverrides[base];
    const newId = override.id;
    const newName = override.name;

    // candidate old ids that might have been used previously
    const candidates = new Set([
      base,
      slugify(base),
      (base||'').replace(/\s+/g,'-'),
      (base||'').replace(/\s+/g,'_')
    ].filter(Boolean));

    const merged = [];
    candidates.forEach(oldId => {
      if(!oldId) return;
      const oldIdx = characters.findIndex(c=>c.id===oldId);
      const newIdx = characters.findIndex(c=>c.id===newId);

      if(oldIdx === -1 && !saved[oldId] && !state.favorites.has(oldId)) return;

      if(newIdx >= 0 && oldIdx >= 0){
        // merge old into existing new
        const newObj = characters[newIdx];
        const oldObj = characters[oldIdx];
        newObj.sources = Array.from(new Set([...(newObj.sources||[]), ...(oldObj.sources||[])]));
        ['origin','personality','activities','likes','dislikes','friends','fun','birthday','bg','source'].forEach(k=>{
          if(oldObj[k] && (!newObj[k] || (Array.isArray(newObj[k])? newObj[k].length===0 : String(newObj[k]).trim()===''))){
            newObj[k] = oldObj[k];
          }
        });
        characters = characters.filter(c=>c.id!==oldId);
      } else if(oldIdx >= 0){
        // rename in-place
        characters[oldIdx].id = newId;
        characters[oldIdx].name = newName || characters[oldIdx].name;
      }

      // Move saved profile
      if(saved[oldId]){
        if(saved[newId]){
          saved[newId] = Object.assign({}, saved[newId], saved[oldId]);
        } else {
          saved[newId] = saved[oldId];
        }
        delete saved[oldId];
      }

      // Move favorite flag
      if(state.favorites.has(oldId)){
        state.favorites.add(newId);
        state.favorites.delete(oldId);
      }

      merged.push(oldId);
    });

    if(merged.length){
      report.push({canonical: newId, merged});
    }
  });

  if(report.length){
    saveCustomProfiles(saved);
    saveFavorites();
    console.info('Manual override migrations applied:', report);
  }
  return report;
}

// Populate birthdays for characters that don't have one yet.
function populateBirthdays(){
  // operate on fallbackCharacters and generated characters once they are assigned
  const target = characters && characters.length ? characters : fallbackCharacters;
  target.forEach(c=>{
    if(!c.birthday || String(c.birthday).trim()===''){
      c.birthday = generateBirthdayFromId(c.id || c.name || '');
    }
  });
}

// --- Profile editing persistence ---
function loadCustomProfiles(){
  try{
    return JSON.parse(localStorage.getItem('customProfiles')||'{}');
  }catch(e){return {};}
}

function saveCustomProfiles(obj){
  localStorage.setItem('customProfiles', JSON.stringify(obj));
}

function mergeSavedProfiles(){
  const saved = loadCustomProfiles();
  if(!saved) return;
  characters = (characters.length? characters : fallbackCharacters).map(c=>{
    if(saved[c.id]){
      return {...c, ...saved[c.id]};
    }
    return c;
  });
}

function startEdit(id){
  const ch = characters.find(c=>c.id===id);
  if(!ch) return;
  const modal = document.getElementById('detailModal');
  modal.setAttribute('aria-hidden','false');
  const content = document.getElementById('detailContent');
  const funText = (ch.fun||[]).join('\n');
  content.innerHTML = `
    <div class="detail-grid">
      <div>
        <div class="detail-img"><div class="detail-placeholder">${ch.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div></div>
      </div>
      <div>
        <h2>Edit Profile: ${ch.name}</h2>
        <div class="info-section">
          <label>Origin</label>
          <textarea id="edit-origin" rows="2">${escapeHtml(ch.origin||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Personality</label>
          <textarea id="edit-personality" rows="2">${escapeHtml(ch.personality||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Activities</label>
          <textarea id="edit-activities" rows="2">${escapeHtml(ch.activities||'')}</textarea>
        </div>
        <div class="info-section">
          <label>Birthday</label>
          <input id="edit-birthday" value="${escapeHtml(ch.birthday||'')}" />
        </div>
        <div class="info-section">
          <label>Likes (comma separated)</label>
          <input id="edit-likes" value="${escapeHtml(ch.likes||'')}" />
        </div>
        <div class="info-section">
          <label>Dislikes (comma separated)</label>
          <input id="edit-dislikes" value="${escapeHtml(ch.dislikes||'')}" />
        </div>
        <div class="info-section">
          <label>Friends</label>
          <input id="edit-friends" value="${escapeHtml(ch.friends||'')}" />
        </div>
        <div class="info-section">
          <label>Fun Facts (one per line)</label>
          <textarea id="edit-fun" rows="4">${escapeHtml(funText)}</textarea>
        </div>
        <div style="margin-top:12px;display:flex;gap:8px">
          <button class="primary" id="saveProfileBtn">Save</button>
          <button class="ghost" id="cancelProfileBtn">Cancel</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('cancelProfileBtn').addEventListener('click', ()=>openDetail(id));
  document.getElementById('saveProfileBtn').addEventListener('click', ()=>{
    const updated = {
      origin: document.getElementById('edit-origin').value.trim(),
      personality: document.getElementById('edit-personality').value.trim(),
      activities: document.getElementById('edit-activities').value.trim(),
        birthday: document.getElementById('edit-birthday').value.trim(),
      likes: document.getElementById('edit-likes').value.trim(),
      dislikes: document.getElementById('edit-dislikes').value.trim(),
      friends: document.getElementById('edit-friends').value.trim(),
      fun: document.getElementById('edit-fun').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean)
    };
    saveProfileEdits(id, updated);
    mergeSavedProfiles();
    renderCharacters();
    openDetail(id);
  });
}

function saveProfileEdits(id, data){
  const saved = loadCustomProfiles();
  saved[id] = {...(saved[id]||{}), ...data};
  saveCustomProfiles(saved);
  // update in-memory characters as well
  const idx = characters.findIndex(c=>c.id===id);
  if(idx>=0) characters[idx] = {...characters[idx], ...data};
}

function escapeHtml(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// --- Export / Import custom profiles (JSON) ---
function showToast(msg, ms=2400){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(()=>{ t.classList.remove('show'); }, ms);
}

function exportProfiles(){
  const data = localStorage.getItem('customProfiles') || '{}';
  const blob = new Blob([data], {type:'application/json;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'custom-profiles.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Profiles exported');
}

function importProfilesFile(file){
  if(!file) return showToast('No file selected');
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const obj = JSON.parse(reader.result);
      if(typeof obj !== 'object') throw new Error('Invalid JSON');
      // basic validation: mapping of ids to profile objects
      saveCustomProfiles(obj);
      mergeSavedProfiles();
      renderCharacters();
      showToast('Profiles imported');
    }catch(e){
      showToast('Invalid JSON file');
    }
  };
  reader.readAsText(file);
}

// Wire export/import UI when page is ready
document.addEventListener('DOMContentLoaded', ()=>{
  const exp = document.getElementById('exportProfilesBtn');
  const impInput = document.getElementById('importProfilesInput');
  if(exp) exp.addEventListener('click', ()=>exportProfiles());
  if(impInput) impInput.addEventListener('change', (e)=>{ const f = e.target.files && e.target.files[0]; if(f) importProfilesFile(f); });
});

function showTab(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  if(name==='favorites') renderFavoritesGrid();
}

// Expose for inline handlers if needed
window.toggleFavorite = toggleFavorite;
window.openDetail = openDetail;
window.closeModal = closeModal;
