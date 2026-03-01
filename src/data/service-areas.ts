export interface ServiceArea {
  slug: string;
  city: string;
  county: string;
  distance: string;
  description: string;
}

export const serviceAreas: ServiceArea[] = [
  { slug: 'canton-tx', city: 'Canton', county: 'Van Zandt', distance: '0 miles (home base)', description: 'Home of Huddle Steel Buildings.' },
  { slug: 'edgewood-tx', city: 'Edgewood', county: 'Van Zandt', distance: '~10 miles', description: 'Just north of Canton.' },
  { slug: 'grand-saline-tx', city: 'Grand Saline', county: 'Van Zandt', distance: '~12 miles', description: 'Northeast of Canton.' },
  { slug: 'van-tx', city: 'Van', county: 'Van Zandt', distance: '~13 miles', description: 'East of Canton along I-20.' },
  { slug: 'wills-point-tx', city: 'Wills Point', county: 'Van Zandt', distance: '~14 miles', description: 'West of Canton along I-20.' },
  { slug: 'athens-tx', city: 'Athens', county: 'Henderson', distance: '~24 miles', description: 'County seat of Henderson County.' },
  { slug: 'gun-barrel-city-tx', city: 'Gun Barrel City', county: 'Henderson', distance: '~23 miles', description: 'On Cedar Creek Lake.' },
  { slug: 'brownsboro-tx', city: 'Brownsboro', county: 'Henderson', distance: '~23 miles', description: 'Southeast of Canton.' },
  { slug: 'malakoff-tx', city: 'Malakoff', county: 'Henderson', distance: '~30 miles', description: 'On Cedar Creek Lake.' },
  { slug: 'terrell-tx', city: 'Terrell', county: 'Kaufman', distance: '~29 miles', description: 'Along I-20 west of Canton.' },
  { slug: 'kaufman-tx', city: 'Kaufman', county: 'Kaufman', distance: '~40 miles', description: 'County seat of Kaufman County.' },
  { slug: 'forney-tx', city: 'Forney', county: 'Kaufman', distance: '~40 miles', description: 'Fast-growing city west of Canton.' },
  { slug: 'kemp-tx', city: 'Kemp', county: 'Kaufman', distance: '~23 miles', description: 'Southwest of Canton near Cedar Creek Lake.' },
  { slug: 'mabank-tx', city: 'Mabank', county: 'Kaufman', distance: '~19 miles', description: 'Southwest of Canton near Cedar Creek Lake.' },
  { slug: 'tyler-tx', city: 'Tyler', county: 'Smith', distance: '~36 miles', description: 'Largest city in East Texas.' },
  { slug: 'lindale-tx', city: 'Lindale', county: 'Smith', distance: '~31 miles', description: 'North of Tyler along I-20.' },
  { slug: 'hideaway-tx', city: 'Hideaway', county: 'Smith', distance: '~24 miles', description: 'East of Canton near Lake Tyler.' },
  { slug: 'whitehouse-tx', city: 'Whitehouse', county: 'Smith', distance: '~38 miles', description: 'South of Tyler.' },
  { slug: 'mineola-tx', city: 'Mineola', county: 'Wood', distance: '~23 miles', description: 'East of Canton in Wood County.' },
  { slug: 'quitman-tx', city: 'Quitman', county: 'Wood', distance: '~29 miles', description: 'County seat of Wood County.' },
  { slug: 'winnsboro-tx', city: 'Winnsboro', county: 'Wood', distance: '~40 miles', description: 'Northeast of Canton.' },
  { slug: 'emory-tx', city: 'Emory', county: 'Rains', distance: '~23 miles', description: 'County seat of Rains County.' },
  { slug: 'point-tx', city: 'Point', county: 'Rains', distance: '~25 miles', description: 'In Rains County north of Canton.' },
  { slug: 'greenville-tx', city: 'Greenville', county: 'Hunt', distance: '~52 miles', description: 'County seat of Hunt County.' },
  { slug: 'sulphur-springs-tx', city: 'Sulphur Springs', county: 'Hunt', distance: '~43 miles', description: 'Northeast of Canton in Hopkins County.' },
  { slug: 'rockwall-tx', city: 'Rockwall', county: 'Rockwall', distance: '~48 miles', description: 'Near Lake Ray Hubbard.' },
];

export const counties = [
  'Van Zandt County',
  'Henderson County',
  'Kaufman County',
  'Smith County',
  'Wood County',
  'Rains County',
  'Hunt County',
  'Rockwall County',
];
