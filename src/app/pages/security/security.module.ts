import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {entryRouteComponents, SecurityRouteComponent, SecurityRoutingModule} from './security-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { ReactiveFormsModule} from '@angular/forms';
import {TablesModule} from '../tables/tables.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ToasterModule} from 'angular2-toaster';
import {NgSelectModule} from '@ng-select/ng-select';
import {NbSelectModule} from '@nebular/theme';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import { WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjGridFilterModule} from 'wijmo/wijmo.angular2.grid.filter';
import {WjGridGrouppanelModule} from 'wijmo/wijmo.angular2.grid.grouppanel';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    TablesModule,
    Ng2SmartTableModule,
    ToasterModule.forRoot(),
    NgSelectModule,
    NbSelectModule,
    WjInputModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridGrouppanelModule,
  ],
  declarations: [
    ...SecurityRouteComponent
  ],
  entryComponents:[
    ...entryRouteComponents
  ]
})
export class SecurityModule { }
