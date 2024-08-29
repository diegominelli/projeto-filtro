import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/data/users-list';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
