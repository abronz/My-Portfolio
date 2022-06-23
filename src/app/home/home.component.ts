import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutme1: String = "";
  aboutme2: String = "";
  aboutme3: String = "";

  constructor() { }

  ngOnInit() {
  }

  aboutClicked() {
    this.aboutme1 = "I am a Computer Programming graduate from Seneca College in Toronto."
    this.aboutme2 = "I am currently looking to expand my knowledge as a website developer with more plans in the future."
    this.aboutme3 = "I love technology and I am a gamer."
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth' , block: 'center'})
  }
}
