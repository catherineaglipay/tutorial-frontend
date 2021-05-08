import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Layout1Component} from "./layout/layouts/layout-1/layout.component";
import {Layout2Component} from "./layout/layouts/layout-2/layout.component";


const routes: Routes = [
    {
        path: "",
        component: Layout1Component,
        children: [
            // Home
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadChildren: "./pages/home/home.module#HomeModule"
            },

            // Test Navigation
            {
                path: "test",
                loadChildren: "./pages/test/test.module#TestModule"
            },

            // Tables
            {
                path: "tables/html-table",
                loadChildren: "./pages/tables/html-table/html-table.module#HtmlTableModule"
            },
            {
                path: "tables/data-table",
                loadChildren: "./pages/tables/data-table/data-table.module#DataTableModule"
            }

        ]
    },
    {
        path: "",
        component: Layout2Component,
        children: [
            {
                path: "sample-pages/login",
                loadChildren: "./pages/sample-pages/login/login.module#LoginModule"
            },
            {
                path: "404",
                loadChildren: "./pages/sample-pages/four-zero-four/four-zero-four.module#FourZeroFourModule"
            },
            {
                path: "**",
                redirectTo: "/404"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
