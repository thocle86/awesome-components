import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostResolver } from './resolver/post.resolver';

const routes: Routes = [
  { path: '', component: PostListComponent, resolve: { postList: PostResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
