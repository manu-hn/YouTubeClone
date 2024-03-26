const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich',
    'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready',
    'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand',
    'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox', 'Black', "Droid"
];
export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}





const emojisList = [
    '😊', '🙃', '🤪', '🤓', '🤯', '😴', '💩', '👻', '👽', '🤖', '🦕', '🤟', '🤘', '👾',
    '👐', '🖖', '✌️', '🤙', '👋', '🐭', '🦖', '🐉', '😂', '🤦‍♂️', '🥰 ', '⭐', '😎', '😘'
]


export function randomEmojiGenerator() {
    return emojisList[Math.floor(Math.random() * emojisList.length)];
}


const colorSelector = [
    'text-green-400', 'text-stone-400', 'text-blue-400', 'text-purple-400', 'text-red-400', 'text-orange-400', 'text-slate-400',
    'text-400-gray', 'text-zinc-600', 'text-amber-500', 'text-yellow-500', 'text-lime-500', 'text-emerald-600', 'text-teal-600',
    'text-cyan-700', 'text-sky-600', 'text-indigo-600', 'text-violet-700', 'text-fuchsia-600'
]
export function generateRandomColor() {
    return colorSelector[Math.floor(Math.random() * colorSelector.length)];
}
