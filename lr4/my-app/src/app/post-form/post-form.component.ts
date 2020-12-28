import {Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title=''
  text = ''
  titleSearching = ''
  styleToggle=false
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  @Output() titleSearch = new EventEmitter<string>()
  @ViewChild('myInputText',{static: false}) myinputText: ElementRef
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post : Post ={
        title: this.title,
        text: this.text
      }
      this.addPostUser.emit(post)
      this.text=''
      this.title=''

    }
  }
  onLoadDefault () {
    this.styleToggle=!this.styleToggle
    if(this.styleToggle) {
      this.myinputText.nativeElement.style.color = "red"
      this.myinputTitle.nativeElement.style.fontWeight = "bold"
        } else {
      this.myinputText.nativeElement.style.color = 'black'
      this.myinputTitle.nativeElement.style.fontWeight = "normal"
  
    }
  
    }

  

onChangeSearch(change: string) {
       this.titleSearch.emit(change)
}

  
}
