import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { AppComponent } from './app.component';
// @ts-ignore
import { CategoriesModule } from './categories/categories.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CategoriesModule // Import CategoriesModule here
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
