import { Routes, RouterModule } from '@angular/router';

import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginformComponent },
    { path: 'register', component: RegisterformComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);