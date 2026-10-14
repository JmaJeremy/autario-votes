export interface MunicipalOfficial {
  name: string;
  title: string;
  ward?: string;
  email?: string;
  phone?: string;
  slug?: string;
}

export interface MunicipalityDetail {
  name: string;
  slug: string;
  type: 'City' | 'Town' | 'Township';
  separated: boolean; // Barrie and Orillia are separated cities
  mayor: MunicipalOfficial;
  deputyMayor?: MunicipalOfficial;
  councillors: MunicipalOfficial[];
  schoolBoardTrustees: {
    scdsb: string;
    smcdsb: string;
    viamonde: string;
    monavenir: string;
  };
  votingMethod: string;
  address: string;
  website: string;
  phone: string;
  clerkEmail: string;
  electorEstimate: number;
}

export const COUNTY_COUNCIL = {
  warden: {
    name: 'Basil Clarke',
    title: 'Simcoe County Warden',
    mayorOf: 'Ramara',
    slug: 'basil-clarke',
    term: '2023–2026 (Acclaimed for second term)',
    phone: '705-726-9300',
    email: 'warden@simcoe.ca'
  },
  deputyWarden: {
    name: 'Jennifer Coughlin',
    title: 'Simcoe County Deputy Warden',
    mayorOf: 'Springwater',
    slug: 'jennifer-coughlin',
    term: '2023–2026 (Acclaimed for second term)',
    phone: '705-726-9300',
    email: 'deputywarden@simcoe.ca'
  },
  totalMembers: 32,
  description: 'The County of Simcoe Council consists of the Mayors and Deputy Mayors from the 16 member municipalities (excluding the separated cities of Barrie and Orillia). Council elects a Warden and Deputy Warden from among its members every two years.',
  services: [
    'County Paramedic Services',
    'LINX Regional Transit',
    'Social and Affordable Housing Administration',
    'Simcoe County Long-Term Care Homes',
    'Waste Management and County Landfills',
    'County Arterial Road Network & Bridges',
    'Simcoe County Museum and Archives',
    'Regional Economic Development & Tourism'
  ]
};

export const MUNICIPAL_ELECTION_DATES_2026 = [
  {
    title: 'Nomination Period Opens',
    date: 'May 1, 2026',
    desc: 'Candidates can formally file nomination papers with the municipal clerk for Mayor, Councillor, or School Board Trustee.'
  },
  {
    title: 'Nomination Day (Deadline)',
    date: 'August 21, 2026 (2:00 PM)',
    desc: 'Final deadline for candidates to file nomination papers or withdraw nominations for the 2026–2030 term.'
  },
  {
    title: 'Voter Information Cards Mailed',
    date: 'Late September 2026',
    desc: 'Registered electors receive their Voter Information Cards with voting credentials or polling place information.'
  },
  {
    title: 'Advance & Online Voting Opens',
    date: 'Mid-October 2026',
    desc: 'Most Simcoe County municipalities open advance paper polls or internet/telephone voting portals.'
  },
  {
    title: 'Voting Day (Election Day)',
    date: 'October 26, 2026 (8:00 PM)',
    desc: 'Final day to cast ballots. Polls and online systems close at 8:00 PM Eastern Time.'
  },
  {
    title: 'New Term of Council Begins',
    date: 'November 15, 2026',
    desc: 'Newly elected Mayors, Deputy Mayors, Councillors, and Trustees are officially sworn into office for the 2026–2030 term.'
  }
];

