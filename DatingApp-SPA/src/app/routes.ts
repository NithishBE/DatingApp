import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-card/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path:  '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path:  'members', component: MemberListComponent, resolve: {users: MemberListResolver}, canActivate: [AuthGuard]},
            // tslint:disable-next-line: max-line-length
            {path: 'member/edit', component: MemberEditComponent,  canActivate: [AuthGuard] , resolve: {user: MemberEditResolver}, canDeactivate:[PreventUnsavedChanges]},
            {path:  'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}, canActivate: [AuthGuard]},
            {path:  'messages', component: MessagesComponent},
            {path:  'lists', component: ListsComponent},

        ]
    },
   
    {path:  '**', redirectTo: '', pathMatch: 'full'}
];
