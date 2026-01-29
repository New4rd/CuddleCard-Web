import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-landing-page',
  imports: [
    FooterComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);

  from: string = '';
  to: string = '';

  ngOnInit() {
    this.from = this.route.snapshot.queryParams['from'];
    this.to = this.route.snapshot.queryParams['to'];

    console.log('From:', this.from);
    console.log('To:', this.to);
  }
}
