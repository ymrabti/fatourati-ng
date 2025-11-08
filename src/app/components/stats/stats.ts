import { Component, Input } from '@angular/core';

@Component({
  selector: 'fat-stats',
  standalone: false,
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  @Input() totalServices = 0;
  @Input() filteredServices = 0;
}