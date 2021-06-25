import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
   children: [
          {
            path: 'classic',
            children: [
              {
                path: '',
                loadChildren:() =>
                  import('../classic-mode/classic-mode.component').then(m=>m.ClassicModeComponent)
              }
            ]
          }
]
  }];
    // const routes: Routes = [
    //   {
    //     path: 'home',
    //     component: HomePage,
    //     children: [
    //       {
    //         path: 'classic',
    //         children: [
    //           {
    //             path: '',
    //             loadChildren:() =>
    //               import('../classic-mode/classic-mode.component').then(m=>m.ClassicModeComponent)
    //           }
    //         ]
    //       },
    //       // {
    //       //   path: 'scientific',
    //       //   children: [
    //       //     {
    //       //       path: '',
    //       //       loadChildren:() =>
    //       //         import('../scientific-mode/scientific-mode.component').then(m=>m.ScientificModeComponent)
    //       //     }
    //       //   ]
    //       // },
    //       // {
    //       //   path: 'scientific',
    //       //   children: [
    //       //     {
    //       //       path: '',
    //       //       loadChildren:() =>
    //       //         import('../programmer-mode/programmer-mode.component').then(m=>m.ProgrammerModeComponent)
    //       //     }
    //       //   ]
    //       // },
    //       {
    //         path: '',
    //         redirectTo: '/home/classic',
    //         pathMatch: 'full'
    //       }
    //   ]
    // };
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
