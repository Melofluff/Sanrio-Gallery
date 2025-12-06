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
  },
  {
    id: 'chiffon',
    name: 'Chiffon',
    source: 'sanrio images/chiffon image.jpeg',
    image: 'sanrio images/chiffon image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Chiffon is a delicate and sweet character who loves fluffy things and pastries.',
    personality: 'Gentle, kind, and always cheerful.',
    activities: 'Baking pastries, collecting soft things, and helping friends.',
    likes: 'Pastries, fluffy items, sweet smells, and nice weather.',
    dislikes: 'Sadness and rough things.',
    friends: 'Warm and gentle companions.',
    fun: ['Makes delicious pastries for friends.', 'Loves collecting fluffy and soft things.']
  },
  {
    id: 'yoshikitty',
    name: 'Yoshikitty',
    source: 'sanrio images/yoshikitty image.jpeg',
    image: 'sanrio images/yoshikitty image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Yoshikitty is a rock-inspired character who loves music and has a cool, edgy style.',
    personality: 'Bold, confident, and passionate about music.',
    activities: 'Playing music, performing on stage, and rocking out with friends.',
    likes: 'Rock music, guitars, performing, and expressing herself.',
    dislikes: 'Silence and boring routines.',
    friends: 'Fellow musicians and creative souls.',
    fun: ['Always has a guitar nearby.', 'Dreams of performing at big concerts.']
  },
  {
    id: 'showbyrock',
    name: 'Show By Rock',
    source: 'sanrio images/showbyrock image.jpeg',
    image: 'sanrio images/showbyrock image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Show By Rock is a vibrant music-themed character who loves rhythm, bands, and rocking out.',
    personality: 'Energetic, musical, and full of passion for performance.',
    activities: 'Playing in bands, creating music, and performing for audiences.',
    likes: 'Live music, band performances, rhythm games, and creative expression.',
    dislikes: 'Monotony and lack of creativity.',
    friends: 'Musicians, performers, and music lovers.',
    fun: ['Part of an exciting music universe.', 'Loves jamming with different instruments.']
  },
  {
    id: 'tuxedo-sam',
    name: 'Tuxedo Sam',
    source: 'sanrio images/tuxedo sam image.jpeg',
    image: 'sanrio images/tuxedo sam image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Tuxedo Sam is a dapper penguin from Antarctica who speaks many languages and loves fashion.',
    personality: 'Sophisticated, charming, and always well-dressed.',
    activities: 'Collecting bow ties, studying languages, and being a gentleman.',
    likes: 'Bow ties, fashion accessories, learning new things, and being stylish.',
    dislikes: 'Being underdressed and messy appearances.',
    friends: 'Fashionable and cultured companions.',
    fun: ['Owns 365 bow ties, one for each day of the year.', 'Can speak multiple languages fluently.']
  },
  {
    id: 'bonbonribbon',
    name: 'Bonbonribbon',
    source: 'sanrio images/bonbonribbon image.jpeg',
    image: 'sanrio images/bonbonribbon image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Bonbonribbon is a sweet bunny who loves fashion, accessories, and making everything pretty.',
    personality: 'Fashionable, cheerful, and always optimistic.',
    activities: 'Designing outfits, accessorizing, and spreading joy with style.',
    likes: 'Ribbons, cute accessories, fashion design, and making things beautiful.',
    dislikes: 'Plain and boring things.',
    friends: 'Stylish and creative companions.',
    fun: ['Has a magical ribbon that can change colors.', 'Dreams of becoming a famous fashion designer.']
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    source: 'sanrio images/cappuccino image.jpeg',
    image: 'sanrio images/cappuccino image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Cappuccino is a warm and friendly character who loves coffee, cozy moments, and good company.',
    personality: 'Warm, inviting, and always ready to share a good time.',
    activities: 'Making coffee, hosting friends, and creating cozy atmospheres.',
    likes: 'Coffee, warm drinks, cozy settings, and friendly gatherings.',
    dislikes: 'Cold weather and being alone.',
    friends: 'Coffee lovers and warm-hearted companions.',
    fun: ['Makes the best cappuccino in town.', 'Knows every coffee recipe by heart.']
  },
  {
    id: 'corocorokuririn',
    name: 'Corocorokuririn',
    source: 'sanrio images/corocorokuririn image.jpeg',
    image: 'sanrio images/corocorokuririn image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Corocorokuririn is a playful and energetic character who loves to roll around and have fun.',
    personality: 'Energetic, playful, and always in motion.',
    activities: 'Rolling around, playing games, and spreading joy.',
    likes: 'Movement, games, laughter, and active play.',
    dislikes: 'Staying still and boredom.',
    friends: 'Active and fun-loving companions.',
    fun: ['Can roll at amazing speeds.', 'Never stops moving and playing.']
  },
  {
    id: 'gudetama',
    name: 'Gudetama',
    source: 'sanrio images/gudetama image.jpeg',
    image: 'sanrio images/gudetama image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Gudetama is a lazy egg who would rather do nothing than anything at all.',
    personality: 'Lethargic, unmotivated, and perpetually tired.',
    activities: 'Lying around, napping, and avoiding responsibility.',
    likes: 'Sleep, relaxation, doing nothing, and being left alone.',
    dislikes: 'Work, effort, and being bothered.',
    friends: 'Other lazy souls who understand the struggle.',
    fun: ['Represents the mood of not wanting to adult.', 'Has become a relatable icon for exhausted people everywhere.']
  },
  {
    id: 'jewelpet',
    name: 'Jewelpet',
    source: 'sanrio images/jewelpet image.jpeg',
    image: 'sanrio images/jewelpet image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Jewelpet is a magical character who represents sparkle, jewels, and enchanting adventures.',
    personality: 'Magical, sparkly, and full of wonder.',
    activities: 'Creating magic, collecting jewels, and going on magical adventures.',
    likes: 'Jewels, sparkles, magic, and shiny treasures.',
    dislikes: 'Dullness and lack of magic.',
    friends: 'Magical beings and treasure hunters.',
    fun: ['Has magical jewel powers.', 'Loves all things that sparkle and shine.']
  },
  {
    id: 'marron-cream',
    name: 'Marron Cream',
    source: 'sanrio images/Marron Cream image.jpeg',
    image: 'sanrio images/Marron Cream image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Marron Cream is a sweet mouse who loves chestnuts and all things cozy and warm.',
    personality: 'Sweet, gentle, and loves comfort.',
    activities: 'Collecting chestnuts, baking treats, and enjoying autumn.',
    likes: 'Chestnuts, warm weather, cozy places, and sweet treats.',
    dislikes: 'Cold weather and loud noises.',
    friends: 'Forest animals and fellow food lovers.',
    fun: ['Named after chestnuts (marron in French).', 'Loves autumn season the most.']
  },
  {
    id: 'rilu-rilu-fairilu',
    name: 'Rilu Rilu Fairilu',
    source: 'sanrio images/RIilu Rilu Fairilu image.jpeg',
    image: 'sanrio images/RIilu Rilu Fairilu image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Rilu Rilu Fairilu is a magical fairy character who brings happiness and magic to everyone.',
    personality: 'Magical, cheerful, and full of wonder.',
    activities: 'Spreading magic, helping others, and going on fairy adventures.',
    likes: 'Magic, flowers, helping friends, and spreading joy.',
    dislikes: 'Sadness and negativity.',
    friends: 'Other fairies and magical creatures.',
    fun: ['Has magical fairy powers.', 'Can make flowers bloom with magic.']
  },
  {
    id: 'wish-me-mell',
    name: 'Wish Me Mell',
    source: 'sanrio images/wish me mell image.jpeg',
    image: 'sanrio images/wish me mell image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Wish Me Mell is a sweet rabbit who loves making wishes and spreading hope to everyone.',
    personality: 'Hopeful, kind, and always optimistic.',
    activities: 'Making wishes, helping dreams come true, and spreading positivity.',
    likes: 'Wishes, stars, dreams, and helping others.',
    dislikes: 'Broken promises and hopelessness.',
    friends: 'Dreamers and hopeful souls.',
    fun: ['Believes all wishes can come true with hope.', 'Loves looking at stars and making wishes.']
  },
  {
    id: 'sugar-bunnies',
    name: 'Sugar Bunnies',
    source: 'sanrio images/sugar bunnies image.jpeg',
    image: 'sanrio images/sugar bunnies image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Sugar Bunnies are adorable candy-themed rabbit characters who love sweets and friendship.',
    personality: 'Sweet, playful, and always cheerful.',
    activities: 'Making candy, playing with friends, and spreading sweetness.',
    likes: 'Candy, sweets, friends, and having fun.',
    dislikes: 'Sadness and loneliness.',
    friends: 'Other sweet-loving characters.',
    fun: ['Made of sugary sweetness.', 'Love sharing candy with all their friends.']
  },
  {
    id: 'nya-ni',
    name: 'Nya Ni',
    source: 'sanrio images/nya ni image.jpeg',
    image: 'sanrio images/nya ni image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Nya Ni is a cute cat character who loves saying "nya" and spreading cat-like joy.',
    personality: 'Playful, mischievous, and adorably cat-like.',
    activities: 'Playing with yarn, napping in sunbeams, and meowing cutely.',
    likes: 'Toys, catnip, sunny spots, and cuddles.',
    dislikes: 'Baths and being ignored.',
    friends: 'Other cat lovers and playful characters.',
    fun: ['Always says "nya" when happy.', 'Has impeccable cat-like reflexes and charm.']
  },
  {
    id: 'monkichi',
    name: 'Monkichi',
    source: 'sanrio images/monkichi image.jpeg',
    image: 'sanrio images/monkichi image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Monkichi is a cheerful monkey character who loves fun and adventure.',
    personality: 'Energetic, playful, and full of mischief.',
    activities: 'Swinging through trees, making friends, and having wild adventures.',
    likes: 'Bananas, fun, adventure, and making people laugh.',
    dislikes: 'Boredom and being serious.',
    friends: 'Adventurous and playful companions.',
    fun: ['Always swinging from branch to branch with joy.', 'Can make anyone smile with antics.']
  },
  {
    id: 'minna-no-tabo',
    name: 'Minna no Tabo',
    source: 'sanrio images/minna no tabo image.jpeg',
    image: 'sanrio images/minna no tabo image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Minna no Tabo is a cute hippo character who spreads happiness and friendship.',
    personality: 'Sweet, friendly, and always happy to see others.',
    activities: 'Playing with friends, spreading joy, and enjoying peaceful moments.',
    likes: 'Friends, happiness, nature, and kind gestures.',
    dislikes: 'Sadness and loneliness.',
    friends: 'A wide circle of cheerful companions.',
    fun: ['Loves to share happiness with everyone she meets.', 'Has a calming and sweet presence.']
  },
  {
    id: 'kirimichan',
    name: 'Kirimichan',
    source: 'sanrio images/kirimichan image.png',
    image: 'sanrio images/kirimichan image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kirimichan is a charming shrimp character who brings joy and flavor to every adventure.',
    personality: 'Playful, witty, and full of personality.',
    activities: 'Exploring the ocean, making new friends, and enjoying culinary adventures.',
    likes: 'Good food, adventure, laughter, and creative fun.',
    dislikes: 'Boredom and negativity.',
    friends: 'A diverse group of sea-loving companions.',
    fun: ['Has a unique and quirky sense of humor.', 'Always brings a smile with comedic charm.']
  },
  {
    id: 'hummingmint-sanrio',
    name: 'Hummingmint Sanrio',
    source: 'sanrio images/hummingmint sanrio.jpeg',
    image: 'sanrio images/hummingmint sanrio.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Hummingmint Sanrio is a delightful mint-colored character who brings freshness and joy.',
    personality: 'Cheerful, energetic, and spreads positive vibes.',
    activities: 'Flying through gardens, enjoying nature, and spreading happiness.',
    likes: 'Flowers, nature, sweet flavors, and good friends.',
    dislikes: 'Negativity and stillness.',
    friends: 'A lively group of nature-loving companions.',
    fun: ['Moves with graceful, hummingbird-like energy.', 'Brings mint-fresh positivity everywhere.']
  },
  {
    id: 'hangyodon',
    name: 'Hangyodon',
    source: 'sanrio images/hangyodon image.png',
    image: 'sanrio images/hangyodon image.png',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Hangyodon is a charming anglerfish character with a unique and adorable appearance.',
    personality: 'Quirky, friendly, and charmingly odd.',
    activities: 'Exploring the deep sea, making unexpected friends, and shining bright.',
    likes: 'Exploring, friendship, unique things, and underwater adventures.',
    dislikes: 'Being alone and darkness.',
    friends: 'A diverse group of sea creatures.',
    fun: ['Uses his light to guide friends through darkness.', 'Has an endearing and unconventional charm.']
  },
  {
    id: 'usahana',
    name: 'U*sa*ha*na',
    source: 'sanrio images/u*sa*ha*na image.png',
    image: 'sanrio images/u*sa*ha*na image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'U*sa*ha*na is an adorable bunny character who loves flowers and spreading joy.',
    personality: 'Sweet, gentle, and loves nature.',
    activities: 'Gardening, making flower crowns, and spreading happiness.',
    likes: 'Flowers, nature, friends, and peaceful moments.',
    dislikes: 'Wilted flowers and sadness.',
    friends: 'A circle of nature-loving companions.',
    fun: ['Always has flowers blooming around her.', 'Brings springtime happiness wherever she goes.']
  },
  {
    id: 'pekkle',
    name: 'Pekkle',
    source: 'sanrio images/pekkle image.jpeg',
    image: 'sanrio images/pekkle image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Pekkle is a cheerful duck character who loves adventure and making friends.',
    personality: 'Energetic, friendly, and always ready for fun.',
    activities: 'Swimming, exploring, and playing with friends.',
    likes: 'Water, adventure, friends, and sunny days.',
    dislikes: 'Being bored and staying still.',
    friends: 'A lively group of adventurous companions.',
    fun: ['Always quacking with excitement.', 'Loves splashing around in puddles and ponds.']
  },
  {
    id: 'patty-and-jimmy',
    name: 'Patty & Jimmy',
    source: 'sanrio images/patty & jimmy image.png',
    image: 'sanrio images/patty & jimmy image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Patty & Jimmy are adorable rabbit siblings who share a special bond and love adventures together.',
    personality: 'Sweet, caring, and inseparable.',
    activities: 'Playing together, exploring, and sharing special moments.',
    likes: 'Each other, family time, adventures, and fun.',
    dislikes: 'Being apart and sadness.',
    friends: 'A close-knit group of caring companions.',
    fun: ['Always looking out for each other.', 'Their bond is unbreakable and heartwarming.']
  },
  {
    id: 'marshmallow-mitaina-fuwafuwa-nyanko',
    name: 'Marshmallow Mitaina Fuwafuwa Nyanko',
    source: 'sanrio images/marshmallow mitaina fuwafuwa nyanko image.jpeg',
    image: 'sanrio images/marshmallow mitaina fuwafuwa nyanko image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Marshmallow Mitaina Fuwafuwa Nyanko is an adorably fluffy cat character as soft as a marshmallow.',
    personality: 'Soft, cuddly, and irresistibly sweet.',
    activities: 'Napping in cozy spots, being fluffy, and spreading comfort.',
    likes: 'Softness, warmth, cuddles, and peaceful moments.',
    dislikes: 'Roughness and loud noises.',
    friends: 'A gentle circle of cozy companions.',
    fun: ['As soft and fluffy as a marshmallow cloud.', 'Brings comfort and coziness wherever she goes.']
  },
  {
    id: 'maimai',
    name: 'Maimai',
    source: 'sanrio images/maimai image.jpeg',
    image: 'sanrio images/maimai image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Maimai is an adorable lamb character who spreads warmth and happiness wherever she goes.',
    personality: 'Gentle, sweet, and incredibly kind-hearted.',
    activities: 'Playing in meadows, making friends, and spreading joy.',
    likes: 'Flowers, soft grass, friendship, and sunny days.',
    dislikes: 'Cold weather and loneliness.',
    friends: 'A loving circle of caring companions.',
    fun: ['Has the softest wool you could ever imagine.', 'Brings warmth and comfort to everyone around.']
  },
  {
    id: 'ichigoman',
    name: 'Ichigoman',
    source: 'sanrio images/ichigoman image.png',
    image: 'sanrio images/ichigoman image.png',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Ichigoman is a strawberry-themed superhero character who fights for justice with sweetness.',
    personality: 'Brave, sweet, and heroic.',
    activities: 'Fighting for justice, protecting friends, and spreading sweetness.',
    likes: 'Strawberries, helping others, justice, and sweet victories.',
    dislikes: 'Injustice and sour attitudes.',
    friends: 'A heroic team of brave companions.',
    fun: ['Combines the power of a superhero with the sweetness of strawberries.', 'Always ready to save the day with berry power.']
  },
  {
    id: 'aggretsuko',
    name: 'Aggretsuko',
    source: 'sanrio images/aggretsuko image.jpeg',
    image: 'sanrio images/aggretsuko image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Aggretsuko is a red panda who releases workplace stress through death metal karaoke.',
    personality: 'Polite at work but fierce and passionate inside.',
    activities: 'Working in accounting, karaoke, and venting frustrations through music.',
    likes: 'Death metal, karaoke, letting off steam, and finding balance.',
    dislikes: 'Workplace stress, tedious tasks, and holding back emotions.',
    friends: 'A supportive group of understanding companions.',
    fun: ['Transforms from mild-mannered office worker to death metal queen.', 'Channels stress into powerful musical expression.']
  },
  {
    id: 'paupipo',
    name: 'Paupipo',
    source: 'sanrio images/paupipo image.jpeg',
    image: 'sanrio images/paupipo image.jpeg',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Paupipo is a cheerful purple creature who spreads joy and positive energy wherever they go.',
    personality: 'Upbeat, energetic, and always ready to brighten someone\'s day.',
    activities: 'Dancing, singing, and making new friends with infectious enthusiasm.',
    likes: 'Music, celebrations, colorful things, and spreading happiness.',
    dislikes: 'Sadness, boredom, and gloomy atmospheres.',
    friends: 'A wide circle of friends who love their vibrant spirit.',
    fun: ['Has a bouncy, bubbly personality that\'s impossible to resist.', 'Believes every day is a reason to celebrate.']
  },
  {
    id: 'patapatapeppy',
    name: 'Patapatapeppy',
    source: 'sanrio images/patapatapeppy image.jpeg',
    image: 'sanrio images/patapatapeppy image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Patapatapeppy is an energetic and fun-loving character known for bringing playful excitement to everything they do.',
    personality: 'Spirited, playful, and full of boundless enthusiasm and mischief.',
    activities: 'Playing games, exploring adventures, and spreading joy through laughter and fun.',
    likes: 'Games, laughter, new adventures, and making friends smile.',
    dislikes: 'Boredom, dull moments, and anything that dampens the fun spirit.',
    friends: 'Surrounded by friends who appreciate their playful and adventurous nature.',
    fun: ['Always ready for the next exciting adventure or game.', 'Has contagious energy that lifts everyone\'s spirits.']
  },
  {
    id: 'pankunchi',
    name: 'Pankunchi',
    source: 'sanrio images/pankunchi image.jpeg',
    image: 'sanrio images/pankunchi image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Pankunchi is a thoughtful and artistic character who appreciates beauty and creative expression in all forms.',
    personality: 'Gentle, imaginative, and deeply appreciative of the world\'s beauty.',
    activities: 'Creating art, enjoying nature, writing, and inspiring others with creativity.',
    likes: 'Art, music, nature, beautiful things, and meaningful conversations.',
    dislikes: 'Ugly things, negativity, and destruction of beauty.',
    friends: 'Close friends who share their passion for art and creativity.',
    fun: ['Has an eye for finding beauty in the smallest details.', 'Creates art that touches the hearts of those around them.']
  },
  {
    id: 'kashiwankomochi',
    name: 'Kashiwankomochi',
    source: 'sanrio images/kashiwankomochi image.jpeg',
    image: 'sanrio images/kashiwankomochi image.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Kashiwankomochi is a sweet and gentle character inspired by traditional Japanese confections, embodying warmth and comfort.',
    personality: 'Warm, nurturing, and brings comfort to those around them with their gentle presence.',
    activities: 'Sharing treats with friends, enjoying peaceful moments, and creating cozy atmospheres.',
    likes: 'Sweets, tea time, family gatherings, comfort, and traditional Japanese culture.',
    dislikes: 'Rushing, harshness, and anything that disrupts peaceful moments.',
    friends: 'Close-knit circle of friends who appreciate their warmth and hospitality.',
    fun: ['Inspired by traditional Japanese mochi treats with oak leaves.', 'Always ready to create a warm, welcoming environment for friends.']
  },
  {
    id: 'hagurumanstyle',
    name: 'Hagurumanstyle',
    source: 'sanrio images/hagurumanstyle image.jpeg',
    image: 'sanrio images/hagurumanstyle image.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Hagurumanstyle is a stylish and fashion-forward character who loves expressing themselves through creative and trendy designs.',
    personality: 'Fashionable, confident, and always on top of the latest trends and styles.',
    activities: 'Fashion design, styling friends, shopping, and creating unique looks.',
    likes: 'Fashion, trendy designs, colors, accessories, and self-expression.',
    dislikes: 'Outdated styles, boring fashion, and lack of creativity.',
    friends: 'A fashionable circle of friends who share their passion for style.',
    fun: ['Sets trends rather than follows them.', 'Can make any outfit look completely stylish and put-together.']
  },
  {
    id: 'zashikibuta',
    name: 'Zashikibuta',
    source: 'sanrio images/zashikibuta iamge.jpeg',
    image: 'sanrio images/zashikibuta iamge.jpeg',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Zashikibuta is an adorable piglet character who loves relaxing and enjoying the simple pleasures of life.',
    personality: 'Laid-back, content, and appreciates the little things.',
    activities: 'Relaxing at home, enjoying good food, and taking life easy.',
    likes: 'Comfort, snacks, cozy spaces, and peaceful moments.',
    dislikes: 'Stress and rushing around.',
    friends: 'A calm group of easygoing companions.',
    fun: ['Named after the lucky house spirit in Japanese folklore.', 'Masters the art of ultimate relaxation.']
  },
  {
    id: 'tiny-chum',
    name: 'Tiny Chum',
    source: 'sanrio images/tiny chum image.png',
    image: 'sanrio images/tiny chum image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Tiny Chum is an adorable small character who proves that great things come in tiny packages.',
    personality: 'Small but mighty, cheerful, and full of heart.',
    activities: 'Making big impacts, spreading joy, and showing that size doesn\'t matter.',
    likes: 'Friendship, adventure, proving doubters wrong, and big dreams.',
    dislikes: 'Being underestimated and feeling left out.',
    friends: 'A supportive group of all-sized companions.',
    fun: ['Never lets small size stop big dreams.', 'Has the biggest heart in the tiniest package.']
  },
  {
    id: 'the-vaudeville-duo',
    name: 'The Vaudeville Duo',
    source: 'sanrio images/the vaudeville duo image.jpeg',
    image: 'sanrio images/the vaudeville duo image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'The Vaudeville Duo is a charming pair of performers who bring classic entertainment and joy.',
    personality: 'Theatrical, entertaining, and always putting on a show.',
    activities: 'Performing, entertaining crowds, and spreading laughter through classic acts.',
    likes: 'Stage performances, applause, comedy, and making people smile.',
    dislikes: 'Silent audiences and stage fright.',
    friends: 'A lively troupe of performers and entertainers.',
    fun: ['Masters of classic vaudeville entertainment.', 'Their comedy routines never fail to delight.']
  },
  {
    id: 'sugarminuet',
    name: 'Sugarminuet',
    source: 'sanrio images/sugarminuet.jpeg',
    image: 'sanrio images/sugarminuet.jpeg',
    useImage: true,
    bg: 'var(--pink)',
    origin: 'Sugarminuet is a sweet and elegant character who dances through life with grace and charm.',
    personality: 'Graceful, elegant, and delightfully sweet.',
    activities: 'Dancing, performing elegant routines, and spreading sweetness.',
    likes: 'Music, dance, elegance, and sweet treats.',
    dislikes: 'Clumsiness and sour attitudes.',
    friends: 'A refined group of artistic companions.',
    fun: ['Dances with the grace of a sugar plum fairy.', 'Every movement is a sweet performance.']
  },
  {
    id: 'shinkansen',
    name: 'Shinkansen',
    source: 'sanrio images/shinkansen image.png',
    image: 'sanrio images/shinkansen image.png',
    useImage: true,
    bg: 'var(--baby-blue)',
    origin: 'Shinkansen is a speedy bullet train character who loves fast-paced adventures and reaching destinations.',
    personality: 'Fast, efficient, and always on time.',
    activities: 'Racing along tracks, transporting friends, and exploring new destinations.',
    likes: 'Speed, punctuality, adventure, and new routes.',
    dislikes: 'Delays and being stuck in place.',
    friends: 'A network of travel-loving companions.',
    fun: ['Named after Japan\'s famous bullet train system.', 'Can reach destinations with incredible speed and precision.']
  },
  {
    id: 'shinkaizoku',
    name: 'Shinkaizoku',
    source: 'sanrio images/shinkaizoku image.jpeg',
    image: 'sanrio images/shinkaizoku image.jpeg',
    useImage: true,
    bg: 'var(--lavender)',
    origin: 'Shinkaizoku is an adventurous pirate character who sails the seas seeking treasure and excitement.',
    personality: 'Brave, adventurous, and always ready for a treasure hunt.',
    activities: 'Sailing the seas, searching for treasure, and going on daring adventures.',
    likes: 'Treasure, adventure, the open sea, and freedom.',
    dislikes: 'Being landlocked and boredom.',
    friends: 'A crew of loyal seafaring companions.',
    fun: ['Commands a ship with courage and skill.', 'Every adventure is a quest for new treasures.']
  },
  {
    id: 'pokopons-diary',
    name: 'Pokopon\'s Diary',
    source: 'sanrio images/pokopon\'s diary image.png',
    image: 'sanrio images/pokopon\'s diary image.png',
    useImage: true,
    bg: 'var(--soft-yellow)',
    origin: 'Pokopon\'s Diary is a charming character who documents daily adventures and precious moments.',
    personality: 'Thoughtful, observant, and cherishes every memory.',
    activities: 'Writing in diary, documenting adventures, and preserving memories.',
    likes: 'Journaling, memories, quiet moments, and reflection.',
    dislikes: 'Forgotten moments and lost memories.',
    friends: 'A circle of memorable companions.',
    fun: ['Every page tells a special story.', 'Treasures each moment like a precious memory.']
  }
];

// Keep a backup map of the original fallback profiles so we can restore if an accidental merge
// overwrote canonical entries.
const originalFallbackMap = {};
fallbackCharacters.forEach(c => { originalFallbackMap[c.id] = JSON.parse(JSON.stringify(c)); });

// Auto-generate additional placeholder entries from asset filenames.
// Group assets with the same base name (e.g. 'pom1.png' and 'pom2.png') into one character entry.
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
  'pokopon\'s diary image.png',
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
