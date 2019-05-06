import {Component, Inject, Input, OnInit} from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import {LogoutService} from '../../../pages/commons/logout.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  exitTitle ="خروج";
  @Input() position = 'normal';
  baseUrl = `${environment.controllerUrl}Home`;
  user: any;

  userMenu = [ {   title: this.exitTitle }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService,
              private logoutService : LogoutService,
              private router: Router,
              @Inject(DOCUMENT) private document: any) {

    menuService.onItemClick().subscribe((mnu)=>{
      if (mnu.item.title === this.exitTitle) {
        this.logoutService.exit().subscribe();
        this.document.location.href = `${this.baseUrl}/GoToSts`;
      }
    });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'buySettings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  userClick(e) {
  }
}
