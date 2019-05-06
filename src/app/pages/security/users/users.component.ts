import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServerCollectionView} from '../../commons/server-collection-view-base';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserComponent} from './create-user/create-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ConfirmDeleteComponent} from '../../components/confirm-delete/confirm-delete.component';
import {UserService} from './services/user.service';
import {BaseNotifyComponent} from '../../commons/base-notify-component';
import {ToastrService} from 'ngx-toastr';
import {ValidateStateEnum} from '../../commons/validate-state-enum';
import {environment} from '../../../../environments/environment';
import {UserRoleService} from './services/user-role.service';
import {ValidationResult} from '../../commons/validation-result';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseNotifyComponent implements OnInit,AfterViewInit {

  view: ServerCollectionView;
  data: any;
  roles: ServerCollectionView;
  roleFilter : string ='';
  userFilter : string ='';

  @ViewChild('roleSearch') roleSearch: ElementRef;
  @ViewChild('userSearch') userSearch: ElementRef;

  constructor(private modalService: NgbModal,
              private userService: UserService,
              public toastr: ToastrService,
              private userRoleService : UserRoleService) {
    super(toastr);
  }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {

    fromEvent(this.roleSearch.nativeElement, 'keyup')
      .pipe(debounceTime(700),
        distinctUntilChanged(),
        tap(() => {
          debugger;
         this.loadRoles(this.view.currentItem.Id);
        })
      ).subscribe();

    fromEvent(this.userSearch.nativeElement, 'keyup')
      .pipe(debounceTime(700),
        distinctUntilChanged(),
        tap(() => {
          debugger;
          this.loadData();
        })
      ).subscribe();
  }

  loadData() {
    this.view = new ServerCollectionView(`${environment.apiUrl}SampleData/Get`, {
      pageSize: 12,
      filterDefinition: 'user eq ' + this.userFilter
    });
  }

  loadRoles(userId: string)
  {
    if(userId !== undefined) {
      this.roles = new ServerCollectionView(`${environment.apiUrl}UserRole`, {
        pageSize: 12,
        filterDefinition: 'userId eq ' + userId +' and title eq ' + this.roleFilter
      });
    }
  }

  addHandler() {
    const activeModal = this.modalService.open(CreateUserComponent, {size: 'lg', container: 'nb-layout'});

    activeModal.result.then((data) => {
      this.loadData();
    }, (reason) => {
    });
  }

  editHandler() {
    const activeModal = this.modalService.open(EditUserComponent, {size: 'lg', container: 'nb-layout'});
    activeModal.componentInstance.id = this.view.currentItem.Id;

    activeModal.result.then((data) => {
      this.loadData();
    }, (reason) => {
    });
  }

  deleteHandler() {
    const activeModal = this.modalService.open(ConfirmDeleteComponent, {size: 'sm', container: 'nb-layout'});
    activeModal.result.then((data) => {
      this.userService.delete(this.view.currentItem.Id).subscribe(res => {
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successDeleteNotify()
          this.loadData();
        } else {
          this.failDeleteNotifyMessage(res.SummeryMessage);
        }
      });
    }, (reason) => {
    });
  }

  selectionChanged(e) {
    this.loadRoles(this.view.currentItem.Id);
  }

  gridClickHandler(grd){
    debugger;
    let roleId = this.roles.currentItem.Id;
    let userId = this.view.currentItem.Id;
    let isSelected =  this.roles.currentItem.IsSelected;

    if(isSelected === true ) {
      this.userRoleService.post({Id: '', RoleId: roleId, UserId: userId}).subscribe((res: ValidationResult) => {
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successAddNotify();

        } else {
          this.failAddNotifyMessage(res.SummeryMessage);
        }
      });
    }
    else {
      if(this.roles.currentItem.UserRoleId === undefined)
      {
        debugger;
      }
      this.userRoleService.delete(roleId,userId).subscribe((res: ValidationResult) => {
        debugger;
        if (res.ValidateState === +ValidateStateEnum.Success) {
          this.successDeleteNotify();

        } else {
          this.failDeleteNotifyMessage(res.SummeryMessage);
        }
      });

    }
  }

}
