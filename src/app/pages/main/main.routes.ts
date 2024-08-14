import { Route } from "@angular/router";
import { MainComponent } from "./main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { TicketManagementComponent } from "./ticket-management/ticket-management.component";


export default [
    {path:'',component:MainComponent,children:[
        {path:'',component:DashboardComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'user-management',component:UserManagementComponent},
        {path:'ticket-management',component:TicketManagementComponent},
    ]}

] as Route[];