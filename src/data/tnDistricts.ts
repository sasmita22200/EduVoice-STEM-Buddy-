import { SchoolRecord } from '../types';

export const TN_DISTRICTS = [
  'Ariyalur',
  'Chengalpattu',
  'Chennai',
  'Coimbatore',
  'Cuddalore',
  'Dharmapuri',
  'Dindigul',
  'Erode',
  'Kallakurichi',
  'Kanchipuram',
  'Kanyakumari',
  'Karur',
  'Krishnagiri',
  'Madurai',
  'Mayiladuthurai',
  'Nagapattinam',
  'Namakkal',
  'Nilgiris',
  'Perambalur',
  'Pudukkottai',
  'Ramanathapuram',
  'Ranipet',
  'Salem',
  'Sivaganga',
  'Tenkasi',
  'Thanjavur',
  'Theni',
  'Thoothukudi (Tuticorin)',
  'Tiruchirappalli (Trichy)',
  'Tirunelveli',
  'Tirupathur',
  'Tiruppur',
  'Tiruvallur',
  'Tiruvannamalai',
  'Tiruvarur',
  'Vellore',
  'Viluppuram',
  'Virudhunagar'
];

export const TN_SCHOOLS_DATABASE: SchoolRecord[] = [
  // Chennai
  {
    id: 'tn-chn-01',
    name: 'Govt Higher Secondary School, Anna Nagar',
    district: 'Chennai',
    city: 'Chennai',
    type: 'Govt Higher Secondary',
    address: '6th Avenue, Anna Nagar West, Chennai - 600040'
  },
  {
    id: 'tn-chn-02',
    name: 'St. Bedes Anglo Indian Higher Secondary School',
    district: 'Chennai',
    city: 'Santhome, Chennai',
    type: 'Matriculation Higher Secondary',
    address: 'No. 3, Santhome High Road, Mylapore, Chennai - 600004'
  },
  {
    id: 'tn-chn-03',
    name: 'Don Bosco Matriculation Higher Secondary School',
    district: 'Chennai',
    city: 'Egmore, Chennai',
    type: 'Matriculation Higher Secondary',
    address: '130, Casa Major Road, Egmore, Chennai - 600008'
  },
  {
    id: 'tn-chn-04',
    name: 'Govt Model Higher Secondary School, Triplicane',
    district: 'Chennai',
    city: 'Triplicane, Chennai',
    type: 'Govt Higher Secondary',
    address: 'Near Lady Willingdon Campus, Kamarajar Salai, Triplicane, Chennai - 600005'
  },
  {
    id: 'tn-chn-05',
    name: 'DAV Boys Senior Secondary School',
    district: 'Chennai',
    city: 'Gopalapuram, Chennai',
    type: 'CBSE / Private',
    address: '212, Lloyds Road, Gopalapuram, Chennai - 600086'
  },
  {
    id: 'tn-chn-06',
    name: 'Govt Higher Secondary School, Saidapet',
    district: 'Chennai',
    city: 'Saidapet, Chennai',
    type: 'Govt Higher Secondary',
    address: 'Jones Road, Saidapet, Chennai - 600015'
  },
  {
    id: 'tn-chn-07',
    name: 'SBOA Matriculation and Higher Secondary School',
    district: 'Chennai',
    city: 'Anna Nagar Western Extn, Chennai',
    type: 'Matriculation Higher Secondary',
    address: 'School Road, Anna Nagar Western Extn, Chennai - 600101'
  },
  {
    id: 'tn-chn-08',
    name: 'Kalaivani Matriculation Higher Secondary School',
    district: 'Chennai',
    city: 'Tambaram, Chennai',
    type: 'Matriculation Higher Secondary',
    address: 'GST Road, Tambaram Sanatorium, Chennai - 600047'
  },
  {
    id: 'tn-chn-09',
    name: 'Chennai Girls Higher Secondary School, Nungambakkam',
    district: 'Chennai',
    city: 'Nungambakkam, Chennai',
    type: 'Govt Higher Secondary',
    address: 'Rotary Nagar, Nungambakkam, Chennai - 600034'
  },

  // Coimbatore
  {
    id: 'tn-cbe-01',
    name: 'Govt Girls Higher Secondary School, RS Puram',
    district: 'Coimbatore',
    city: 'RS Puram, Coimbatore',
    type: 'Govt Higher Secondary',
    address: 'DB Road, RS Puram, Coimbatore - 641002'
  },
  {
    id: 'tn-cbe-02',
    name: 'St.anes Matriculation Higher Secondary School',
    district: 'Coimbatore',
    city: 'Gandhipuram, Coimbatore',
    type: 'Matriculation Higher Secondary',
    address: 'Cross Cut Road, Gandhipuram, Coimbatore - 641012'
  },
  {
    id: 'tn-cbe-03',
    name: 'Suburban Higher Secondary School',
    district: 'Coimbatore',
    city: 'Ramnagar, Coimbatore',
    type: 'Govt Aided',
    address: 'Kalyan Mills Road, Ramnagar, Coimbatore - 641009'
  },
  {
    id: 'tn-cbe-04',
    name: 'Carmel Garden Matriculation Higher Secondary School',
    district: 'Coimbatore',
    city: 'Red Fields, Coimbatore',
    type: 'Matriculation Higher Secondary',
    address: 'Puliakulam Road, Red Fields, Coimbatore - 641045'
  },

  // Madurai
  {
    id: 'tn-mdu-01',
    name: 'Govt Model Boys Higher Secondary School, Madurai Main',
    district: 'Madurai',
    city: 'Madurai',
    type: 'Govt Higher Secondary',
    address: 'West Masi Street, Madurai - 625001'
  },
  {
    id: 'tn-mdu-02',
    name: 'TVS Matriculation Higher Secondary School',
    district: 'Madurai',
    city: 'TV Nagar, Madurai',
    type: 'Matriculation Higher Secondary',
    address: 'Harveypatti, Thiruparankundram, Madurai - 625005'
  },
  {
    id: 'tn-mdu-03',
    name: 'Sourashtra Boys Higher Secondary School',
    district: 'Madurai',
    city: 'Madurai',
    type: 'Govt Aided',
    address: 'East Veli Street, Madurai - 625001'
  },
  {
    id: 'tn-mdu-04',
    name: 'St. Marys Higher Secondary School',
    district: 'Madurai',
    city: 'Madurai',
    type: 'Govt Aided',
    address: 'East Veli Street, Christian Mission Compound, Madurai - 625001'
  },

  // Tiruchirappalli
  {
    id: 'tn-try-01',
    name: 'Govt Higher Secondary School, Town Hall',
    district: 'Tiruchirappalli (Trichy)',
    city: 'Trichy',
    type: 'Govt Higher Secondary',
    address: 'Town Hall Main Road, Trichy - 620002'
  },
  {
    id: 'tn-try-02',
    name: 'Campian Anglo Indian Higher Secondary School',
    district: 'Tiruchirappalli (Trichy)',
    city: 'Cantonment, Trichy',
    type: 'Matriculation Higher Secondary',
    address: 'Convent Road, Cantonment, Tiruchirappalli - 620001'
  },
  {
    id: 'tn-try-03',
    name: 'St. Josephs Higher Secondary School',
    district: 'Tiruchirappalli (Trichy)',
    city: 'Singarathope, Trichy',
    type: 'Govt Aided',
    address: 'College Road, Chatram Bus Stand, Trichy - 620002'
  },

  // Salem
  {
    id: 'tn-slm-01',
    name: 'Govt Model Higher Secondary School, Fort',
    district: 'Salem',
    city: 'Salem',
    type: 'Govt Higher Secondary',
    address: 'Fort Main Road, Salem - 636001'
  },
  {
    id: 'tn-slm-02',
    name: 'Holy Angels Matriculation Higher Secondary School',
    district: 'Salem',
    city: 'Fairlands, Salem',
    type: 'Matriculation Higher Secondary',
    address: 'Brindavan Road, Fairlands, Salem - 636016'
  },
  {
    id: 'tn-slm-03',
    name: 'Gokulatha Hindu Vidyalaya Matriculation School',
    district: 'Salem',
    city: 'Ammapet, Salem',
    type: 'Matriculation',
    address: 'Military Road, Ammapet, Salem - 636003'
  },

  // Tirunelveli
  {
    id: 'tn-tvl-01',
    name: 'Govt Higher Secondary School, Palayamkottai',
    district: 'Tirunelveli',
    city: 'Palayamkottai',
    type: 'Govt Higher Secondary',
    address: 'St. Marks Road, Palayamkottai, Tirunelveli - 627002'
  },
  {
    id: 'tn-tvl-02',
    name: 'Rose Mary Matriculation Higher Secondary School',
    district: 'Tirunelveli',
    city: 'Palayamkottai',
    type: 'Matriculation Higher Secondary',
    address: 'High Ground, Palayamkottai, Tirunelveli - 627011'
  },
  {
    id: 'tn-tvl-03',
    name: 'Schaffter Higher Secondary School',
    district: 'Tirunelveli',
    city: 'Tirunelveli Town',
    type: 'Govt Aided',
    address: 'Swamy Sannathi Street, Tirunelveli Town - 627006'
  },

  // Vellore
  {
    id: 'tn-vel-01',
    name: 'Govt Muslim Higher Secondary School, Vellore',
    district: 'Vellore',
    city: 'Vellore',
    type: 'Govt Higher Secondary',
    address: 'Arni Road, Saidapet, Vellore - 632001'
  },
  {
    id: 'tn-vel-02',
    name: 'Don Bosco Matriculation Higher Secondary School, Katpadi',
    district: 'Vellore',
    city: 'Katpadi, Vellore',
    type: 'Matriculation Higher Secondary',
    address: 'Gandhi Nagar, Katpadi, Vellore - 632006'
  },

  // Thanjavur
  {
    id: 'tn-tnj-01',
    name: 'Govt Raja Mirasdar Higher Secondary School',
    district: 'Thanjavur',
    city: 'Thanjavur',
    type: 'Govt Higher Secondary',
    address: 'South Main Street, Old Bus Stand, Thanjavur - 613001'
  },
  {
    id: 'tn-tnj-02',
    name: 'St. Anthonys Matriculation Higher Secondary School',
    district: 'Thanjavur',
    city: 'Thanjavur',
    type: 'Matriculation Higher Secondary',
    address: 'Trichy Main Road, Thanjavur - 613007'
  },

  // Erode
  {
    id: 'tn-erd-01',
    name: 'Govt Model Higher Secondary School, Big Bazaar',
    district: 'Erode',
    city: 'Erode',
    type: 'Govt Higher Secondary',
    address: 'Big Bazaar Street, Erode - 638001'
  },
  {
    id: 'tn-erd-02',
    name: 'Bharathi Matriculation Higher Secondary School',
    district: 'Erode',
    city: 'Perundurai, Erode',
    type: 'Matriculation Higher Secondary',
    address: 'Kunnathur Road, Perundurai, Erode - 638052'
  },

  // Kanyakumari
  {
    id: 'tn-kny-01',
    name: 'Govt SLB Higher Secondary School, Nagercoil',
    district: 'Kanyakumari',
    city: 'Nagercoil',
    type: 'Govt Higher Secondary',
    address: 'Court Road, Nagercoil, Kanyakumari - 629001'
  },
  {
    id: 'tn-kny-02',
    name: 'Dolphin Matriculation Higher Secondary School',
    district: 'Kanyakumari',
    city: 'Kanyakumari',
    type: 'Matriculation Higher Secondary',
    address: 'Main Road, Marthandam, Kanyakumari - 629165'
  }
];

export const GOVT_SCHOOLS_SUGGESTIONS = TN_SCHOOLS_DATABASE.map(s => s.name);
