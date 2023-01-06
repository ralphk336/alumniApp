import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {
  //sources for images used on admin homepage and their associated pages
  
  membersImage='../../assets/group.png'
  membersPage='#'
  eventsImage='../../assets/calendar.png'
  eventsPage='#'
  announceImage='../../assets/announce.png'
  announcePage='#'
  reportsImage='../../assets/report.png'
  reportsPage='#'

  footerText='<div>&copy; 2022</div>'
}
