import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-admin-menubar',
  templateUrl: './admin-menubar.component.html',
  styleUrls: ['./admin-menubar.component.css']
})
export class AdminMenubarComponent implements OnInit{
  items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
            {
                label : "Events",
                icon: PrimeIcons.CALENDAR,
                items : [
                    {
                        label : "All Events",
                        icon : PrimeIcons.LIST,
                        url : "#"
                    },
                    {
                        label : "New Event",
                        icon : PrimeIcons.PLUS,
                        url : "#"
                    }
                    
                ]
            },
            {
                label : "Alumni",
                icon : PrimeIcons.USER,
                items : [
                    {
                        label: "All Alumni",
                        icon : PrimeIcons.LIST,
                        url : "allAlumni"
                    },
                    {
                        label: "Alumni Between",
                        icon : PrimeIcons.SEARCH,
                        url : "alumniBetween"
                    }
                ]
            },
            {
                label: "Announce",
                icon : PrimeIcons.MEGAPHONE,
                url : "#"
            }
            ,
            {
                label: "Customize",
                icon : PrimeIcons.IMAGE,
                url:"customize"
              }
            ,
            {
              label: "Sign out",
              icon : PrimeIcons.SIGN_OUT
            }
        ];
    }
}
