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
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Gráficas', url: '/dashboard/grafica1' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'Rxjs', url: '/dashboard/rxjs' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icon: 'mdi mdi-folder-lock-open',
      submenus: [
        { titulo: 'Usuarios', url: '/dashboard/usuarios' },
        { titulo: 'Hospitales', url: '/dashboard/progress' },
        { titulo: 'Médicos', url: '/dashboard/grafica1' }
      ]
    }
  ];

  constructor() { }
}
