import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Fatourati } from './components/fatourati/fatourati';
import { EmptyState } from './components/empty-state/empty-state';
import { Footer } from './components/footer/footer';
import { Loading } from './components/loading/loading';
import { ServiceCard } from './components/service-card/service-card';
import { ServiceModal } from './components/service-modal/service-modal';
import { Stats } from './components/stats/stats';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [App, Fatourati, EmptyState, Footer, Loading, ServiceCard, ServiceModal, Stats],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideAnimationsAsync()],
  bootstrap: [App],
})
export class AppModule {}