export const SCHOOL_BOARDS = [
  {
    code: 'scdsb',
    name: 'Simcoe County District School Board (SCDSB)',
    type: 'English Public',
    headquarters: '1170 Highway 26, Midhurst, ON L9X 1N6',
    website: 'https://www.scdsb.on.ca',
    chair: 'Brandy Rafeek',
    trustees: [
      { area: 'Barrie (Wards 1–3)', trustee: 'Lynn Strachan' },
      { area: 'Barrie (Wards 4–6)', trustee: 'Dana Powell' },
      { area: 'Barrie (Wards 7–10)', trustee: 'Lisa-Marie Wilson' },
      { area: 'Collingwood & Wasaga Beach', trustee: 'Mike Foley' },
      { area: 'Innisfil', trustee: 'Donna Armstrong' },
      { area: 'New Tecumseth', trustee: 'Sarah Beitz' },
      { area: 'Orillia, Ramara & Severn', trustee: 'Jodi Lloyd' },
      { area: 'Oro-Medonte & Springwater', trustee: 'Liz Grummett' },
      { area: 'Midland, Penetanguishene, Tay & Tiny', trustee: 'Robin Talbot' },
      { area: 'Bradford West Gwillimbury', trustee: 'Debbie Connors' },
      { area: 'Adjala-Tosorontio, Clearview, CFB Borden & Essa', trustee: 'Brandy Rafeek' },
      { area: 'First Nation Communities (Appointed)', trustee: 'Anne Harrigan' }
    ]
  },
  {
    code: 'smcdsb',
    name: 'Simcoe Muskoka Catholic District School Board (SMCDSB)',
    type: 'English Catholic',
    headquarters: '46 Alliance Boulevard, Barrie, ON L4M 5K3',
    website: 'https://www.smcdsb.on.ca',
    chair: 'Susan van Amelsvoort',
    trustees: [
      { area: 'Barrie (Wards 1–5)', trustee: 'Susan van Amelsvoort' },
      { area: 'Barrie (Wards 6–10)', trustee: 'Maria Hardie' },
      { area: 'Orillia, Ramara, Severn & Oro-Medonte', trustee: 'Jill Colin' },
      { area: 'Collingwood, Wasaga Beach, Clearview & Springwater', trustee: 'Shawn Cooper' },
      { area: 'Innisfil & Bradford West Gwillimbury', trustee: 'Tanya Da Silva' },
      { area: 'Midland, Penetanguishene, Tay & Tiny', trustee: 'Kelly Holmgren' },
      { area: 'New Tecumseth, Essa & Adjala-Tosorontio', trustee: 'Janice Hutchison' },
      { area: 'Muskoka & Parry Sound Catholic Electorate', trustee: 'Joshua Boutotte' }
    ]
  },
  {
    code: 'viamonde',
    name: 'Conseil scolaire Viamonde (CSV)',
    type: 'French Public',
    headquarters: '116 Promenade Torbarrie, Toronto, ON M3L 1G8',
    website: 'https://csviamonde.ca',
    chair: 'Geneviève Grenier',
    trustees: [
      { area: 'Région de Simcoe, Muskoka et Grey (Secteur 5)', trustee: 'Karine Ricard' }
    ]
  },
  {
    code: 'monavenir',
    name: 'Conseil scolaire catholique MonAvenir',
    type: 'French Catholic',
    headquarters: '110 avenue Drewry, Toronto, ON M2M 1C8',
    website: 'https://www.cscmonavenir.ca',
    chair: 'Geneviève Saint-Amour',
    trustees: [
      { area: 'Région de Simcoe et Muskoka (Secteur 4)', trustee: 'Claire Thibideau' }
    ]
  }
];

