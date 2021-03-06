import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-driver',
  templateUrl: './ui-driver.component.html',
  styleUrls: ['./ui-driver.component.css']
})
export class UiDriverComponent implements OnInit {
  html = `// app.component.html
<header>
  <uiowa-header [externalLinks]="externalLinks"
    [applicationName]="applicationName"
    [internalRoutes]="internalRoutes">
  </uiowa-header>
</header>
<main class="container-fluid full-height">
  <router-outlet></router-outlet>
</main>
<footer>
  <app-footer></app-footer>
</footer>
  `;
  code = `// app.component.ts
import { InternalRoute, ExternalLink } from '@uiowa/uiowa-header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  externalLinks = [new ExternalLink('Employee Self Service', 'https://hris.uiowa.edu')];
  applicationName = 'Driver License Review System';
  internalRoutes =  [
    new InternalRoute('New Assignment', '/newassignment'),
    new InternalRoute('Driving Assignments', '/assignments'),
    new InternalRoute('DLRS Users', '/users'),
    new InternalRoute('Admin', '', [
      new InternalRoute('Pending Reviews', '/admin/pendingReviews'),
      new InternalRoute('Completed Reviews', '/admin/completedReviews'),
      new InternalRoute('', ''),
      new InternalRoute('Drivers Report', '/admin/driversReport'),
      new InternalRoute('Duplicate Drivers', '/admin/duplicateDrivers'),
      new InternalRoute('', ''),
      new InternalRoute('Invalid Route', '/admin/firstGrid'),
    ])
  ];
}`;

  code2 = ` // core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HawkidLoginService } from './services/hawkid-login.service';
import { UiowaHeaderModule, LoginService } from '@fbis/uiowa-header';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

@NgModule({
  imports: [CommonModule, UiowaHeaderModule],
  declarations: [AccessDeniedComponent],
  providers: [{ provide: LoginService, useClass: HawkidLoginService }],
  exports: [UiowaHeaderModule, AccessDeniedComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Core Module can only be imported to AppModule.');
    }
  }
}
`;

  h = false;
  t = false;
  constructor() {}

  ngOnInit() {}
}
