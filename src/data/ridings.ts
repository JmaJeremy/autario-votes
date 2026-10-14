export interface ElectionResult {
  candidate: string;
  party: string;
  partyCode: 'PC' | 'LIB' | 'NDP' | 'GRN' | 'NB' | 'OTH';
  votes: number;
  percent: string;
  elected: boolean;
}

export interface Riding {
  slug: string;
  name: string;
  mpp: string;
  mppSlug: string;
  party: string;
  role: string;
  description: string;
  municipalities: string[];
  registeredVoters: number;
  recentElection: {
    title: string;
    date: string;
    turnout: string;
    totalVotes: number;
    results: ElectionResult[];
  };
  officeAddress: string;
  officePhone: string;
}

export const RIDINGS: Riding[] = [
  {
    slug: 'barrie-innisfil',
    name: 'Barrie—Innisfil',
    mpp: 'Andrea Khanjin',
    mppSlug: 'andrea-khanjin',
    party: 'Progressive Conservative',
    role: 'Minister of Red Tape Reduction',
    description: 'Covers the southern portion of the City of Barrie (south of Tiffin Street and Kempenfelt Bay) together with the entire Town of Innisfil on the western shore of Lake Simcoe.',
    municipalities: ['Barrie (South)', 'Innisfil'],
    registeredVoters: 99332,
    recentElection: {
      title: '44th Ontario General Election',
      date: 'February 27, 2025',
      turnout: '41.30%',
      totalVotes: 40746,
      results: [
        { candidate: 'Andrea Khanjin', party: 'Progressive Conservative', partyCode: 'PC', votes: 22048, percent: '54.11%', elected: true },
        { candidate: 'Dane Lee', party: 'Ontario Liberal Party', partyCode: 'LIB', votes: 10613, percent: '26.05%', elected: false },
        { candidate: 'Andrew Harrigan', party: 'Ontario NDP', partyCode: 'NDP', votes: 5442, percent: '13.36%', elected: false },
        { candidate: 'Stephen Ciesielski', party: 'Green Party of Ontario', partyCode: 'GRN', votes: 1655, percent: '4.06%', elected: false },
        { candidate: 'Sam Mangiapane', party: 'New Blue Party', partyCode: 'NB', votes: 814, percent: '2.00%', elected: false },
      ]
    },
    officeAddress: '20 Bell Farm Road, Unit 5, Barrie, ON L4M 6E4',
    officePhone: '705-722-0575'
  },
  {
    slug: 'barrie-springwater-oro-medonte',
    name: 'Barrie—Springwater—Oro-Medonte',
    mpp: 'Doug Downey',
    mppSlug: 'doug-downey',
    party: 'Progressive Conservative',
    role: 'Attorney General of Ontario',
    description: 'Encompasses northern Barrie (north of Tiffin Street), the Township of Springwater (Elmvale, Midhurst, Minesing), and the western and southern parts of the Township of Oro-Medonte.',
    municipalities: ['Barrie (North)', 'Springwater', 'Oro-Medonte (West/South)'],
    registeredVoters: 88277,
    recentElection: {
      title: '44th Ontario General Election',
      date: 'February 27, 2025',
      turnout: '45.90%',
      totalVotes: 40245,
      results: [
        { candidate: 'Doug Downey', party: 'Progressive Conservative', partyCode: 'PC', votes: 20073, percent: '49.88%', elected: true },
        { candidate: 'Dr. Rose Zacharias', party: 'Ontario Liberal Party', partyCode: 'LIB', votes: 14332, percent: '35.61%', elected: false },
        { candidate: 'Tracey Lapham', party: 'Ontario NDP', partyCode: 'NDP', votes: 2710, percent: '6.73%', elected: false },
        { candidate: 'Tim Grant', party: 'Green Party of Ontario', partyCode: 'GRN', votes: 1637, percent: '4.07%', elected: false },
        { candidate: 'Alex Della Ventura', party: 'New Blue Party', partyCode: 'NB', votes: 856, percent: '2.13%', elected: false },
      ]
    },
    officeAddress: '299 Lakeshore Drive, Suite 203, Barrie, ON L4N 7Y9',
    officePhone: '705-726-5538'
  },
  {
    slug: 'simcoe-grey',
    name: 'Simcoe—Grey',
    mpp: 'Brian Saunderson',
    mppSlug: 'brian-saunderson',
    party: 'Progressive Conservative',
    role: 'Minister of Sport',
    description: 'The largest geographic riding in southern Simcoe County, stretching across Southern Georgian Bay and southern Simcoe: Collingwood, Wasaga Beach, Clearview, Essa, New Tecumseth, and Adjala-Tosorontio.',
    municipalities: ['Collingwood', 'Wasaga Beach', 'Clearview', 'Essa', 'New Tecumseth', 'Adjala-Tosorontio', 'The Blue Mountains'],
    registeredVoters: 128450,
    recentElection: {
      title: '44th Ontario General Election',
      date: 'February 27, 2025',
      turnout: '44.53%',
      totalVotes: 57051,
      results: [
        { candidate: 'Brian Saunderson', party: 'Progressive Conservative', partyCode: 'PC', votes: 30572, percent: '53.59%', elected: true },
        { candidate: 'Ted Crysler', party: 'Ontario Liberal Party', partyCode: 'LIB', votes: 18507, percent: '32.44%', elected: false },
        { candidate: 'Benten Tinkler', party: 'Ontario NDP', partyCode: 'NDP', votes: 3264, percent: '5.72%', elected: false },
        { candidate: 'Allan Kuhn', party: 'Green Party of Ontario', partyCode: 'GRN', votes: 3154, percent: '5.53%', elected: false },
        { candidate: 'David Ghobrial', party: 'New Blue Party', partyCode: 'NB', votes: 1554, percent: '2.72%', elected: false },
      ]
    },
    officeAddress: '503 Hume Street, Unit 4, Collingwood, ON L9Y 4H8',
    officePhone: '705-445-5557'
  },
  {
    slug: 'simcoe-north',
    name: 'Simcoe North',
    mpp: 'Jill Dunlop',
    mppSlug: 'jill-dunlop',
    party: 'Progressive Conservative',
    role: 'Minister of Emergency Preparedness and Response',
    description: 'Encompasses northern Simcoe County including the City of Orillia, the towns of Midland and Penetanguishene, and the townships of Tay, Tiny, Severn, Ramara, and northern Oro-Medonte.',
    municipalities: ['Orillia', 'Midland', 'Penetanguishene', 'Tay', 'Tiny', 'Severn', 'Ramara', 'Oro-Medonte (North)'],
    registeredVoters: 104520,
    recentElection: {
      title: '44th Ontario General Election',
      date: 'February 27, 2025',
      turnout: '48.36%',
      totalVotes: 48365,
      results: [
        { candidate: 'Jill Dunlop', party: 'Progressive Conservative', partyCode: 'PC', votes: 24849, percent: '51.38%', elected: true },
        { candidate: 'Walter Alvarez-Bardales', party: 'Ontario Liberal Party', partyCode: 'LIB', votes: 13328, percent: '27.56%', elected: false },
        { candidate: 'Jordi Malcolm', party: 'Ontario NDP', partyCode: 'NDP', votes: 4813, percent: '9.95%', elected: false },
        { candidate: 'Chris Carr', party: 'Green Party of Ontario', partyCode: 'GRN', votes: 3214, percent: '6.65%', elected: false },
        { candidate: 'Dave Brunelle', party: 'New Blue Party', partyCode: 'NB', votes: 1582, percent: '3.27%', elected: false },
      ]
    },
    officeAddress: '575 West Street South, Unit 9, Orillia, ON L3V 5H4',
    officePhone: '705-326-0313'
  },
  {
    slug: 'york-simcoe',
    name: 'York—Simcoe',
    mpp: 'Susan Lahey',
    mppSlug: 'susan-lahey',
    party: 'Progressive Conservative',
    role: 'MPP for York—Simcoe (Elected Sept 2026)',
    description: 'Encompasses the Town of Bradford West Gwillimbury in Simcoe County, alongside the Town of Georgina and parts of East Gwillimbury in York Region. Succeeded Caroline Mulroney in a 2026 by-election.',
    municipalities: ['Bradford West Gwillimbury', 'Georgina', 'East Gwillimbury (North)'],
    registeredVoters: 91400,
    recentElection: {
      title: 'Provincial By-Election (Post-Mulroney Resignation)',
      date: 'September 3, 2026',
      turnout: '25.24%',
      totalVotes: 23070,
      results: [
        { candidate: 'Susan Lahey', party: 'Progressive Conservative', partyCode: 'PC', votes: 11491, percent: '49.81%', elected: true },
        { candidate: 'Naomi Davison', party: 'Ontario Liberal Party', partyCode: 'LIB', votes: 8942, percent: '38.76%', elected: false },
        { candidate: 'Bobby (Babak) Nikmard', party: 'Ontario NDP', partyCode: 'NDP', votes: 974, percent: '4.22%', elected: false },
        { candidate: 'Matt Pearce', party: 'Green Party of Ontario', partyCode: 'GRN', votes: 642, percent: '2.78%', elected: false },
        { candidate: 'Sean Conroy', party: 'Ontario Libertarian Party', partyCode: 'OTH', votes: 394, percent: '1.71%', elected: false },
      ]
    },
    officeAddress: '45 Grist Mill Road, Unit 8, Keswick, ON L4P 3E9',
    officePhone: '905-895-1555'
  }
];

