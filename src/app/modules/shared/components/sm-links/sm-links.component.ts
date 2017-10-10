import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'sm-links',
  templateUrl: './sm-links.component.html',
  styleUrls: ['./sm-links.component.css']
})
export class SocialMediaLinksComponent {

  ebay_logo_path: string;
  youtube_logo_path: string;
  twitch_logo_path: string;
  cardmarket_logo_path: string;
  facebook_logo_path: string;

  constructor() {
    this.ebay_logo_path = environment.assetsURI + '/assets/img/ebay-icon.svg';
    this.youtube_logo_path = environment.assetsURI + '/assets/img/youtube-icon.svg';
    this.twitch_logo_path = environment.assetsURI + '/assets/img/twitch-icon.svg';
    this.cardmarket_logo_path = environment.assetsURI + '/assets/img/cardmarket-icon.svg';
    this.facebook_logo_path = environment.assetsURI + '/assets/img/facebook-icon.svg';
  }

}
