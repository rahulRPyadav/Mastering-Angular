# 6ComponentMaking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


#Here are step by step process of making Component in Angular 16 Using Terminal 
**Step 1**
First all of Create An Angular  Project
**Step 2**
Now open Terminal in VS Code and Type `ng g c <ComponentName>`
after this a Component made inside app folder

# Here is Manual steps to create Component
**Step 1**
Create An Angular Project
**step 2**
Now open *app* folder and create a new folder in *app*
**step 3**
Now in that folder create this files: 
-<ComponentName>.component.html
-<ComponentName>.component.css
-<ComponentName>.compoenet.ts

**Step 4**
Now inside the <ComponentName>.component.ts write this:
`import { Component } from "@angular/core";
@Component({
    selector:"app-<ComponentName>",
    templateUrl:"./<ComponentName>.component.html",
    styleUrls:["./<ComponentName>.component.css"]
})
export class <ComponentName>Component{
    myname:string="..."
}`

**Step 5**
Now in app.module.ts
`import { <ComponentName>Component } from './<ComponentName>/<ComponentName.component';`
and also do this
`@NgModule({
  declarations: [
    AppComponent,
    <ComponentName>Component,
  ]`

**step 6**
Now in app.component.html:
use that component like this
`app-<ComponentName>`

All done









