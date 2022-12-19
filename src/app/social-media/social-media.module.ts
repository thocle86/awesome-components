import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostService } from './services/post.service';
import { PostResolver } from './resolver/post.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ],
  providers: [
    PostService,
    PostResolver
  ]
})
export class SocialMediaModule { }
