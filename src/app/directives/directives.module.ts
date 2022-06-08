import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectiveComponent } from './directive.component';
import { AddressDirective } from './ng-directive/address-format.directive';

@NgModule({
  declarations: [DirectiveComponent, AddressDirective],
  imports: [CommonModule, DirectivesRoutingModule],
})
export class DirectivesModule {}
