import {Component, signal} from '@angular/core';
import {UserProfile} from '../../../common/interfaces/interfaces';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-user-profile-component',
  imports: [
    NgClass
  ],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.scss',
})
export class UserProfileComponent {
  user = signal<UserProfile>({
    name: 'Laura Garcia',
    city: 'Valencia',
    isPremium: false,
  })

  changeCity() {
    this.user.update(currentUser => ({...currentUser, city: currentUser.city === 'Madrid' ? 'Valencia' : 'Madrid'}));
  }

  togglePremium() {                                                    //Aqui cambia el valor a true
    this.user.update(currentUser => ({...currentUser, isPremium: !currentUser.isPremium}))
  }
}
