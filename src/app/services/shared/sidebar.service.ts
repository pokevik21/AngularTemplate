import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menus: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenus: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/grafica1' }
      ]
    }
  ];

  constructor() { }
}
