import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../models/service.interface';

@Component({
  selector: 'fat-service-modal',
  standalone: false,
  templateUrl: './service-modal.html',
  styleUrl: './service-modal.scss',
})
export class ServiceModal {
  @Input() service!: Service;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onModalBackdropClick(): void {
    this.closeModal.emit();
  }

  onModalContentClick(event: Event): void {
    event.stopPropagation();
  }
}
