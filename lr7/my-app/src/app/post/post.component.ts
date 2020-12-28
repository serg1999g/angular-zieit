import {
  Component,
  OnInit
} from '@angular/core'
import {
  ActivatedRoute
} from "@angular/router";
import {
  Post,
  PostsService
} from "../posts.service";

export class PostComponent implements OnInit {
  post: Post

  private readonly newProperty = this.router.params.subscribe((param) => {
    this.post = this.postS.getById(+param.id);
  });

  constructor(private router: ActivatedRoute,
    private postS: PostsService
  ) {}

  ngOnInit(): void {
    this.newProperty
    }
  }
