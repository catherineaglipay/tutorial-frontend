import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Default theme
  maTheme: string = 'green';

  // Mobile sidebar state
  mobileSidebarActive: boolean = false;

  // Todolists
  todoLists: Array<any> = [
    {
      title: 'Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor',
      cap: 'F',
      color: 'red',
      date: 'Today at 8.30 AM',
      tags: [
        'Messages'
      ],
      priority: '!!!'
    },
    {
      title: 'Nullam id dolor id nibh ultricies vehicula ut id elit',
      cap: 'N',
      color: 'light-blue',
      date: 'Today at 12.30 PM',
      tags: [
        'Clients'
      ],
      priority: '!!'
    },
    {
      title: 'Cras mattis consectetur purus sit amet fermentum',
      cap: 'C',
      color: 'amber',
      date: 'Tomorrow at 10.30 AM',
      tags: [
        'Clients'
      ],
      priority: '!!'
    },
    {
      title: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
      cap: 'I',
      color: 'lime',
      date: '05/08/2017 at 08.00 AM',
      tags: [
        'Server',
        'Issue'
      ],
      priority: '!'
    },
    {
      title: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum',
      cap: 'M',
      color: 'green',
      date: '10/08/2016 at 04.00 AM',
      tags: [
        'Server'
      ],
      priority: '!!!'
    },
    {
      title: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
      cap: 'I',
      color: 'teal',
      date: '05/08/2017 at 08.00 AM',
      tags: [
        'Server'
      ],
      priority: '!'
    },
    {
      title: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et',
      cap: 'D',
      color: 'purple',
      date: '10/08/2016 at 09.20 AM',
      tags: [
        'server'
      ],
      priority: '!!!'
    },
    {
      title: 'Praesent commodo cursus magnavel scelerisque nisl consectetur',
      cap: 'P',
      color: 'pink',
      date: '10/08/2016 at 04.00 AM',
      tags: [
        'Server', 'Severe', 'Bug'
      ],
      priority: '!!!'
    },
    {
      title: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      cap: 'A',
      color: 'cyan',
      date: '15/08/2016 at 10.22 PM',
      tags: [
        'Messages'
      ],
      priority: '!!'
    }
  ];
  todoListActions: Array<any> = [
    'Mark as completed',
    'Delete'
  ];
}
