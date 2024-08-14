import { Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    
    {path:'',component:LoginSignupComponent},
    {path:'main',loadChildren:()=>import('./pages/main/main.routes')}
];