export const MUNICIPALITIES_DATA: MunicipalityDetail[] = [
  {
    name: 'City of Barrie',
    slug: 'barrie',
    type: 'City',
    separated: true,
    electorEstimate: 110000,
    votingMethod: 'Internet and telephone voting with in-person voter assistance centres (no paper ballots)',
    address: '70 Collier Street, Barrie, ON L4M 4T5',
    website: 'https://www.barrie.ca',
    phone: '705-726-4242',
    clerkEmail: 'cityclerks@barrie.ca',
    mayor: {
      name: 'Alex Nuttall',
      title: 'Mayor of Barrie',
      slug: 'alex-nuttall',
      email: 'officeofthemayor@barrie.ca',
      phone: '705-792-7900'
    },
    deputyMayor: {
      name: 'Robert Thomson',
      title: 'Deputy Mayor (Ward 5)'
    },
    councillors: [
      { name: 'Clare Riepma', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Craig Nixon', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Ann-Marie Kungl', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Amy Courser', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Robert Thomson', title: 'Ward 5 Councillor (Deputy Mayor)', ward: 'Ward 5' },
      { name: 'Nigussie Nigussie', title: 'Ward 6 Councillor', ward: 'Ward 6' },
      { name: 'Gary Harvey', title: 'Ward 7 Councillor', ward: 'Ward 7' },
      { name: 'Jim Harris', title: 'Ward 8 Councillor', ward: 'Ward 8' },
      { name: 'Sergio Morales', title: 'Ward 9 Councillor', ward: 'Ward 9' },
      { name: 'Bryn Hamilton', title: 'Ward 10 Councillor', ward: 'Ward 10' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Lynn Strachan (Wards 1–3), Dana Powell (Wards 4–6), Lisa-Marie Wilson (Wards 7–10)',
      smcdsb: 'Susan van Amelsvoort (Wards 1–5), Maria Hardie (Wards 6–10)',
      viamonde: 'Karine Ricard (Secteur 5)',
      monavenir: 'Claire Thibideau (Secteur 4)'
    }
  },
  {
    name: 'City of Orillia',
    slug: 'orillia',
    type: 'City',
    separated: true,
    electorEstimate: 26000,
    votingMethod: 'In-person paper ballots with optical tabulators (ImageCast Precinct Tabulators; council opted out of internet voting)',
    address: '50 Andrew Street South, Suite 300, Orillia, ON L3V 7T5',
    website: 'https://www.orillia.ca',
    phone: '705-325-1311',
    clerkEmail: 'clerks@orillia.ca',
    mayor: {
      name: 'Don McIsaac',
      title: 'Mayor of Orillia',
      slug: 'don-mcisaac',
      email: 'dmcisaac@orillia.ca',
      phone: '705-955-2615'
    },
    councillors: [
      { name: 'David Campbell', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Whitney Smith', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Ralph Cipolla', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Luke Leatherdale', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Jay Fallis', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Jeff Czetwerzuk', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Tim Lauer', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Janet-Lynne Durnford', title: 'Ward 4 Councillor', ward: 'Ward 4' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd (Orillia, Ramara, Severn)',
      smcdsb: 'Jill Colin (Orillia, Ramara, Severn, Oro-Medonte)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Collingwood',
    slug: 'collingwood',
    type: 'Town',
    separated: false,
    electorEstimate: 21500,
    votingMethod: 'Hybrid: Internet voting plus in-person paper ballots with optical tabulators',
    address: '97 Hurontario Street, Collingwood, ON L9Y 3Z5',
    website: 'https://www.collingwood.ca',
    phone: '705-445-1030',
    clerkEmail: 'clerk@collingwood.ca',
    mayor: {
      name: 'Yvonne Hamlin',
      title: 'Mayor of Collingwood',
      slug: 'yvonne-hamelin',
      email: 'officeofthemayor@collingwood.ca',
      phone: '705-445-1030 ext. 8000'
    },
    deputyMayor: {
      name: 'Tim Fryer',
      title: 'Deputy Mayor of Collingwood'
    },
    councillors: [
      { name: 'Deb Doherty', title: 'Councillor (At-Large)' },
      { name: 'Steve Perry', title: 'Councillor (At-Large)' },
      { name: 'Kathy Jeffery', title: 'Councillor (At-Large)' },
      { name: 'Rob Ring', title: 'Councillor (At-Large)' },
      { name: 'Brandon Houston', title: 'Councillor (At-Large)' },
      { name: 'Christopher Baines', title: 'Councillor (At-Large)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Mike Foley (Collingwood & Wasaga Beach)',
      smcdsb: 'Shawn Cooper (Collingwood, Wasaga Beach, Clearview, Springwater)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Innisfil',
    slug: 'innisfil',
    type: 'Town',
    separated: false,
    electorEstimate: 33500,
    votingMethod: 'Internet and telephone voting with election service centres (no paper ballots)',
    address: '2101 Innisfil Beach Road, Innisfil, ON L9S 1A1',
    website: 'https://www.innisfil.ca',
    phone: '705-436-3710',
    clerkEmail: 'clerk@innisfil.ca',
    mayor: {
      name: 'Lynn Dollin',
      title: 'Mayor of Innisfil',
      slug: 'lynn-dollin',
      email: 'ldollin@innisfil.ca',
      phone: '705-436-3710'
    },
    deputyMayor: {
      name: 'Kenneth Fowler',
      title: 'Deputy Mayor of Innisfil'
    },
    councillors: [
      { name: 'Kevin Eisses', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Grace Constantine', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Jennifer Richardson', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Alex Waters', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Linda Zanella', title: 'Ward 5 Councillor', ward: 'Ward 5' },
      { name: 'Robert Saunders', title: 'Ward 6 Councillor', ward: 'Ward 6' },
      { name: 'Fred Drodge', title: 'Ward 7 Councillor', ward: 'Ward 7' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Donna Armstrong (Innisfil)',
      smcdsb: 'Tanya Da Silva (Innisfil & Bradford)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Bradford West Gwillimbury',
    slug: 'bradford-west-gwillimbury',
    type: 'Town',
    separated: false,
    electorEstimate: 31000,
    votingMethod: 'Internet and telephone voting with voter help centres (no paper ballots)',
    address: '100 Dissette Street, Units 7 & 8, Bradford, ON L3Z 2A7',
    website: 'https://www.townofbwg.com',
    phone: '905-775-5366',
    clerkEmail: 'clerks@townofbwg.com',
    mayor: {
      name: 'James Leduc',
      title: 'Mayor of Bradford West Gwillimbury',
      slug: 'james-leduc',
      email: 'jleduc@townofbwg.com',
      phone: '905-775-5366'
    },
    deputyMayor: {
      name: 'Raj Sandhu',
      title: 'Deputy Mayor of Bradford West Gwillimbury'
    },
    councillors: [
      { name: 'Cheraldean Duhaney', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Jonathan Scott', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Ben Verkaik', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Joseph Giordano', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Peter Ferragine', title: 'Ward 5 Councillor', ward: 'Ward 5' },
      { name: 'Nickolas Harper', title: 'Ward 6 Councillor', ward: 'Ward 6' },
      { name: 'Peter Dykie', title: 'Ward 7 Councillor', ward: 'Ward 7' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Debbie Connors (Bradford West Gwillimbury)',
      smcdsb: 'Tanya Da Silva (Innisfil & Bradford)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Midland',
    slug: 'midland',
    type: 'Town',
    separated: false,
    electorEstimate: 14500,
    votingMethod: 'Internet and telephone voting with town hall voter assistance centre (no paper ballots)',
    address: '575 Dominion Avenue, Midland, ON L4R 1R2',
    website: 'https://www.midland.ca',
    phone: '705-526-4275',
    clerkEmail: 'clerks@midland.ca',
    mayor: {
      name: 'Bill Gordon',
      title: 'Mayor of Midland',
      slug: 'bill-gordon',
      email: 'bgordon@midland.ca',
      phone: '705-526-4275'
    },
    deputyMayor: {
      name: 'Jack Contin',
      title: 'Deputy Mayor of Midland'
    },
    councillors: [
      { name: 'Roberta Bald', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Jamie-Lee Ball', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Cody Oschefski', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Bethany DeForest', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Jadelyn Rawn', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Bill Meridis', title: 'Ward 3 Councillor', ward: 'Ward 3' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot (Midland, Penetanguishene, Tay, Tiny)',
      smcdsb: 'Kelly Holmgren (Midland, Penetanguishene, Tay, Tiny)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Wasaga Beach',
    slug: 'wasaga-beach',
    type: 'Town',
    separated: false,
    electorEstimate: 19800,
    votingMethod: 'Hybrid: Internet voting plus in-person paper ballots with tabulators',
    address: '30 Lewis Street, Wasaga Beach, ON L9Z 1A1',
    website: 'https://www.wasagabeach.com',
    phone: '705-429-3844',
    clerkEmail: 'clerk@wasagabeach.com',
    mayor: {
      name: 'Brian Smith',
      title: 'Mayor of Wasaga Beach',
      slug: 'brian-smith',
      email: 'mayor@wasagabeach.com',
      phone: '705-429-3844'
    },
    deputyMayor: {
      name: 'Tanya Snell',
      title: 'Deputy Mayor of Wasaga Beach'
    },
    councillors: [
      { name: 'Mark Kinney', title: 'Councillor (At-Large)' },
      { name: 'Richard White', title: 'Councillor (At-Large)' },
      { name: 'Sasha-Rose Dileo', title: 'Councillor (At-Large)' },
      { name: 'Ellen Anderson', title: 'Councillor (At-Large)' },
      { name: 'Faye Ego', title: 'Councillor (At-Large)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Mike Foley (Collingwood & Wasaga Beach)',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of New Tecumseth',
    slug: 'new-tecumseth',
    type: 'Town',
    separated: false,
    electorEstimate: 34000,
    votingMethod: 'Hybrid: Internet voting plus advance in-person paper ballots with tabulators',
    address: '24 Tupper Street West, Alliston, ON L9R 1H2',
    website: 'https://www.newtecumseth.ca',
    phone: '705-435-3900',
    clerkEmail: 'clerk@newtecumseth.ca',
    mayor: {
      name: 'Richard Norcross',
      title: 'Mayor of New Tecumseth',
      slug: 'richard-norcross',
      email: 'rnorcross@newtecumseth.ca',
      phone: '705-435-3900'
    },
    deputyMayor: {
      name: 'Stephanie MacLellan',
      title: 'Deputy Mayor of New Tecumseth'
    },
    councillors: [
      { name: 'Wayne Nadorozny', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Wendy Gabrek', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Paul Foster', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Alan Lacey', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Marc Biss', title: 'Ward 5 Councillor', ward: 'Ward 5' },
      { name: 'Nicole Cox', title: 'Ward 6 Councillor', ward: 'Ward 6' },
      { name: 'Shira Harrison McIntyre', title: 'Ward 7 Councillor', ward: 'Ward 7' },
      { name: 'Andrea Sainsbury', title: 'Ward 8 Councillor', ward: 'Ward 8' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Sarah Beitz (New Tecumseth)',
      smcdsb: 'Janice Hutchison (New Tecumseth, Essa, Adjala-Tosorontio)',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Springwater',
    slug: 'springwater',
    type: 'Township',
    separated: false,
    electorEstimate: 16500,
    votingMethod: 'Internet and electronic voting with in-person voting centres',
    address: '2231 Nursery Road, Minesing, ON L9X 1A8',
    website: 'https://www.springwater.ca',
    phone: '705-728-4784',
    clerkEmail: 'clerks@springwater.ca',
    mayor: {
      name: 'Jennifer Coughlin',
      title: 'Mayor of Springwater & County Deputy Warden',
      slug: 'jennifer-coughlin',
      email: 'jennifer.coughlin@springwater.ca',
      phone: '705-728-4784'
    },
    deputyMayor: {
      name: 'George Cabral',
      title: 'Deputy Mayor of Springwater'
    },
    councillors: [
      { name: 'Matt Garwood', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Danielle Alexander', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Brad Thompson', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Anita Moore', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Phil Fisher', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Liz Grummett (Oro-Medonte & Springwater)',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Ramara',
    slug: 'ramara',
    type: 'Township',
    separated: false,
    electorEstimate: 10500,
    votingMethod: 'Hybrid: Internet and telephone voting plus advance in-person paper ballots',
    address: '2297 Highway 12, Brechin, ON L0K 1B0',
    website: 'https://www.ramara.ca',
    phone: '705-484-5374',
    clerkEmail: 'ramara@ramara.ca',
    mayor: {
      name: 'Basil Clarke',
      title: 'Mayor of Ramara & County Warden',
      slug: 'basil-clarke',
      email: 'bclarke@ramara.ca',
      phone: '705-484-5374'
    },
    deputyMayor: {
      name: 'Keith Bell',
      title: 'Deputy Mayor of Ramara'
    },
    councillors: [
      { name: 'David Snutch', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Jennifer Fisher', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Dana Tuju', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Gary Hetherington', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Sherri Bell', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd (Orillia, Ramara, Severn)',
      smcdsb: 'Jill Colin',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Oro-Medonte',
    slug: 'oro-medonte',
    type: 'Township',
    separated: false,
    electorEstimate: 19500,
    votingMethod: 'Internet and telephone voting with in-person voter help centres',
    address: '148 7 Line South, Oro-Medonte, ON L0L 2E0',
    website: 'https://www.oro-medonte.ca',
    phone: '705-487-2171',
    clerkEmail: 'clerk@oro-medonte.ca',
    mayor: {
      name: 'Randy Greenlaw',
      title: 'Mayor of Oro-Medonte',
      slug: 'randy-greenlaw',
      email: 'rgreenlaw@oro-medonte.ca',
      phone: '705-487-2171'
    },
    deputyMayor: {
      name: 'Peter Lavoie',
      title: 'Deputy Mayor of Oro-Medonte'
    },
    councillors: [
      { name: 'Lori Hutcheson', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'John Bard', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Cathy Keane', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'David Clark', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Richard Schell', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Liz Grummett (Oro-Medonte & Springwater)',
      smcdsb: 'Jill Colin',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Town of Penetanguishene',
    slug: 'penetanguishene',
    type: 'Town',
    separated: false,
    electorEstimate: 8500,
    votingMethod: 'Hybrid: Internet and telephone voting plus in-person paper ballots',
    address: '10 Robert Street West, Penetanguishene, ON L9M 2G2',
    website: 'https://www.penetanguishene.ca',
    phone: '705-549-7453',
    clerkEmail: 'info@penetanguishene.ca',
    mayor: {
      name: 'Doug Rawson',
      title: 'Mayor of Penetanguishene',
      slug: 'doug-rawson',
      email: 'drawson@penetanguishene.ca',
      phone: '705-549-7453'
    },
    deputyMayor: {
      name: 'Dan La Rose',
      title: 'Deputy Mayor of Penetanguishene'
    },
    councillors: [
      { name: 'Michel Mayotte', title: 'Councillor (At-Large)' },
      { name: 'Suzanne Marchand', title: 'Councillor (At-Large)' },
      { name: 'George Vadeboncoeur', title: 'Councillor (At-Large)' },
      { name: 'Bonita Desroches', title: 'Councillor (At-Large)' },
      { name: 'Jill St. Amant', title: 'Councillor (At-Large)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Kelly Holmgren',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Severn',
    slug: 'severn',
    type: 'Township',
    separated: false,
    electorEstimate: 12500,
    votingMethod: 'Hybrid: Internet voting plus in-person voting centres (paper tabulators or electronic tablets)',
    address: '1024 Hurlwood Lane, Severn, ON L3V 0Y6',
    website: 'https://www.severn.ca',
    phone: '705-325-2315',
    clerkEmail: 'corporate@severn.ca',
    mayor: {
      name: 'Mike Burkett',
      title: 'Mayor of Severn',
      slug: 'mike-burkett',
      email: 'mburkett@severn.ca',
      phone: '705-325-2315'
    },
    deputyMayor: {
      name: 'Judith Cox',
      title: 'Deputy Mayor of Severn'
    },
    councillors: [
      { name: 'Mark Douglas', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Bill Pettersen', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Philip Brennan', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Dan Maitland', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Sarah Valiquette-Thompson', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd',
      smcdsb: 'Jill Colin',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Tay',
    slug: 'tay',
    type: 'Township',
    separated: false,
    electorEstimate: 9500,
    votingMethod: 'Internet and telephone voting with municipal office assistance centre',
    address: '450 Park Street, Victoria Harbour, ON L0K 2A0',
    website: 'https://www.tay.ca',
    phone: '705-534-7248',
    clerkEmail: 'clerk@tay.ca',
    mayor: {
      name: 'Ted Walker',
      title: 'Mayor of Tay',
      slug: 'ted-walker',
      email: 'twalker@tay.ca',
      phone: '705-534-7248'
    },
    deputyMayor: {
      name: 'Gerard LaChapelle',
      title: 'Deputy Mayor of Tay'
    },
    councillors: [
      { name: 'Paul Raymond', title: 'Councillor (At-Large)' },
      { name: 'Sandy Talbot', title: 'Councillor (At-Large)' },
      { name: 'Sylvia Bumstead', title: 'Councillor (At-Large)' },
      { name: 'Barry Norris', title: 'Councillor (At-Large)' },
      { name: 'Judy Larmand', title: 'Councillor (At-Large)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Kelly Holmgren',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Tiny',
    slug: 'tiny',
    type: 'Township',
    separated: false,
    electorEstimate: 16000,
    votingMethod: 'Internet and telephone voting with election help centre (no paper ballots)',
    address: '130 Balm Beach Road West, Tiny, ON L0L 2J0',
    website: 'https://www.tiny.ca',
    phone: '705-526-4204',
    clerkEmail: 'clerks@tiny.ca',
    mayor: {
      name: 'David Evans',
      title: 'Mayor of Tiny',
      slug: 'david-evans',
      email: 'devans@tiny.ca',
      phone: '705-526-4204'
    },
    deputyMayor: {
      name: 'Steffen Walma',
      title: 'Deputy Mayor of Tiny'
    },
    councillors: [
      { name: 'Dave Brunelle', title: 'Councillor (At-Large)' },
      { name: 'Kelly Helowka', title: 'Councillor (At-Large)' },
      { name: 'Steffen Walma', title: 'Councillor (Deputy Mayor)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Kelly Holmgren',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Clearview',
    slug: 'clearview',
    type: 'Township',
    separated: false,
    electorEstimate: 13500,
    votingMethod: 'Internet and telephone voting with election services centres',
    address: '217 Gideon Street, Stayner, ON L0M 1S0',
    website: 'https://www.clearview.ca',
    phone: '705-428-6230',
    clerkEmail: 'clearview@clearview.ca',
    mayor: {
      name: 'Doug Measures',
      title: 'Mayor of Clearview',
      slug: 'doug-measures',
      email: 'dmeasures@clearview.ca',
      phone: '705-428-6230'
    },
    deputyMayor: {
      name: 'Paul Van Staveren',
      title: 'Deputy Mayor of Clearview'
    },
    councillors: [
      { name: 'Phyllis Dineen', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Robert Walker', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'John Broderick', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Robert McArthur', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Marty Beelen', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Essa',
    slug: 'essa',
    type: 'Township',
    separated: false,
    electorEstimate: 17500,
    votingMethod: 'In-person traditional paper ballots (advance and election day polling)',
    address: '5786 County Road 21, Utopia, ON L0M 1T0',
    website: 'https://www.essatownship.on.ca',
    phone: '705-424-9770',
    clerkEmail: 'admin@essatownship.on.ca',
    mayor: {
      name: 'Sandie Macdonald',
      title: 'Mayor of Essa',
      slug: 'sandie-macdonald',
      email: 'smacdonald@essatownship.on.ca',
      phone: '705-424-9770'
    },
    deputyMayor: {
      name: 'Michael Smith',
      title: 'Deputy Mayor of Essa'
    },
    councillors: [
      { name: 'Pieter Kiezebrink', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Liana Maltby', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Henry Sander', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Shawn Bubel', title: 'Ward 4 Councillor', ward: 'Ward 4' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Janice Hutchison',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Adjala-Tosorontio',
    slug: 'adjala-tosorontio',
    type: 'Township',
    separated: false,
    electorEstimate: 10500,
    votingMethod: 'Internet and telephone voting with town hall assistance kiosks',
    address: '7855 30th Sideroad Adjala, Alliston, ON L9R 1V1',
    website: 'https://www.adjtos.ca',
    phone: '705-434-5055',
    clerkEmail: 'clerk@adjtos.ca',
    mayor: {
      name: 'Scott Anderson',
      title: 'Mayor of Adjala-Tosorontio',
      slug: 'scott-anderson',
      email: 'sanderson@adjtos.ca',
      phone: '705-434-5055'
    },
    deputyMayor: {
      name: 'Dom Ramolo',
      title: 'Deputy Mayor of Adjala-Tosorontio'
    },
    councillors: [
      { name: 'David Westlake', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Scott Little', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Bob Meadows', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Adam Caswell', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Mary Small Brett', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Janice Hutchison',
      viamonde: 'Karine Ricard',
      monavenir: 'Claire Thibideau'
    }
  }
];
