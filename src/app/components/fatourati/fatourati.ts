import { Component, OnInit } from '@angular/core';
import { FatouratiService } from '../../services/fatourati.service';
import { Service } from '../../models/service.interface';

@Component({
  selector: 'fat-fatourati',
  standalone: false,
  templateUrl: './fatourati.html',
  styleUrl: './fatourati.scss',
})
export class Fatourati implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  isLoading = true;
  currentView = 'grid';
  searchQuery = '';
  selectedCategory = '';
  selectedRegion = '';
  sortOrder = 'name-asc';
  selectedService: Service | null = null;
  totalServices = 0;
  currentYear = new Date().getFullYear();

  categoryLabels = {
    'water-electricity': 'Eau & Électricité',
    education: 'Éducation',
    business: 'Entreprises',
    fuel: 'Carburant',
    technology: 'Technologie',
  };

  categoryColors = {
    'water-electricity': '#3498db',
    education: '#e74c3c',
    business: '#2ecc71',
    fuel: '#f39c12',
    technology: '#9b59b6',
  };

  constructor(private fatouratiService: FatouratiService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    setTimeout(() => {
      this.services = this.fatouratiService.getAllServices();
      this.totalServices = this.services.length;
      this.isLoading = false;
      this.applyFilters();
    }, 1000);
  }

  applyFilters(): void {
    let filtered = [...this.services];

    // Search filter
    if (this.searchQuery) {
      const searchTerm = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm) ||
          service.description.toLowerCase().includes(searchTerm) ||
          service.region.toLowerCase().includes(searchTerm)
      );
    }

    // Category filter
    if (this.selectedCategory) {
      filtered = filtered.filter((service) => service.category === this.selectedCategory);
    }

    // Region filter
    if (this.selectedRegion) {
      filtered = filtered.filter((service) => service.region === this.selectedRegion);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (this.sortOrder) {
        case 'name-asc':
          return a.name.localeCompare(b.name, 'fr');
        case 'name-desc':
          return b.name.localeCompare(a.name, 'fr');
        case 'category':
          return a.category.localeCompare(b.category) || a.name.localeCompare(b.name, 'fr');
        default:
          return 0;
      }
    });

    this.filteredServices = filtered;
  }

  getCategoryLabel(category: string): string {
    return this.categoryLabels[category as keyof typeof this.categoryLabels] || category;
  }

  getCategoryStyle(category: string): { [key: string]: string } {
    const color = this.categoryColors[category as keyof typeof this.categoryColors] || '#95a5a6';
    return {
      'background-color': color + '20',
      color: color,
    };
  }

  setView(view: string): void {
    this.currentView = view;
  }

  visitService(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  showBranches(service: Service): void {
    this.selectedService = service;
  }

  closeModal(): void {
    this.selectedService = null;
  }

  onImageError(event: any): void {
    event.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik00MCAyMEM0NiA4IDUzIDEwIDU4IDE1QzYzIDIwIDY1IDI3IDY1IDM1QzY1IDQzIDYzIDUwIDU4IDU1QzUzIDYwIDQ2IDYyIDQwIDYwQzM0IDYyIDI3IDYwIDIyIDU1QzE3IDUwIDE1IDQzIDE1IDM1QzE1IDI3IDE3IDIwIDIyIDE1QzI3IDEwIDM0IDggNDAgMjBaIiBmaWxsPSIjREREIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
  }

  trackByServiceId(index: number, service: Service): number {
    return service.id;
  }
}
