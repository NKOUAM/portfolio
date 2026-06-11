import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-component',
  imports: [],
  templateUrl: './avatar-component.html',
  styleUrl: './avatar-component.css',
})
export class AvatarComponent {
  avatarUrl = 'https://picsum.photos/100/100?random=1';
  altText = 'Avatar utilisateur';

  protected changeAvatar() {

  }
}