export const MUNICIPALITY_RIDING_MAPPING: Record<string, { ridingSlug: string; ridingName: string; note?: string }> = {
  'adjala-tosorontio': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
  'barrie': { ridingSlug: 'barrie-innisfil', ridingName: 'Barrie—Innisfil & Barrie—Springwater—Oro-Medonte', note: 'Split riding: South of Tiffin St is Barrie—Innisfil; North is Barrie—Springwater—Oro-Medonte' },
  'bradford-west-gwillimbury': { ridingSlug: 'york-simcoe', ridingName: 'York—Simcoe' },
  'clearview': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
  'collingwood': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
  'essa': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
  'innisfil': { ridingSlug: 'barrie-innisfil', ridingName: 'Barrie—Innisfil' },
  'midland': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'new-tecumseth': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
  'orillia': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'oro-medonte': { ridingSlug: 'barrie-springwater-oro-medonte', ridingName: 'Barrie—Springwater—Oro-Medonte & Simcoe North', note: 'Split riding: West/South in Barrie—Springwater—Oro-Medonte; North/East in Simcoe North' },
  'penetanguishene': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'ramara': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'severn': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'springwater': { ridingSlug: 'barrie-springwater-oro-medonte', ridingName: 'Barrie—Springwater—Oro-Medonte' },
  'tay': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'tiny': { ridingSlug: 'simcoe-north', ridingName: 'Simcoe North' },
  'wasaga-beach': { ridingSlug: 'simcoe-grey', ridingName: 'Simcoe—Grey' },
};
