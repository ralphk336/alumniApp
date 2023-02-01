import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-alumnus-menubar',
  templateUrl: './alumnus-menubar.component.html',
  styleUrls: ['./alumnus-menubar.component.css']
})
export class AlumnusMenubarComponent implements OnInit{
  items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
            {
                label : "Events",
                icon: PrimeIcons.CALENDAR,
                url: "subscribedEvents"
            },
            {
              label: "Sign out",
              icon : PrimeIcons.SIGN_OUT,
              url : "logout"
            }
        ];
    }
}
