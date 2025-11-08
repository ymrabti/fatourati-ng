import { Component, Input } from '@angular/core';

@Component({
  selector: 'fat-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() currentYear = new Date().getFullYear();
}
