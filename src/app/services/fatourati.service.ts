import { Injectable } from '@angular/core';
import { Service } from '../models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class FatouratiService {
  
  private services: Service[] = [
    // Water & Electricity Services - Zone ONEE
    {
      id: 1173,
      name: "SRM Beni Mellal-Khénifra (Zone Ex ONEE)",
      category: "water-electricity",
      region: "beni-mellal",
      logo: "https://www.fatourati.ma/upload/logos/1173.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1173&csrt=16503130070413675108",
      description: "Service régional de distribution d'eau et d'électricité"
    },
    {
      id: 1174,
      name: "SRM Draa-Tafilalt",
      category: "water-electricity",
      region: "draa-tafilalt",
      logo: "https://www.fatourati.ma/upload/logos/1174.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1174&csrt=16503130070413675108",
      description: "Service de distribution d'eau et d'électricité"
    },
    {
      id: 1168,
      name: "SRM Laayoune-Sakia El Hamra",
      category: "water-electricity",
      region: "laayoune",
      logo: "https://www.fatourati.ma/upload/logos/1168.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1168&csrt=16503130070413675108",
      description: "Service régional des provinces du Sud"
    },
    {
      id: 1169,
      name: "SRM Dakhla-Oued EdDahab",
      category: "water-electricity",
      region: "dakhla",
      logo: "https://www.fatourati.ma/upload/logos/1169.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1169&csrt=16503130070413675108",
      description: "Service de distribution pour la région de Dakhla"
    },
    {
      id: 1170,
      name: "SRM Guelmim-Oued Noun",
      category: "water-electricity",
      region: "guelmim",
      logo: "https://www.fatourati.ma/upload/logos/1170.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1170&csrt=16503130070413675108",
      description: "Service régional du Sud-Ouest"
    },
    {
      id: 1027,
      name: "Groupe Scolaire Yassamine",
      category: "education",
      region: "casablanca-settat",
      logo: "https://www.fatourati.ma/upload/logos/1027.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1027&csrt=16503130070413675108",
      description: "Réseau d'établissements scolaires privés",
      branches: [
        {
          name: "G.S. Yassamine",
          url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1027&csrt=16503130070413675108"
        },
        {
          name: "YASSAMINE OASIS",
          url: "/FatLite/ma/MTC/formulaire?cid=02&fid=1027&csrt=16503130070413675108"
        },
        {
          name: "YASSAMINE CALIFORNIE",
          url: "/FatLite/ma/MTC/formulaire?cid=03&fid=1027&csrt=16503130070413675108"
        },
        {
          name: "YASSAMINE SIDI MAAROUF",
          url: "/FatLite/ma/MTC/formulaire?cid=04&fid=1027&csrt=16503130070413675108"
        },
        {
          name: "YASSAMINE BERRECHID",
          url: "/FatLite/ma/MTC/formulaire?cid=05&fid=1027&csrt=16503130070413675108"
        }
      ]
    },
    {
      id: 1087,
      name: "CGEM - Confédération Générale des Entreprises du Maroc",
      category: "business",
      region: "national",
      logo: "https://www.fatourati.ma/upload/logos/1087.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1087&csrt=16503130070413675108",
      description: "Organisation patronale marocaine"
    },
    {
      id: 1088,
      name: "Shell Taqati - Carte Carburant",
      category: "fuel",
      region: "national",
      logo: "https://www.fatourati.ma/upload/logos/1088.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1088&csrt=16503130070413675108",
      description: "Recharge de carte carburant professionnelle"
    },
    {
      id: 1140,
      name: "Samsung Maroc",
      category: "technology",
      region: "national",
      logo: "https://www.fatourati.ma/upload/logos/1140.jpg",
      url: "/FatLite/ma/MTC/formulaire?cid=01&fid=1140&csrt=16503130070413675108",
      description: "Services Samsung au Maroc"
    }
  ];

  getAllServices(): Service[] {
    return [...this.services];
  }

  getServiceById(id: number): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  getServicesByCategory(category: string): Service[] {
    return this.services.filter(service => service.category === category);
  }

  getServicesByRegion(region: string): Service[] {
    return this.services.filter(service => service.region === region);
  }
}