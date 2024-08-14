import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-management',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatToolbarModule,FlexLayoutModule],
  templateUrl: './ticket-management.component.html',
  styleUrl: './ticket-management.component.css'
})
export class TicketManagementComponent {

}
