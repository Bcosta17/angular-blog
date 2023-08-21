import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuTitleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentRoute = this.router.url;
    console.log("teste")
		return currentRoute !== '/content';

  }
}