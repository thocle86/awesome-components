import { animate, animateChild, group, query, sequence, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/shared/models/comment.model';
import { flashAnimation } from '../../animations/flash.animation';
import { slideAndFadeAnimation } from '../../animations/slide-and-fade.animation';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@listItem', [
          stagger(100, [
            animateChild()
          ])
        ])
      ])
    ]),
    trigger('listItem', [
      state('default', style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1
      })),
      state('active', style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201, 157, 242)',
        'z-index': 2
      })),
      transition('default => active', [
        animate('100ms ease-in-out')
      ]),
      transition('active => default', [
        animate('500ms ease-in-out')
      ]),
      transition('void => *', [
        query('.comment-text, .comment-date', [style({ opacity: 0 })]),
        useAnimation(slideAndFadeAnimation, { params: { time: '250ms', startColor: 'rgb(201, 157, 242)', endColor: 'white' } }),
        group([
          useAnimation(flashAnimation, { params: { time: '250ms', startColor: 'rgb(201, 157, 242)', endColor: 'white' } }),
          query('.comment-text', [animate('250ms', style({ opacity: 1 }))]),
          query('.comment-date', [animate('500ms', style({ opacity: 1 }))]),
        ])
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {

  @Input() commentList!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  commentControl!: FormControl;

  animationStates: { [key: number]: 'default' | 'active' } = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentControl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
    for (let i in this.commentList) {
      this.animationStates[i] = 'default';
    }
  }

  onLeaveComment(): void {
    if (this.commentControl.invalid) {
      return;
    }
    const maxId = Math.max(...this.commentList.map(c => c.id));
    this.commentList.unshift({
      id: maxId + 1,
      userId: 1,
      comment: this.commentControl.value,
      createdDate: new Date().toISOString()
    });
    this.newComment.emit(this.commentControl.value);
    this.commentControl.reset();
  }

  onListItemMouseEnter(index: number) {
    this.animationStates[index] = 'active';
  }

  onListItemMouseLeave(index: number) {
    this.animationStates[index] = 'default';
  }

}
