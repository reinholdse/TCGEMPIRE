import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const navItemAnimationFlashy = trigger('navItemAnimationFlashy', [
  state('void', style({
    boxShadow: '0 0 0px rgba(0,0,0,.1)'
  })),
  state('hover', style({
    boxShadow: '0 0 10px rgba(0,0,0,.1)'
  })),
  state('clicked', style({
    backgroundColor: 'rgba(56,174,232,.5)',
    color: 'white'
  })),
  transition('void <=> hover', animate('100ms ease-in-out')),
  transition('* => clicked', animate('100ms ease-in'))
]);

export const navItemAnimation = trigger('navItemAnimation', [
  state('void', style({
    color: '#95989A'
  })),
  state('hover', style({
    color: '#38AEE8'
  })),
  transition('void <=> hover', animate('100ms ease-in-out'))
]);
