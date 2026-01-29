import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FooterComponent} from '../../components/footer-component/footer-component';
import {EditComponent} from '../../components/edit-component/edit-component';

@Component({
  selector: 'app-landing-page',
  imports: [
    FooterComponent,
    EditComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {

  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);

  from: string = '';
  to: string = '';

  editComponentIsVisible: Boolean = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'] || '';
      this.to = params['to'] || '';
    });
  }

  onEditValidate(data: {from: string, to: string}) {
    this.router.navigate(['/'], {
      queryParams: {
        from: data.from,
        to: data.to
      }
    });
    this.hideEditComponent();
  }

  showEditComponent() {
    this.editComponentIsVisible = true;
  }

  hideEditComponent() {
    this.editComponentIsVisible = false;
  }
}
