import { Injectable } from '@angular/core';
import { Service } from '../models/service.interface';

@Injectable({
  providedIn: 'root',
})
export class FatouratiService {
  private services: Service[] = [
    // Water & Electricity Services - Zone ONEE
    {
      id: 1173,
      name: 'SRM Beni Mellal-Khénifra (Zone Ex ONEE)',
      category: 'water-electricity',
      region: 'beni-mellal',
      logo: 'https://www.fatourati.ma/upload/logos/1173.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1173&csrt=16503130070413675108',
      description: "Service régional de distribution d'eau et d'électricité",
    },
    {
      id: 1174,
      name: 'SRM Draa-Tafilalt',
      category: 'water-electricity',
      region: 'draa-tafilalt',
      logo: 'https://www.fatourati.ma/upload/logos/1174.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1174&csrt=16503130070413675108',
      description: "Service de distribution d'eau et d'électricité",
    },
    {
      id: 1168,
      name: 'SRM Laayoune-Sakia El Hamra',
      category: 'water-electricity',
      region: 'laayoune',
      logo: 'https://www.fatourati.ma/upload/logos/1168.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1168&csrt=16503130070413675108',
      description: 'Service régional des provinces du Sud',
    },
    {
      id: 1169,
      name: 'SRM Dakhla-Oued EdDahab',
      category: 'water-electricity',
      region: 'dakhla',
      logo: 'https://www.fatourati.ma/upload/logos/1169.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1169&csrt=16503130070413675108',
      description: 'Service de distribution pour la région de Dakhla',
    },
    {
      id: 1170,
      name: 'SRM Guelmim-Oued Noun',
      category: 'water-electricity',
      region: 'guelmim',
      logo: 'https://www.fatourati.ma/upload/logos/1170.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1170&csrt=16503130070413675108',
      description: 'Service régional du Sud-Ouest',
    },
    {
      id: 1171,
      name: 'SRM Tanger-Tetouan-Al Hoceima (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'tanger-tetouan',
      logo: 'https://www.fatourati.ma/upload/logos/1171.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1171&csrt=16503130070413675108',
      description: 'Service régional du Nord du Maroc',
    },
    {
      id: 1172,
      name: 'SRM Fès-Mèknes (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'fes-meknes',
      logo: 'https://www.fatourati.ma/upload/logos/1172.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1172&csrt=16503130070413675108',
      description: 'Service de distribution région centre',
    },
    {
      id: 1167,
      name: 'SRM Rabat-Salé-Kénitra (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'rabat-sale-kenitra',
      logo: 'https://www.fatourati.ma/upload/logos/1167.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1167&csrt=16503130070413675108',
      description: 'Service régional de la capitale',
    },
    {
      id: 1157,
      name: 'SRM Casablanca-Settat (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1157.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1157&csrt=16503130070413675108',
      description: 'Service régional économique du Maroc',
    },
    {
      id: 1156,
      name: 'SRM Souss-Massa (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'souss-massa',
      logo: 'https://www.fatourati.ma/upload/logos/1156.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1156&csrt=16503130070413675108',
      description: 'Service régional du Sud du Maroc',
    },
    {
      id: 1154,
      name: 'SRM Marrakech-Safi (Zone ex ONEE)',
      category: 'water-electricity',
      region: 'marrakech-safi',
      logo: 'https://www.fatourati.ma/upload/logos/1154.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1154&csrt=16503130070413675108',
      description: 'Service régional de Marrakech et environs',
    },
    {
      id: 1155,
      name: "SRM l'Oriental (Zone ex ONEE)",
      category: 'water-electricity',
      region: 'oriental',
      logo: 'https://www.fatourati.ma/upload/logos/1155.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1155&csrt=16503130070413675108',
      description: "Service régional de l'Est du Maroc",
    },
    {
      id: 1039,
      name: "ONEE - Paiement des factures d'électricité",
      category: 'water-electricity',
      region: 'national',
      logo: 'https://www.fatourati.ma/upload/logos/1039.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1039&csrt=16503130070413675108',
      description: 'Office national - Couverture nationale',
    },
    // Water & Electricity Services - Other Zones
    {
      id: 1016,
      name: 'SRM Rabat-Salé-Kénitra (Zone Ex RAK)',
      category: 'water-electricity',
      region: 'rabat-sale-kenitra',
      logo: 'https://www.fatourati.ma/upload/logos/1016.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1016&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1019,
      name: 'SRM Fès-Meknès (Zone Ex RADEM)',
      category: 'water-electricity',
      region: 'fes-meknes',
      logo: 'https://www.fatourati.ma/upload/logos/1019.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1019&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1014,
      name: 'SRM Fès-Meknès (Zone Ex RADEEF)',
      category: 'water-electricity',
      region: 'fes-meknes',
      logo: 'https://www.fatourati.ma/upload/logos/1014.jpg',
      url: '/FatLite/ma/Radeef/formulaire?cid=01&fid=1014&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1010,
      name: 'SRM Marrakech-Safi (Zone ex RADEEMA)',
      category: 'water-electricity',
      region: 'marrakech-safi',
      logo: 'https://www.fatourati.ma/upload/logos/1010.jpg',
      url: '/FatLite/ma/Radeema/formulaire?cid=01&fid=1010&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1015,
      name: 'SRM Souss-Massa (Zone ex RAMSA)',
      category: 'water-electricity',
      region: 'souss-massa',
      logo: 'https://www.fatourati.ma/upload/logos/1015.jpg',
      url: '/FatLite/ma/Ramsa/formulaire?cid=01&fid=1015&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1043,
      name: 'SRM Fès-Meknès (Zone Ex RADEETA)',
      category: 'water-electricity',
      region: 'fes-meknes',
      logo: 'https://www.fatourati.ma/upload/logos/1043.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1043&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1044,
      name: "SRM l'Oriental (Zone ex RADEEO)",
      category: 'water-electricity',
      region: 'oriental',
      logo: 'https://www.fatourati.ma/upload/logos/1044.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1044&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1045,
      name: 'SRM Marrakech-Safi (Zone ex RADEES)',
      category: 'water-electricity',
      region: 'marrakech-safi',
      logo: 'https://www.fatourati.ma/upload/logos/1045.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1045&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1040,
      name: 'SRM Tanger-Tetouan-Al Hoceima (Zone ex RADEEL)',
      category: 'water-electricity',
      region: 'tanger-tetouan',
      logo: 'https://www.fatourati.ma/upload/logos/1040.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1040&csrt=16503130070413675108',
      description: "Paiement des factures d'eau et d'électricité",
    },
    {
      id: 1020,
      name: 'SRM Casablanca-Settat (Zone ex RADEEC)',
      category: 'water-electricity',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1020.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1020&csrt=16503130070413675108',
      description: 'Service régional de distribution',
    },
    {
      id: 1041,
      name: 'SRM Béni Mellal-Khénifra (Zone ex RADEET)',
      category: 'water-electricity',
      region: 'beni-mellal',
      logo: 'https://www.fatourati.ma/upload/logos/1041.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1041&csrt=16503130070413675108',
      description: 'Service régional de distribution',
    },
    {
      id: 1060,
      name: 'SRM Casablanca-Settat (Zone ex RADEEJ)',
      category: 'water-electricity',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1060.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1060&csrt=16503130070413675108',
      description: 'Service régional de distribution',
    },
    // Education Services
    {
      id: 1021,
      name: 'Association Sportive Lycée Descartes',
      category: 'education',
      region: 'rabat-sale-kenitra',
      logo: 'https://www.fatourati.ma/upload/logos/1033.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1021&csrt=16503130070413675108',
      description: 'Association sportive éducative',
    },
    {
      id: 1033,
      name: 'EFMaroc - Examens de français',
      category: 'education',
      region: 'national',
      logo: 'https://www.fatourati.ma/FatLite/files/logos/ban_efmaroc.gif',
      url: '/FatLite/ma/MTC/formulaire?cid=02&fid=1033&csrt=16503130070413675108',
      description: 'Paiement des frais des examens EFMaroc',
    },
    {
      id: 1027,
      name: 'Groupe Scolaire Yassamine',
      category: 'education',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1027.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1027&csrt=16503130070413675108',
      description: "Réseau d'établissements scolaires privés",
      branches: [
        {
          name: 'G.S. Yassamine',
          url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1027&csrt=16503130070413675108',
        },
        {
          name: 'YASSAMINE OASIS',
          url: '/FatLite/ma/MTC/formulaire?cid=02&fid=1027&csrt=16503130070413675108',
        },
        {
          name: 'YASSAMINE CALIFORNIE',
          url: '/FatLite/ma/MTC/formulaire?cid=03&fid=1027&csrt=16503130070413675108',
        },
        {
          name: 'YASSAMINE SIDI MAAROUF',
          url: '/FatLite/ma/MTC/formulaire?cid=04&fid=1027&csrt=16503130070413675108',
        },
        {
          name: 'YASSAMINE BERRECHID',
          url: '/FatLite/ma/MTC/formulaire?cid=05&fid=1027&csrt=16503130070413675108',
        },
      ],
    },
    {
      id: 1053,
      name: 'École Al Jabr',
      category: 'education',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1053.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1053&csrt=16503130070413675108',
      description: 'Institution éducative privée',
      branches: [
        {
          name: 'Ecole Al Jabr',
          url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1053&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Al Jabr Junior',
          url: '/FatLite/ma/MTC/formulaire?cid=02&fid=1053&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Al Jabr Junior Oasis',
          url: '/FatLite/ma/MTC/formulaire?cid=03&fid=1053&csrt=16503130070413675108',
        },
      ],
    },
    {
      id: 1127,
      name: 'École Al Madina',
      category: 'education',
      region: 'casablanca-settat',
      logo: 'https://www.fatourati.ma/upload/logos/1127.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1127&csrt=16503130070413675108',
      description: "Réseau d'écoles privées",
      branches: [
        {
          name: 'Al Madina Californie',
          url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1127&csrt=16503130070413675108',
        },
        {
          name: 'Al Madina Polo',
          url: '/FatLite/ma/MTC/formulaire?cid=02&fid=1127&csrt=16503130070413675108',
        },
        {
          name: 'Al Madina Ain Sebaa',
          url: '/FatLite/ma/MTC/formulaire?cid=03&fid=1127&csrt=16503130070413675108',
        },
      ],
    },
    {
      id: 1117,
      name: 'Réseau Éducatif Catholique',
      category: 'education',
      region: 'national',
      logo: 'https://www.fatourati.ma/upload/logos/1117.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1117&csrt=16503130070413675108',
      description: 'Institutions éducatives catholiques',
      branches: [
        {
          name: "Institution Jeanne d'Arc Rabat",
          url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Ecole la Saadia',
          url: '/FatLite/ma/MTC/formulaire?cid=02&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Notre Dame de la Paix',
          url: '/FatLite/ma/MTC/formulaire?cid=03&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Saint Gabriel',
          url: '/FatLite/ma/MTC/formulaire?cid=04&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Don Bosco',
          url: '/FatLite/ma/MTC/formulaire?cid=05&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Le Nid Familial',
          url: '/FatLite/ma/MTC/formulaire?cid=06&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Charles de Foucauld',
          url: '/FatLite/ma/MTC/formulaire?cid=07&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Carmel Saint Joseph',
          url: '/FatLite/ma/MTC/formulaire?cid=08&fid=1117&csrt=16503130070413675108',
        },
        {
          name: "Maison d'Anfa",
          url: '/FatLite/ma/MTC/formulaire?cid=09&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Institut Saint Dominique',
          url: '/FatLite/ma/MTC/formulaire?cid=10&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Institut Sainte famille',
          url: '/FatLite/ma/MTC/formulaire?cid=11&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Notre Dame Ain Sebaa',
          url: '/FatLite/ma/MTC/formulaire?cid=12&fid=1117&csrt=16503130070413675108',
        },
        {
          name: 'Ecole Notre Dame De Meknes',
          url: '/FatLite/ma/MTC/formulaire?cid=13&fid=1117&csrt=16503130070413675108',
        },
      ],
    },
    // Business Services
    {
      id: 1087,
      name: 'CGEM - Confédération Générale des Entreprises du Maroc',
      category: 'business',
      region: 'national',
      logo: 'https://www.fatourati.ma/upload/logos/1087.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1087&csrt=16503130070413675108',
      description: 'Organisation patronale marocaine',
    },
    // Fuel Services
    {
      id: 1088,
      name: 'Shell Taqati - Carte Carburant',
      category: 'fuel',
      region: 'national',
      logo: 'https://www.fatourati.ma/upload/logos/1088.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1088&csrt=16503130070413675108',
      description: 'Recharge de carte carburant professionnelle',
    },
    // Technology Services
    {
      id: 1140,
      name: 'Samsung Maroc',
      category: 'technology',
      region: 'national',
      logo: 'https://www.fatourati.ma/upload/logos/1140.jpg',
      url: '/FatLite/ma/MTC/formulaire?cid=01&fid=1140&csrt=16503130070413675108',
      description: 'Services Samsung au Maroc',
    },
  ];

  getAllServices(): Service[] {
    return [...this.services];
  }

  getServiceById(id: number): Service | undefined {
    return this.services.find((service) => service.id === id);
  }

  getServicesByCategory(category: string): Service[] {
    return this.services.filter((service) => service.category === category);
  }

  getServicesByRegion(region: string): Service[] {
    return this.services.filter((service) => service.region === region);
  }
}