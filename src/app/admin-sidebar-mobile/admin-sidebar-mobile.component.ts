import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-admin-sidebar-mobile',
  templateUrl: './admin-sidebar-mobile.component.html',
  styleUrls: ['./admin-sidebar-mobile.component.css']
})
export class AdminSidebarMobileComponent implements OnInit{
  //initially presume desktop display, don't show hamburger menu
  //will be altered once the screen size is determined
  hideSidebarMobile=true;
  hamburgerImage='../../assets/Hamburger_icon.svg'
  hideHamburger=true;

  constructor(
    //observer will report changes to the display size
    private breakpointObserver: BreakpointObserver
  ){

  }

  ngOnInit(){
    console.log(Breakpoints)
    //get notified in case of change of display size
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Tablet,Breakpoints.Web]).subscribe(result=>{
      const breakpoints=result.breakpoints;
      this.hideHamburger=true;
      console.log(breakpoints[Breakpoints.HandsetPortrait])
      //if the display is a tablet or mobile phone
      if(breakpoints[Breakpoints.HandsetPortrait]||breakpoints[Breakpoints.HandsetLandscape]||breakpoints[Breakpoints.TabletPortrait]||breakpoints[Breakpoints.TabletLandscape]){
        console.log("This is a handheld device")
        //show the hamburger menu for smaller displays
        this.hideHamburger=false;
      }
      //hide the sidebar on screen resize
      this.hideSidebarMobile=true;

    })
  }
  showSidebar(){
    if(this.hideSidebarMobile){
    console.log("Showing the sidebar")
    }else{
      console.log("Hiding the sidebar")
    }
    //toggle on or off
    this.hideSidebarMobile=!this.hideSidebarMobile
  }
}
