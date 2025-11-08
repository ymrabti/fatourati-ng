import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../models/service.interface';

@Component({
  selector: 'fat-service-card',
  standalone: false,
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  @Input() service!: Service;
  @Input() categoryStyle: { [key: string]: string } = {};
  @Input() categoryLabel = '';

  @Output() visitService = new EventEmitter<string>();
  @Output() showBranches = new EventEmitter<Service>();

  onCardClick(): void {
    this.visitService.emit(this.service.url);
  }

  onShowBranches(event: Event): void {
    event.stopPropagation();
    this.showBranches.emit(this.service);
  }

  onImageError(event: any): void {
    event.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik00MCAyMEM0NiA4IDUzIDEwIDU4IDE1QzYzIDIwIDY1IDI3IDY1IDM1QzY1IDQzIDYzIDUwIDU4IDU1QzUzIDYwIDQ2IDYyIDQwIDYwQzM0IDYyIDI3IDYwIDIyIDU1QzE3IDUwIDE1IDQzIDE1IDM1QzE1IDI3IDE3IDIwIDIyIDE1QzI3IDEwIDM0IDggNDAgMjBaIiBmaWxsPSIjREREIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPC9zdmc+';
  }
}
