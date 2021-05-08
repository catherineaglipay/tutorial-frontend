import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu: Array<any> = [
        {
            title: 'Dashboard',
            icon: 'home',
            route: '/home'
        },
        {
            title: 'Test',
            icon: 'home',
            route: '/test'
        },
        {
            title: 'Tables',
            icon: 'view-list',
            sub: [
                {
                    title: 'HTML Table',
                    route: '/tables/html-table'
                },
                {
                    title: 'Data Table',
                    route: '/tables/data-table'
                }
            ],
            visibility: 'inactive'
        },
        {
            title: 'Sample Pages',
            icon: 'collection-item',
            sub: [
                {
                    title: 'Login & SignUp',
                    route: '/sample-pages/login'
                },
                {
                    title: '404',
                    route: '/sample-pages/404'
                },
                {
                    title: 'Empty Page',
                    route: '/sample-pages/empty-page'
                }
            ],
            visibility: 'inactive'
        },
    ];

    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService) {
    }

    ngOnInit() {
    }

}
