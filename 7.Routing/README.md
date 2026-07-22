*Angular 16 me Routing karna muje bahut easy laga jo main yaha save kr raha hu tabhi kbhi bhul jau to phir quickly revise kr saku*



Sabse phle to Angular project ready kro using `ng new <ProjectName>` .

phir multiple component banao using  `ng g c <ComponentName>`

phir us ke baad jo krna hai vo dekho:

`app-routing.module.ts` file ke inside hame routing set krni hai kuch aise hogi

sab se phle un component ko import krna hai jin ki rounting hame chahiye like.
```
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';


import { AboutComponent } from './about/about.component';


import { CoursesComponent } from './courses/courses.component';


import { GalleryComponent } from './gallery/gallery.component';


import { ContactComponent } from './contact/contact.component';



```

us ke baad const routes me ye karna hai.
```
const routes: Routes = [


    {path:'',component:HomeComponent},


  {path:'about', component:AboutComponent},


  {path:'home', component:HomeComponent},


  {path:'courses', component:CoursesComponent},


  {path:'gallery', component:GalleryComponent},


  {path:'contact', component:ContactComponent},


];

```

us ke baad `app.component.html` me <router-outlet> ke inside vo routing aa jayegi.

router-outlet ke upper or niche ham jo bhi component use krege vo static rahege.

or jin jin hi hamne routing ki hai vo router-outlet me change honge


