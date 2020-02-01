import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
        userData: UserDataResolver
    },
    children: [
        {
        path: 'feed',
        loadChildren: () =>
            import('../pages/feed/feed.module').then(
                m => m.FeedPageModule
                )
            },
            {
                path: 'foto',
                loadChildren: () =>
                    import('../pages/foto/foto.module').then(
                        m => m.FotoPageModule
                        )
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('../pages/settings/settings.module').then(
                        m => m.SettingsPageModule
                        )
                    },
                    {
                        path: 'favoritos',
                        loadChildren: () =>
                            import('../pages/favoritos/favoritos.module').then(
                                m => m.FavoritosPageModule
                                )
                            },
                            {
                                path: '',
                                redirectTo: '/home/feed',
                                pathMatch: 'full'
                                    }
        ]
  }];
@core.NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRouter {}
