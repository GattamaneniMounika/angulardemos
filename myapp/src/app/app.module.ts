import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'server', component: ServerComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'numbers', component: NumbersComponent },
    { path: 'observables', component: ObservablesComponent },
    { path: 'tforms', component: TformsComponent },
    { path: 'rforms', component: RformsComponent },


];



@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ProductsComponent,



        NumbersComponent,
        BasicHighlightDirective,
        HomeComponent,
        ObservablesComponent,
        TformsComponent,
        RformsComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,


    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule { }