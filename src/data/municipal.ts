import { sortByLastName } from '../utils/sorting';

export interface MunicipalOfficial {
  name: string;
  title: string;
  ward?: string;
  email?: string;
  phone?: string;
  slug?: string;
}

export interface ElectionCandidate {
  name: string;
  office: string; // 'Mayor' | 'Deputy Mayor' | 'Councillor' | 'Trustee'
  ward?: string;
  category?: 'mayor' | 'councillor' | 'trustee';
  votes?: number;
  votePercent?: string;
  elected?: boolean;
  incumbent?: boolean;
  acclaimed?: boolean;
  slug?: string;
  note?: string;
  email?: string;
  phone?: string;
}

export interface ElectionRace {
  title: string;
  category: 'mayor' | 'councillor' | 'trustee';
  ward?: string;
  seats?: number;
  description?: string;
  candidates: ElectionCandidate[];
}

export interface MunicipalityDetail {
  name: string;
  slug: string;
  type: 'City' | 'Town' | 'Township';
  separated: boolean; // Barrie and Orillia are separated cities
  mayor: MunicipalOfficial;
  deputyMayor?: MunicipalOfficial;
  councillors: MunicipalOfficial[];
  candidates: ElectionCandidate[];
  races?: ElectionRace[];
  schoolBoardTrustees: {
    scdsb: string;
    smcdsb: string;
    viamonde: string;
    monavenir: string;
  };
  votingMethod: string;
  address: string;
  website: string;
  electionUrl?: string;
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
    term: '2023–2024 (First Term); Acclaimed for Second Term, 2025–2026',
    phone: '705-726-9300',
    email: 'warden@simcoe.ca'
  },
  deputyWarden: {
    name: 'Jennifer Coughlin',
    title: 'Simcoe County Deputy Warden',
    mayorOf: 'Springwater',
    slug: 'jennifer-coughlin',
    term: '2023–2024 (First Term); Acclaimed for Second Term, 2025–2026',
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
      { area: 'Midland, Penetanguishene, Tay & Tiny', trustee: 'Michael D’Amelio' },
      { area: 'New Tecumseth, Essa & Adjala-Tosorontio', trustee: 'Janice Hutchison' },
      { area: 'Muskoka & Parry Sound Catholic Electorate', trustee: 'Joshua Boutotte' }
    ]
  },
  {
    code: 'viamonde',
    name: 'Conseil scolaire Viamonde (CSV)',
    type: 'French Public',
    headquarters: '116 Cornelius Parkway, Toronto, ON M6L 2K5',
    website: 'https://csviamonde.ca',
    chair: 'Benoit Fortin',
    trustees: [
      { area: 'Bruce, Dufferin, Grey & Simcoe (Secteur 5)', trustee: 'Éric Lapointe' }
    ]
  },
  {
    code: 'monavenir',
    name: 'Conseil scolaire catholique MonAvenir',
    type: 'French Catholic',
    headquarters: '110 avenue Drewry, Toronto, ON M2M 1C8',
    website: 'https://www.cscmonavenir.ca',
    chair: 'Geneviève Grenier',
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
    electionUrl: 'https://www.barrie.ca/city-hall/elections/2026-municipal-election',
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
    candidates: [
      { name: 'Alex Nuttall', office: 'Mayor', incumbent: true, slug: 'alex-nuttall', note: 'Sitting Mayor of Barrie' },
      { name: 'Tanya Saari', office: 'Mayor', incumbent: false, note: 'Local businesswoman & housing advocate' },
      { name: 'Kay Sayer', office: 'Mayor', incumbent: false },
      { name: 'Russell J. Tighe', office: 'Mayor', incumbent: false, note: 'Hospitality businessman' },
      { name: 'Stefano Agostino', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Shaughna Ainsworth', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Brent Bowser', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Christian Earl Cadera', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Hafiz Rahman', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Pauline Stevenson', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Frank Casera', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Shanicka Edwards', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Craig Nixon', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Ajmal Noushahi', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Tracy Strohm', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Amy Courser', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false, note: 'Sitting Ward 4 Councillor' },
      { name: 'Ben Hughes', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Bryan Jones', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Ryan Rijo', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Iradat Ahmad', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Matthew Corbett', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Lori Galeazza', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Patrick Harriott-Stewart', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Arif Khan', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Duarte Da Silva', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Robert Thomson', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: true, note: 'Sitting Ward 5 Councillor & Deputy Mayor' },
      { name: 'Nasar George Nader', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Nigussie Nigussie', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: true, note: 'Sitting Ward 6 Councillor' },
      { name: 'Christel Pena', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Gary Harvey', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: true, note: 'Sitting Ward 7 Councillor' },
      { name: 'Michael Lewis', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false },
      { name: 'Samina Alim', office: 'Ward 8 Councillor', ward: 'Ward 8', incumbent: false },
      { name: 'Amanda Fellows', office: 'Ward 8 Councillor', ward: 'Ward 8', incumbent: false },
      { name: 'Jim Harris', office: 'Ward 8 Councillor', ward: 'Ward 8', incumbent: true, note: 'Sitting Ward 8 Councillor' },
      { name: 'Norm Costello', office: 'Ward 9 Councillor', ward: 'Ward 9', incumbent: false },
      { name: 'Sergio Morales', office: 'Ward 9 Councillor', ward: 'Ward 9', incumbent: true, note: 'Sitting Ward 9 Councillor' },
      { name: 'Asmar Naveed', office: 'Ward 9 Councillor', ward: 'Ward 9', incumbent: false },
      { name: 'Dave Weingarten', office: 'Ward 9 Councillor', ward: 'Ward 9', incumbent: false },
      { name: 'William Cadeau', office: 'Ward 10 Councillor', ward: 'Ward 10', incumbent: false },
      { name: 'Bryn Hamilton', office: 'Ward 10 Councillor', ward: 'Ward 10', incumbent: true, note: 'Sitting Ward 10 Councillor' },
      { name: 'Georgy Kapustin', office: 'Ward 10 Councillor', ward: 'Ward 10', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Lynn Strachan (Wards 1–3), Dana Powell (Wards 4–6), Lisa-Marie Wilson (Wards 7–10)',
      smcdsb: 'Susan van Amelsvoort (Wards 1–5), Maria Hardie (Wards 6–10)',
      viamonde: 'Éric Lapointe (Secteur 5)',
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
    electionUrl: 'https://www.orillia.ca/my-government/council-and-committees/elections-and-voting/',
    phone: '705-325-1311',
    clerkEmail: 'clerks@orillia.ca',
    mayor: {
      name: 'Don McIsaac',
      title: 'Mayor of Orillia (2022–2026; Not Seeking Re-election)',
      slug: 'don-mcisaac',
      email: 'mayor@orillia.ca',
      phone: '705-325-1311'
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
    candidates: [
      { name: 'Steve Clarke', office: 'Mayor', incumbent: false, slug: 'steve-clarke', note: 'Former 2-Term Mayor of Orillia (2014–2022)' },
      { name: 'Whitney Joy Smith', office: 'Mayor', incumbent: false, slug: 'whitney-joy-smith', note: 'Sitting Ward 1 Councillor' }
    ],
    races: [
      {
        title: 'Head of Council (Mayor)',
        category: 'mayor',
        seats: 1,
        description: 'Chief Executive Officer and Head of Council for the City of Orillia. 1 to be elected at-large.',
        candidates: [
          {
            name: 'Steve Clarke',
            office: 'Mayor',
            incumbent: false,
            slug: 'steve-clarke',
            email: 'clarke4orillia@gmail.com',
            phone: '705-329-8153',
            note: 'Former 2-Term Mayor of Orillia (2014–2022)'
          },
          {
            name: 'Whitney Joy Smith',
            office: 'Mayor',
            incumbent: false,
            slug: 'whitney-joy-smith',
            email: 'whitney@whitneyformayor.ca',
            phone: '705-408-4871',
            note: 'Sitting Ward 1 Councillor'
          }
        ]
      },
      {
        title: 'Ward 1 Councillor',
        category: 'councillor',
        ward: 'Ward 1',
        seats: 2,
        description: 'Represents Ward 1 on Orillia City Council. 2 councillors to be elected.',
        candidates: [
          {
            name: 'Joseph Bat',
            office: 'Ward 1 Councillor',
            incumbent: false,
            email: 'josephbatward1@gmail.com',
            phone: '705-955-2477'
          },
          {
            name: 'Krystal Brooks',
            office: 'Ward 1 Councillor',
            incumbent: false,
            email: 'krystalbrooks1234@gmail.com',
            phone: '705-619-5321'
          },
          {
            name: 'David Campbell',
            office: 'Ward 1 Councillor',
            incumbent: true,
            email: 'david@votedavidcampbell.com',
            phone: '705-327-2662',
            note: 'Sitting Ward 1 Councillor'
          },
          {
            name: 'Gracii Partridge',
            office: 'Ward 1 Councillor',
            incumbent: false,
            email: 'GraciiforWard1@gmail.com',
            phone: '705-955-2515'
          },
          {
            name: 'Michael Shortt',
            office: 'Ward 1 Councillor',
            incumbent: false,
            email: 'michael@michaelforwardone.ca',
            phone: '705-279-5307'
          },
          {
            name: 'Ellen Wolper',
            office: 'Ward 1 Councillor',
            incumbent: false,
            email: 'eworillia@gmail.com',
            phone: '705-323-3912'
          }
        ]
      },
      {
        title: 'Ward 2 Councillor',
        category: 'councillor',
        ward: 'Ward 2',
        seats: 2,
        description: 'Represents Ward 2 on Orillia City Council. 2 councillors to be elected.',
        candidates: [
          {
            name: 'Mason Ainsworth',
            office: 'Ward 2 Councillor',
            incumbent: false,
            slug: 'mason-ainsworth',
            email: 'voteainsworth@gmail.com',
            phone: '705-826-4967',
            note: 'Former Ward 3 Councillor (2014–2022)'
          },
          {
            name: 'Ralph Cipolla',
            office: 'Ward 2 Councillor',
            incumbent: true,
            email: 'cipolla@orilliapronet.com',
            phone: '705-323-2466',
            note: 'Sitting Ward 2 Councillor'
          },
          {
            name: 'Shandell Conboy',
            office: 'Ward 2 Councillor',
            incumbent: false,
            email: 'shandell.orillia@gmail.com',
            phone: '905-767-8173'
          },
          {
            name: 'Rob Kloostra',
            office: 'Ward 2 Councillor',
            incumbent: false,
            slug: 'rob-kloostra',
            email: 'robkloostra@gmail.com',
            phone: '705-330-5525',
            note: 'Former Ward 1 Councillor (2014–2022)'
          },
          {
            name: 'Luke Leatherdale',
            office: 'Ward 2 Councillor',
            incumbent: true,
            email: 'luke4orillia@gmail.com',
            note: 'Sitting Ward 2 Councillor'
          },
          {
            name: 'Duncan McDonald',
            office: 'Ward 2 Councillor',
            incumbent: false,
            email: 'duncanmcdonaldward2@gmail.com',
            phone: '705-989-8183'
          }
        ]
      },
      {
        title: 'Ward 3 Councillor',
        category: 'councillor',
        ward: 'Ward 3',
        seats: 2,
        description: 'Represents Ward 3 on Orillia City Council. 2 councillors to be elected.',
        candidates: [
          {
            name: 'Jeff Czetwerzuk',
            office: 'Ward 3 Councillor',
            incumbent: true,
            email: 'jeff4orillia@gmail.com',
            phone: '705-345-6418',
            note: 'Sitting Ward 3 Councillor'
          },
          {
            name: 'Jay Fallis',
            office: 'Ward 3 Councillor',
            incumbent: true,
            email: 'fallisforthefuture@gmail.com',
            phone: '705-801-8683',
            note: 'Sitting Ward 3 Councillor'
          },
          {
            name: 'Alasoba Kelsy-Braide',
            office: 'Ward 3 Councillor',
            incumbent: false,
            email: 'vote4alasoba@orilliaward3.ca',
            phone: '705-345-8006'
          },
          {
            name: 'James Krawecki',
            office: 'Ward 3 Councillor',
            incumbent: false,
            email: 'james@james4ward3orillia.ca',
            phone: '705-905-8295'
          }
        ]
      },
      {
        title: 'Ward 4 Councillor',
        category: 'councillor',
        ward: 'Ward 4',
        seats: 2,
        description: 'Represents Ward 4 on Orillia City Council. 2 councillors to be elected.',
        candidates: [
          {
            name: 'Danny Borzellino',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'dannypinoborzellino@gmail.com',
            phone: '705-500-5530'
          },
          {
            name: 'Doug Cooper',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'dougcooper4council@gmail.com',
            phone: '705-955-7475'
          },
          {
            name: 'JL Durnford',
            office: 'Ward 4 Councillor',
            incumbent: true,
            email: 'jl@votejl.ca',
            phone: '705-238-7493',
            note: 'Sitting Ward 4 Councillor'
          },
          {
            name: 'Andrew Hill',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'hill4ward4@gmail.com',
            phone: '705-330-9122'
          },
          {
            name: 'Tyler Holmes',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'tylerholmes4ward4@gmail.com',
            phone: '705-500-9966'
          },
          {
            name: 'Tim Lauer',
            office: 'Ward 4 Councillor',
            incumbent: true,
            email: 'tlauer@sympatico.ca',
            phone: '705-325-5812',
            note: 'Sitting Ward 4 Councillor'
          },
          {
            name: 'Maggie Ostler Best',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'maggieostlerbest@gmail.com',
            phone: '705-619-2877'
          },
          {
            name: 'Paula Stewart',
            office: 'Ward 4 Councillor',
            incumbent: false,
            email: 'paula4orillia@gmail.com',
            phone: '705-623-0164'
          }
        ]
      },
      {
        title: 'School Board Trustee – Simcoe County District School Board (SCDSB)',
        category: 'trustee',
        seats: 1,
        description: 'English Public school board trustee representing City of Orillia, Township of Ramara, and Township of Severn. 1 to be elected.',
        candidates: [
          {
            name: 'Jodi M. Lloyd',
            office: 'Trustee, English Public',
            incumbent: true,
            slug: 'jodi-lloyd',
            email: 'jodilloyd4trustee@gmail.com',
            phone: '705-955-4964',
            note: 'Sitting SCDSB Trustee (Orillia, Ramara & Severn)'
          },
          {
            name: 'Stephen Sopher',
            office: 'Trustee, English Public',
            incumbent: false
          }
        ]
      },
      {
        title: 'School Board Trustee – Simcoe Muskoka Catholic District School Board (SMCDSB)',
        category: 'trustee',
        seats: 1,
        description: 'English Catholic school board trustee representing Orillia, Ramara, Severn, and Oro-Medonte. 1 trustee to be elected.',
        candidates: [
          {
            name: 'J. Timothy Jackson',
            office: 'Trustee, English Catholic',
            incumbent: false,
            acclaimed: true,
            email: 'jacksonjtim@gmail.com',
            phone: '705-259-3518',
            note: 'Acclaimed Trustee (Elected Unopposed)'
          }
        ]
      },
      {
        title: 'School Board Trustee – Conseil scolaire Viamonde (CSV)',
        category: 'trustee',
        seats: 1,
        description: 'French Public school board trustee for Simcoe, Muskoka, and Grey (Secteur 5). 1 trustee to be elected.',
        candidates: [
          {
            name: 'Rachael Golem',
            office: 'Conseillère, French Public',
            incumbent: false,
            email: 'allo@rachaelgolem.ca',
            phone: '647-884-3044'
          },
          {
            name: 'Eric Lapointe',
            office: 'Conseiller, French Public',
            incumbent: false,
            email: 'ericrlapointe@yahoo.com',
            phone: '705-241-8909'
          }
        ]
      },
      {
        title: 'School Board Trustee – Conseil scolaire catholique MonAvenir',
        category: 'trustee',
        seats: 1,
        description: 'French Catholic school board trustee for Simcoe and Muskoka (Secteur 4). 1 trustee to be elected.',
        candidates: [
          {
            name: 'Donald Blais',
            office: 'Conseiller, French Catholic',
            incumbent: false,
            email: 'donaldblais@bell.net',
            phone: '416-688-4009'
          },
          {
            name: 'Innocent Legrand',
            office: 'Conseiller, French Catholic',
            incumbent: false,
            email: 'WNIBL@yahoo.com',
            phone: '416-779-4241'
          }
        ]
      }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd (Orillia, Ramara, Severn)',
      smcdsb: 'Jill Colin (Orillia, Ramara, Severn, Oro-Medonte)',
      viamonde: 'Éric Lapointe',
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
    electionUrl: 'https://www.collingwood.ca/governance-engagement/elections',
    phone: '705-445-1030',
    clerkEmail: 'clerk@collingwood.ca',
    mayor: {
      name: 'Yvonne Hamlin',
      title: 'Mayor of Collingwood',
      slug: 'yvonne-hamlin',
      email: 'officeofthemayor@collingwood.ca',
      phone: '705-445-1030 ext. 8000'
    },
    deputyMayor: {
      name: 'Tim Fryer',
      title: 'Deputy Mayor of Collingwood (Not Seeking Re-election)'
    },
    councillors: [
      { name: 'Deb Doherty', title: 'Councillor (At-Large)' },
      { name: 'Steve Perry', title: 'Councillor (At-Large)' },
      { name: 'Kathy Jeffery', title: 'Councillor (At-Large)' },
      { name: 'Rob Ring', title: 'Councillor (At-Large)' },
      { name: 'Brandon Houston', title: 'Councillor (At-Large)' },
      { name: 'Christopher Baines', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Yvonne Hamlin', office: 'Mayor', incumbent: true, slug: 'yvonne-hamlin', note: 'Sitting Mayor of Collingwood' },
      { name: 'Jon Hillis', office: 'Mayor', incumbent: false, note: 'Community volunteer & entrepreneur' },
      { name: 'Kathy Jeffery', office: 'Mayor', incumbent: false, note: 'Town Councillor' },
      { name: 'Norman Sandberg', office: 'Mayor', incumbent: false, slug: 'norm-sandberg', note: 'Former Town Councillor' },
      { name: 'Deb Doherty', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Councillor' },
      { name: 'Chris Potts', office: 'Deputy Mayor', incumbent: false },
      { name: 'Christopher Baines', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Cam Ecclestone', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Jan Ferrigan', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Sal Greco', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Joe Guyon', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Chris Johnson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Norm Johnston', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Ian Macculloch', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Tyler Macfarlane', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Richard Marks', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'James McCrimmon', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Mariane McLeod', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Steve Perry', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Rob Ring', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Christel Schindler', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Helana Szakall', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Sherri Thomson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'George Watson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'James Yott', office: 'Councillor', category: 'councillor', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Mike Foley (Collingwood & Wasaga Beach)',
      smcdsb: 'Shawn Cooper (Collingwood, Wasaga Beach, Clearview, Springwater)',
      viamonde: 'Éric Lapointe',
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
    electionUrl: 'https://www.innisfil.ca/government-administration/elections',
    phone: '705-436-3710',
    clerkEmail: 'clerksoffice@innisfil.ca',
    mayor: {
      name: 'Lynn Dollin',
      title: 'Mayor of Innisfil',
      slug: 'lynn-dollin',
      email: 'officeofthemayor@innisfil.ca',
      phone: '705-436-3740 ext. 1101'
    },
    deputyMayor: {
      name: 'Kenneth Fowler',
      title: 'Deputy Mayor of Innisfil (Running for Mayor in 2026)'
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
    candidates: [
      { name: 'Lynn Dollin', office: 'Mayor', incumbent: true, slug: 'lynn-dollin', note: 'Sitting Mayor of Innisfil' },
      { name: 'Kenneth Fowler', office: 'Mayor', incumbent: false, note: 'Sitting Deputy Mayor' },
      { name: 'Travis Romer', office: 'Mayor', incumbent: false },
      { name: 'Dana Stott', office: 'Mayor', incumbent: false },
      { name: 'Dave Cockburn', office: 'Deputy Mayor', incumbent: false },
      { name: 'Fillip Letichever', office: 'Deputy Mayor', incumbent: false },
      { name: 'Rob Nicol', office: 'Deputy Mayor', incumbent: false },
      { name: 'Kevin Eisses', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'Scott Newman', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Paul Veloso', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Susan Bennett', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Grace Constantine', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Ignasius Croos', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Anil Dutta', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Carol Griffith', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Andrew Harrigan', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Alison Jacks', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Nina La Costa', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Jennifer Richardson', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, note: 'Sitting Ward 3 Councillor' },
      { name: 'Alan Cugliari', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Melissa Faria', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Deb McGrath', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Tricia Khan', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Karen Brown', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Dan Davidson', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Linda Zanella', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: true, note: 'Sitting Ward 5 Councillor' },
      { name: 'Keisha Knibbs', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Robert Saunders', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: true, note: 'Sitting Ward 6 Councillor' },
      { name: 'Rita Ditaranto', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false },
      { name: 'Fred Drodge', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: true, note: 'Sitting Ward 7 Councillor' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Donna Armstrong (Innisfil)',
      smcdsb: 'Tanya Da Silva (Innisfil & Bradford)',
      viamonde: 'Éric Lapointe',
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
    candidates: [
      { name: 'Emil Alkhanov', office: 'Mayor', incumbent: false },
      { name: 'Mauro Di Giovanni', office: 'Mayor', incumbent: false, slug: 'mauro-di-giovanni' },
      { name: 'Peter Ferragine', office: 'Mayor', incumbent: false, note: 'Sitting Ward 5 Councillor' },
      { name: 'Nickolas Harper', office: 'Mayor', incumbent: false, note: 'Sitting Ward 6 Councillor' },
      { name: 'James Leduc', office: 'Mayor', incumbent: true, slug: 'james-leduc', note: 'Sitting Mayor of Bradford West Gwillimbury' },
      { name: 'Raj Sandhu', office: 'Mayor', incumbent: false, note: 'Sitting Deputy Mayor' },
      { name: 'Joseph G. Giordano', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 4 Councillor' },
      { name: 'Stephanie Sinclair', office: 'Deputy Mayor', incumbent: false },
      { name: 'Yolan Williams', office: 'Deputy Mayor', incumbent: false },
      { name: 'Bibi Ganesh', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Kimberly Harvey', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Jeff Bellamy', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Vikas Patel', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Aftab Hussain', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Cheraldean Duhaney', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'Marianna Calamia', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Charlie Shaw', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Jennifer Harrison', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Alfiero "Alfie" Cavallo', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'David Cummings', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Ben Verkaik', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, note: 'Sitting Ward 3 Councillor' },
      { name: 'Carlos Botelho', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Rahmat Mansoor', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Salvatore Morra', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Kash Toor', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Jamal Pascall', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'David Pullara', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Dhwanish Vaidya', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Henry Egharevba', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Munawar Chudary', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Darryl Eek', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Tristan Daniels', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Brent Fellman', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Elizabeth Lambert', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Matthew Patullo', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Peter Dykie', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: true, note: 'Sitting Ward 7 Councillor' },
      { name: 'Stanley Joseph', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Debbie Connors (Bradford West Gwillimbury)',
      smcdsb: 'Tanya Da Silva (Innisfil & Bradford)',
      viamonde: 'Éric Lapointe',
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
      name: 'Beth Prost',
      title: 'Deputy Mayor of Midland'
    },
    councillors: [
      { name: 'Jamie-Lee Ball', title: 'Councillor (At-Large)' },
      { name: 'Roberta Bald', title: 'Councillor (At-Large)' },
      { name: 'Sheldon East', title: 'Councillor (At-Large)' },
      { name: 'Catherine MacDonald', title: 'Councillor (At-Large)' },
      { name: 'Howie Major', title: 'Councillor (At-Large)' },
      { name: 'Bill Meridis', title: 'Councillor (At-Large)' },
      { name: 'Jaz Patel', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Bill Gordon', office: 'Mayor', incumbent: true, slug: 'bill-gordon', note: 'Sitting Mayor of Midland' },
      { name: 'Ute Schmid-Jones', office: 'Mayor', incumbent: false, note: 'Community advocate & former candidate' },
      { name: 'Catherine E. MacDonald', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Councillor' },
      { name: 'Beth Prost', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor' },
      { name: 'Jamie-Lee Ball', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Tyler Downer', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Blain Dusome', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Sheldon East', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Jerry Gagnon', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Margaret Hamelin', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Derek Howard', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Bob Jeffery', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Eric "Howie" Major', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Megan Marchildon', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Corinne McNaughton', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Bill Meridis', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Cody Oschefski', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Jaz Patel', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Yvonne Tietz', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Frances Tupy', office: 'Councillor', category: 'councillor', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot (Midland, Penetanguishene, Tay, Tiny)',
      smcdsb: 'Michael D’Amelio (Midland, Penetanguishene, Tay, Tiny)',
      viamonde: 'Éric Lapointe',
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
      { name: 'Joe Belanger', title: 'Councillor (At-Large)' },
      { name: 'Richard White', title: 'Councillor (At-Large)' },
      { name: 'Sasha-Rose Dileo', title: 'Councillor (At-Large)' },
      { name: 'Ellen Timms', title: 'Councillor (At-Large)' },
      { name: 'Faye Ego', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Marilyn (Raven) Broughton', office: 'Mayor', incumbent: false },
      { name: 'Leslie Farkas', office: 'Mayor', incumbent: false, slug: 'leslie-farkas' },
      { name: 'Brian Smith', office: 'Mayor', incumbent: true, slug: 'brian-smith', note: 'Sitting Mayor of Wasaga Beach' },
      { name: 'Mark Winegarden', office: 'Mayor', incumbent: false },
      { name: 'Mike Foley', office: 'Deputy Mayor', incumbent: false, note: 'Sitting SCDSB Trustee (Collingwood & Wasaga Beach)' },
      { name: 'Tanya Snell', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor' },
      { name: 'Aldona Barysas-Oleinikas', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Joe Belanger', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Sasha-Rose Dileo', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Faye Ego', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Dan Gale', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Kyle Graves', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Kendra Marr', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Harvey Mihalic', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Maurice (Moe) Mowat', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Carrie Plater', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Dean Robinson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Ellen Timms', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Richard White', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Mike Foley (Collingwood & Wasaga Beach)',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Éric Lapointe',
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
      { name: 'Chris Rapin', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Wendy Gabrek', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Paul Foster', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Alan Masters', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Marc Biss', title: 'Ward 5 Councillor', ward: 'Ward 5' },
      { name: 'Nicole Cox', title: 'Ward 6 Councillor', ward: 'Ward 6' },
      { name: 'Shira Harrison McIntyre', title: 'Ward 7 Councillor', ward: 'Ward 7' },
      { name: 'Andrea Jacks', title: 'Ward 8 Councillor', ward: 'Ward 8' }
    ],
    candidates: [
      { name: 'Stephanie MacLellan', office: 'Mayor', incumbent: false, note: 'Sitting Deputy Mayor' },
      { name: 'Richard Norcross', office: 'Mayor', incumbent: true, slug: 'richard-norcross', note: 'Sitting Mayor of New Tecumseth' },
      { name: 'Jaison Waldman', office: 'Mayor', incumbent: false },
      { name: 'Marc Biss', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 5 Councillor' },
      { name: 'Steven Dollmaier', office: 'Deputy Mayor', incumbent: false },
      { name: 'James Dougall', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Chris Rapin', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'Wendy Gabrek', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Jason Shand', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Laurie Mortimer', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Tony Phekoo', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Alan Masters', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: true, note: 'Sitting Ward 4 Councillor' },
      { name: 'Ben Miadovnik', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Peter Barbati', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Nicole Cox', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false, note: 'Sitting Ward 6 Councillor' },
      { name: 'Joe Castellano', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Shira Harrison McIntyre', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false, note: 'Sitting Ward 7 Councillor' },
      { name: 'Shannon Rose', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Kyle Warren', office: 'Ward 6 Councillor', ward: 'Ward 6', incumbent: false },
      { name: 'Dianna Del Bianco', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false },
      { name: 'Andrea Jacks', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false, note: 'Sitting Ward 8 Councillor' },
      { name: 'Stefano Mercuri', office: 'Ward 7 Councillor', ward: 'Ward 7', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Sarah Beitz (New Tecumseth)',
      smcdsb: 'Janice Hutchison (New Tecumseth, Essa, Adjala-Tosorontio)',
      viamonde: 'Éric Lapointe',
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
    candidates: [
      { name: 'George Cabral', office: 'Mayor', incumbent: false, note: 'Sitting Deputy Mayor' },
      { name: 'Jennifer Coughlin', office: 'Mayor', incumbent: true, slug: 'jennifer-coughlin', note: 'Sitting Mayor & Simcoe County Deputy Warden' },
      { name: 'Liz Grummett', office: 'Deputy Mayor', incumbent: false, note: 'Sitting SCDSB Trustee (Oro-Medonte & Springwater)' },
      { name: 'Anita Moore', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 4 Councillor' },
      { name: 'Dave Barnett', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Matt Garwood', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'John Spring', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Danielle Alexander', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Greg Davidson', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Hale Mahon', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Wanda Maw-Chapman', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Alex Saldana', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Christine Spellman', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Mike Campbell', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Phil Fisher', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: true, note: 'Sitting Ward 5 Councillor' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Liz Grummett (Oro-Medonte & Springwater)',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Éric Lapointe',
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
      title: 'Mayor of Ramara & County Warden (2022–2026 Term; Not Seeking Re-election)',
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
      { name: 'Joe Gough', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Sherri Bell', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    candidates: [
      { name: 'Keith Bell', office: 'Mayor', incumbent: false, note: 'Sitting Deputy Mayor' },
      { name: 'Sherri Bell', office: 'Mayor', incumbent: false, note: 'Sitting Ward 5 Councillor' },
      { name: 'Jim Cronk', office: 'Mayor', incumbent: false, note: 'Local entrepreneur' },
      { name: 'Joe Gough', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 4 Councillor' },
      { name: 'Alexis MacIntyre Victor', office: 'Deputy Mayor', incumbent: false },
      { name: 'Jennifer Fisher', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Dianne Wright', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Richard Black', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Michael O’Brien', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Kimberley "Kat" Williams', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Gary Woods', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd (Orillia, Ramara, Severn)',
      smcdsb: 'Jill Colin',
      viamonde: 'Éric Lapointe',
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
      name: 'Lori Hutcheson',
      title: 'Deputy Mayor of Oro-Medonte (Ward 1)'
    },
    councillors: [
      { name: 'Lori Hutcheson', title: 'Ward 1 Councillor (Deputy Mayor)', ward: 'Ward 1' },
      { name: 'John Bard', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'David Clark', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Peter Lavoie', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Richard Schell', title: 'Ward 5 Councillor', ward: 'Ward 5' },
      { name: 'Robert Young', title: 'Ward 6 Councillor', ward: 'Ward 6' }
    ],
    candidates: [
      { name: 'Randy Greenlaw', office: 'Mayor', incumbent: true, slug: 'randy-greenlaw', note: 'Sitting Mayor of Oro-Medonte' },
      { name: 'Cathy Keane', office: 'Mayor', incumbent: false, note: 'Former Ward 3 Councillor' },
      { name: 'Joanie Pritchett', office: 'Mayor', incumbent: false },
      { name: 'Peter Lavoie', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor & Ward 4 Councillor' },
      { name: 'Jenn Dahinten', office: 'Deputy Mayor', incumbent: false },
      { name: 'Donald Smith', office: 'Deputy Mayor', incumbent: false },
      { name: 'Lenore Ackford', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Robert Young', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false, note: 'Sitting Ward 6 Councillor' },
      { name: 'John Bard', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, note: 'Sitting Ward 2 Councillor' },
      { name: 'Brandyn Dorner', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Lori Hutcheson', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false, note: 'Sitting Deputy Mayor & Ward 1 Councillor' },
      { name: 'Terri Gortnar', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Jane Voorheis', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false, acclaimed: true, note: 'Acclaimed (Elected Unopposed)' },
      { name: 'Diana Wells', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Rick Schell', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: true, note: 'Sitting Ward 5 Councillor' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Liz Grummett (Oro-Medonte & Springwater)',
      smcdsb: 'Jill Colin',
      viamonde: 'Éric Lapointe',
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
      { name: 'Bill Waters', title: 'Councillor (At-Large)' },
      { name: 'Suzanne Marchand', title: 'Councillor (At-Large)' },
      { name: 'George Vadeboncoeur', title: 'Councillor (At-Large)' },
      { name: 'Bonita Desroches', title: 'Councillor (At-Large)' },
      { name: 'Doug Leroux', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Doug Rawson', office: 'Mayor', incumbent: true, slug: 'doug-rawson', note: 'Sitting Mayor (Acclaimed / Unopposed in 2026)' },
      { name: 'Dan La Rose', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor' },
      { name: 'Suzanne Marchand', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Councillor' },
      { name: 'Bonita Desroches', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Doug Leroux', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'George Vadeboncoeur', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Bill Waters', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Daryl O’Shea', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Martin Prost', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Marie Richardson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Jill St. Amant', office: 'Councillor', category: 'councillor', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Michael D’Amelio',
      viamonde: 'Éric Lapointe',
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
    clerkEmail: 'election@severn.ca',
    mayor: {
      name: 'Mike Burkett',
      title: 'Mayor of Severn',
      slug: 'mike-burkett',
      email: 'mburkett@severn.ca',
      phone: '705-325-2315'
    },
    deputyMayor: {
      name: 'Judith Cox',
      title: 'Deputy Mayor of Severn (Not Seeking Re-election)'
    },
    councillors: [
      { name: 'Mark Taylor', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Dan Janssen', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Philip Brennan', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Wanda Minnings', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Jim McIntyre', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    candidates: [
      { name: 'Mike Burkett', office: 'Mayor', incumbent: true, slug: 'mike-burkett', note: 'Sitting Mayor of Severn' },
      { name: 'Jane Dunlop', office: 'Mayor', incumbent: false, note: 'Former Severn Councillor' },
      { name: 'Danielle Falardeau', office: 'Mayor', incumbent: false },
      { name: 'Suzanne Burtenshaw', office: 'Deputy Mayor', incumbent: false },
      { name: 'Dan Janssen', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 2 Councillor' },
      { name: 'Wanda Minnings', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 4 Councillor' },
      { name: 'Jacob Bolyea', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Jim Gleadall', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Keith Prentice', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Jill Silk', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Colin Bidmead', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Mark Missen', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Kelly Sine', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Geraldine Taylor-Cook', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Philip Brennan', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, note: 'Sitting Ward 3 Councillor' },
      { name: 'Brandi Savoy', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Michael Kelly', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Colton Porter', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Jason Stanton', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false, acclaimed: true, note: 'Acclaimed (Elected Unopposed)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Jodi Lloyd',
      smcdsb: 'Jill Colin',
      viamonde: 'Éric Lapointe',
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
    clerkEmail: 'kjohns@tay.ca',
    mayor: {
      name: 'Ted Walker',
      title: 'Mayor of Tay',
      slug: 'ted-walker',
      email: 'twalker@tay.ca',
      phone: '705-534-7248'
    },
    deputyMayor: {
      name: 'Barry Norris',
      title: 'Deputy Mayor of Tay'
    },
    councillors: [
      { name: 'Paul Raymond', title: 'Councillor (At-Large)' },
      { name: 'Sandy Talbot', title: 'Councillor (At-Large)' },
      { name: 'Sylvia Bumstead', title: 'Councillor (At-Large)' },
      { name: 'Gerard LaChapelle', title: 'Councillor (At-Large)' },
      { name: 'Judy Larmand', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Ted Walker', office: 'Mayor', incumbent: true, slug: 'ted-walker', note: 'Sitting Mayor (Acclaimed in 2026)' },
      { name: 'Barry Norris', office: 'Deputy Mayor', incumbent: true, acclaimed: true, note: 'Sitting Deputy Mayor (Acclaimed in 2026)' },
      { name: 'Dennis Beans', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Brian Blanks', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Sylvia Bumstead', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Jacqueline Dawson', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Tom Gostick', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Kevin Harrod', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Gerard LaChapelle', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Jason Lamont', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Judy Larmand', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Paul Raymond', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Sandy Talbot', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Bernie Uhlich', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Melissa Wieser', office: 'Councillor', category: 'councillor', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Michael D’Amelio',
      viamonde: 'Éric Lapointe',
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
      name: 'Sean Miskimins',
      title: 'Deputy Mayor of Tiny'
    },
    councillors: [
      { name: 'Dave Brunelle', title: 'Councillor (At-Large)' },
      { name: 'Kelly Helowka', title: 'Councillor (At-Large)' },
      { name: 'Steffen Walma', title: 'Councillor (At-Large)' }
    ],
    candidates: [
      { name: 'Dave Brunelle', office: 'Mayor', incumbent: false, note: 'Sitting Township Councillor' },
      { name: 'David Evans', office: 'Mayor', incumbent: true, slug: 'david-evans', note: 'Sitting Mayor of Tiny' },
      { name: 'David Kohler', office: 'Mayor', incumbent: false },
      { name: 'Chuck Stradling', office: 'Mayor', incumbent: false },
      { name: 'Sean Miskimins', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor' },
      { name: 'Rob Panasiuk', office: 'Deputy Mayor', incumbent: false },
      { name: 'Karen Zulynik', office: 'Deputy Mayor', incumbent: false },
      { name: 'Don Anthony', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'John Bryant', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Mario Galluzzo', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Jessie Garland', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Kelly Peter Helowka', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Laura A. Hughes', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Irene Jankowski', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Stephen McNamara', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Ray Millar', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'David Sparrock', office: 'Councillor', category: 'councillor', incumbent: false },
      { name: 'Steffen Walma', office: 'Councillor', category: 'councillor', incumbent: true, note: 'Sitting Councillor' },
      { name: 'Reynold Waters', office: 'Councillor', category: 'councillor', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Robin Talbot',
      smcdsb: 'Michael D’Amelio',
      viamonde: 'Éric Lapointe',
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
    clerkEmail: 'election@clearview.ca',
    mayor: {
      name: 'Doug Measures',
      title: 'Mayor of Clearview',
      slug: 'doug-measures',
      email: 'dmeasures@clearview.ca',
      phone: '705-428-6230'
    },
    deputyMayor: {
      name: 'Paul Van Staveren',
      title: 'Deputy Mayor of Clearview (Not Seeking Re-election)'
    },
    councillors: [
      { name: 'Phyllis Dineen', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Robert McArthur', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'John Broderick', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Robert Walker', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Marty Beelen', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    candidates: [
      { name: 'Robert McArthur', office: 'Mayor', incumbent: false, note: 'Sitting Ward 2 Councillor' },
      { name: 'Doug Measures', office: 'Mayor', incumbent: true, slug: 'doug-measures', note: 'Sitting Mayor of Clearview' },
      { name: 'Marty Beelen', office: 'Deputy Mayor', incumbent: false, note: 'Sitting Ward 5 Councillor' },
      { name: 'Justin McGillvray', office: 'Deputy Mayor', incumbent: false },
      { name: 'Lisa Rolfe', office: 'Deputy Mayor', incumbent: false },
      { name: 'Phyllis Dineen', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'Craig Houghton', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Chuck Arrand', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Gary Walters', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'James Webster', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'John Broderick', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, note: 'Sitting Ward 3 Councillor' },
      { name: 'David Witzke', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Larry Culham', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Ken Walker', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Rachel Brooks', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Robert Thomas', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false },
      { name: 'Melanie Walters', office: 'Ward 5 Councillor', ward: 'Ward 5', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Shawn Cooper',
      viamonde: 'Éric Lapointe',
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
    phone: '705-424-9917',
    clerkEmail: 'kpascoe@essatownship.on.ca',
    mayor: {
      name: 'Sandie Macdonald',
      title: 'Mayor of Essa',
      slug: 'sandie-macdonald',
      email: 'smacdonald@essatownship.on.ca',
      phone: '705-424-9917'
    },
    deputyMayor: {
      name: 'Michael Smith',
      title: 'Deputy Mayor of Essa'
    },
    councillors: [
      { name: 'Pieter Kiezebrink', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Henry Sander', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Liana Maltby', title: 'Ward 3 Councillor', ward: 'Ward 3' }
    ],
    candidates: [
      { name: 'Francesco Lo Greco', office: 'Mayor', incumbent: false },
      { name: 'Sandie Macdonald', office: 'Mayor', incumbent: true, slug: 'sandie-macdonald', note: 'Sitting Mayor of Essa' },
      { name: 'Pieter Kiezebrink', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: true, note: 'Sitting Ward 1 Councillor' },
      { name: 'Vincent Ivanyi', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Henry Sander', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: true, acclaimed: true, note: 'Sitting Ward 2 Councillor (Acclaimed in 2026)' },
      { name: 'Liana Maltby', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, acclaimed: true, note: 'Sitting Ward 3 Councillor (Acclaimed in 2026)' }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Janice Hutchison',
      viamonde: 'Éric Lapointe',
      monavenir: 'Claire Thibideau'
    }
  },
  {
    name: 'Township of Adjala-Tosorontio',
    slug: 'adjala-tosorontio',
    type: 'Township',
    separated: false,
    electorEstimate: 10500,
    votingMethod: 'Internet and telephone voting with a Voter Help Centre',
    address: '7855 30th Sideroad, Alliston, ON L9R 1V1',
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
      name: 'Julius Lachs',
      title: 'Deputy Mayor of Adjala-Tosorontio'
    },
    councillors: [
      { name: 'Anub Simson', title: 'Ward 1 Councillor', ward: 'Ward 1' },
      { name: 'Bob Meadows', title: 'Ward 2 Councillor', ward: 'Ward 2' },
      { name: 'Ronald O’Leary', title: 'Ward 3 Councillor', ward: 'Ward 3' },
      { name: 'Miklos Borsos', title: 'Ward 4 Councillor', ward: 'Ward 4' },
      { name: 'Adam Cox', title: 'Ward 5 Councillor', ward: 'Ward 5' }
    ],
    candidates: [
      { name: 'Scott W. Anderson', office: 'Mayor', incumbent: true, slug: 'scott-anderson', note: 'Sitting Mayor of Adjala-Tosorontio' },
      { name: 'Bob Meadows', office: 'Mayor', incumbent: false, note: 'Sitting Ward 2 Councillor' },
      { name: 'Anub Simson', office: 'Mayor', incumbent: false, note: 'Sitting Ward 1 Councillor' },
      { name: 'Steven Stogrin', office: 'Mayor', incumbent: false },
      { name: 'Julius Lachs', office: 'Deputy Mayor', incumbent: true, note: 'Sitting Deputy Mayor' },
      { name: 'Floyd Pinto', office: 'Deputy Mayor', incumbent: false },
      { name: 'Amanda Gervasi', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Michael Homiakov', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Angelina Raheja', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Japjot Singh', office: 'Ward 1 Councillor', ward: 'Ward 1', incumbent: false },
      { name: 'Jagraj Aujla', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Jeff Patterson', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Cam Simone', office: 'Ward 2 Councillor', ward: 'Ward 2', incumbent: false },
      { name: 'Janice Mason', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Ronald O’Leary', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: true, note: 'Sitting Ward 3 Councillor' },
      { name: 'Jas Sangha', office: 'Ward 3 Councillor', ward: 'Ward 3', incumbent: false },
      { name: 'Jason Baird', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Miklos Borsos', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: true, note: 'Sitting Ward 4 Councillor' },
      { name: 'Deborah Hall', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false },
      { name: 'Amanda Reiber', office: 'Ward 4 Councillor', ward: 'Ward 4', incumbent: false }
    ],
    schoolBoardTrustees: {
      scdsb: 'Brandy Rafeek',
      smcdsb: 'Janice Hutchison',
      viamonde: 'Éric Lapointe',
      monavenir: 'Claire Thibideau'
    }
  }
];

export function buildMunicipalityRaces(m: MunicipalityDetail): ElectionRace[] {
  if (m.races && m.races.length > 0) {
    return m.races;
  }

  const races: ElectionRace[] = [];

  // 1. Head of Council (Mayor) Race
  const mayoralCandidates = (m.candidates || []).filter(c => c.office === 'Mayor' || !c.office);
  const mayorPool: ElectionCandidate[] = mayoralCandidates.length > 0
    ? mayoralCandidates.map(c => ({
        ...c,
        category: 'mayor' as const,
        slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }))
    : [
        {
          name: m.mayor.name,
          office: 'Mayor',
          category: 'mayor' as const,
          incumbent: true,
          slug: m.mayor.slug || m.mayor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          email: m.mayor.email,
          phone: m.mayor.phone,
          note: `Sitting Mayor of ${m.name}`
        }
      ];

  races.push({
    title: 'Head of Council (Mayor)',
    category: 'mayor',
    seats: 1,
    description: `Chief executive officer and head of council for ${m.name}. 1 to be elected.`,
    candidates: sortByLastName(mayorPool)
  });

  // 2. Deputy Mayor Race (if applicable and elected at-large)
  if (m.deputyMayor) {
    const dmCandidates = (m.candidates || []).filter(c => c.office === 'Deputy Mayor');
    const isWardCouncillor = m.councillors.some(c => c.name === m.deputyMayor?.name && c.ward && c.ward !== 'At-Large');
    if (!isWardCouncillor || dmCandidates.length > 0) {
      const dmPool: ElectionCandidate[] = dmCandidates.length > 0
        ? dmCandidates.map(c => ({
            ...c,
            category: 'councillor' as const,
            slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          }))
        : [
            {
              name: m.deputyMayor.name,
              office: 'Deputy Mayor',
              category: 'councillor' as const,
              incumbent: true,
              slug: m.deputyMayor.slug || m.deputyMayor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
              email: m.deputyMayor.email,
              phone: m.deputyMayor.phone,
              note: `Sitting Deputy Mayor & Simcoe County Council representative`
            }
          ];

      races.push({
        title: 'Deputy Mayor',
        category: 'councillor',
        seats: 1,
        description: `Deputy Head of Council and Simcoe County Council representative for ${m.name}. 1 to be elected.`,
        candidates: sortByLastName(dmPool)
      });
    }
  }

  // 3. Councillor Races (Ward-based or At-Large)
  const hasWards = m.councillors.some(c => c.ward && c.ward !== 'At-Large');
  if (hasWards) {
    const wardMap = new Map<string, MunicipalOfficial[]>();
    m.councillors.forEach(c => {
      const w = c.ward || 'At-Large';
      if (!wardMap.has(w)) wardMap.set(w, []);
      wardMap.get(w)!.push(c);
    });

    for (const [ward, clist] of wardMap.entries()) {
      const wardCandidates = (m.candidates || []).filter(c => c.ward === ward || c.office === `${ward} Councillor`);
      const pool: ElectionCandidate[] = wardCandidates.length > 0
        ? wardCandidates.map(c => ({
            ...c,
            category: 'councillor' as const,
            ward,
            slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          }))
        : clist.map(c => ({
            name: c.name,
            office: `${ward} Councillor`,
            category: 'councillor' as const,
            ward,
            incumbent: true,
            slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            email: c.email,
            phone: c.phone,
            note: `Sitting ${c.title || `${ward} Councillor`}`
          }));

      races.push({
        title: `${ward} Councillor`,
        category: 'councillor',
        ward,
        seats: clist.length,
        description: `Represents ${ward} on ${m.name} Council. ${clist.length} to be elected.`,
        candidates: sortByLastName(pool)
      });
    }
  } else {
    // At-Large council race
    const councillorCandidates = (m.candidates || []).filter(c => c.category === 'councillor' || c.office === 'Councillor');
    const pool: ElectionCandidate[] = councillorCandidates.length > 0
      ? councillorCandidates.map(c => ({
          ...c,
          category: 'councillor' as const,
          ward: 'At-Large',
          slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        }))
      : m.councillors.map(c => ({
          name: c.name,
          office: 'Councillor',
          category: 'councillor' as const,
          ward: 'At-Large',
          incumbent: true,
          slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          email: c.email,
          phone: c.phone,
          note: `Sitting Town Councillor`
        }));

    races.push({
      title: 'Municipal Councillor (At-Large)',
      category: 'councillor',
      ward: 'At-Large',
      seats: m.councillors.length,
      description: `Represents ${m.name} at-large on Municipal Council. ${m.councillors.length} to be elected.`,
      candidates: sortByLastName(pool)
    });
  }

  // 4. School Board Trustee Races
  if (m.schoolBoardTrustees) {
    // English Public (SCDSB)
    if (m.schoolBoardTrustees.scdsb) {
      const parts = m.schoolBoardTrustees.scdsb.split(/,(?=\s*[A-Z])/);
      parts.forEach(part => {
        const trimmed = part.trim();
        const match = trimmed.match(/^([^(]+)(?:\(([^)]+)\))?/);
        const name = match ? match[1].trim() : trimmed;
        const zone = match && match[2] ? match[2].trim() : m.name;
        const trusteeSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        races.push({
          title: `School Board Trustee – SCDSB (${zone})`,
          category: 'trustee',
          seats: 1,
          description: `English Public school board trustee representing ${zone}. 1 to be elected.`,
          candidates: [
            {
              name,
              office: 'Trustee',
              category: 'trustee',
              incumbent: true,
              slug: trusteeSlug,
              note: `Sitting SCDSB Trustee (${zone})`
            }
          ]
        });
      });
    }

    // English Catholic (SMCDSB)
    if (m.schoolBoardTrustees.smcdsb) {
      const parts = m.schoolBoardTrustees.smcdsb.split(/,(?=\s*[A-Z])/);
      parts.forEach(part => {
        const trimmed = part.trim();
        const match = trimmed.match(/^([^(]+)(?:\(([^)]+)\))?/);
        const name = match ? match[1].trim() : trimmed;
        const zone = match && match[2] ? match[2].trim() : m.name;
        const trusteeSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        races.push({
          title: `School Board Trustee – SMCDSB (${zone})`,
          category: 'trustee',
          seats: 1,
          description: `English Catholic school board trustee representing ${zone}. 1 to be elected.`,
          candidates: [
            {
              name,
              office: 'Trustee',
              category: 'trustee',
              incumbent: true,
              slug: trusteeSlug,
              note: `Sitting SMCDSB Trustee (${zone})`
            }
          ]
        });
      });
    }

    // French Public (CSV)
    if (m.schoolBoardTrustees.viamonde) {
      const name = m.schoolBoardTrustees.viamonde.split('(')[0].trim();
      races.push({
        title: 'School Board Trustee – CSV (French Public)',
        category: 'trustee',
        seats: 1,
        description: `Conseil scolaire Viamonde trustee covering Sector 5 (Simcoe County). 1 to be elected.`,
        candidates: [
          {
            name,
            office: 'Trustee',
            category: 'trustee',
            incumbent: true,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            note: 'Sitting CSV Trustee (Région de Simcoe, Muskoka et Grey)'
          }
        ]
      });
    }

    // French Catholic (MonAvenir)
    if (m.schoolBoardTrustees.monavenir) {
      const name = m.schoolBoardTrustees.monavenir.split('(')[0].trim();
      races.push({
        title: 'School Board Trustee – MonAvenir (French Catholic)',
        category: 'trustee',
        seats: 1,
        description: `Conseil scolaire catholique MonAvenir trustee covering Sector 4 (Simcoe County). 1 to be elected.`,
        candidates: [
          {
            name,
            office: 'Trustee',
            category: 'trustee',
            incumbent: true,
            slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            note: 'Sitting MonAvenir Trustee (Région de Simcoe et Muskoka)'
          }
        ]
      });
    }
  }

  return races;
}

// Automatically populate races for every municipality
MUNICIPALITIES_DATA.forEach(m => {
  if (!m.races || m.races.length === 0) {
    m.races = buildMunicipalityRaces(m);
  }
});
