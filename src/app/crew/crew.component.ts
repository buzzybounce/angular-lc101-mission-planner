import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  mouseOver: boolean = false;
  astronautPic: string = '';

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember (member: object) {

    if (this.crew.length < 3) {

      if (!this.crew.includes(member)) {

        member['inCrew'] = true;
        this.crew.push (member);

      }

      else {

        member['inCrew'] = false;
        let memberNumber = this.crew.indexOf(member);
        this.crew.splice(memberNumber, 1);

      }

    }

    else {

      if (this.crew.includes(member)) {

        member['inCrew'] = false;
        let memberNumber = this.crew.indexOf(member);
        this.crew.splice(memberNumber, 1);

      }

    }

  }

  mouseOverEvent(member: object) {

    this.mouseOver = true;
    this.astronautPic = member['photo'];

  }

  mouseOutEvent() {

    this.mouseOver = false;
    this.astronautPic = '';

  }

}
