import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], titleSearch: string): Post[] {
    if(!titleSearch.trim()) {
      return post
    } else {
      return post.filter(item=>{
        return item.title.toLowerCase().includes(titleSearch.toLowerCase())
      })
    }

  }

}

