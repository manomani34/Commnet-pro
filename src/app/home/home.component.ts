import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICommnet } from '../commnet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked{

  comments: ICommnet[] = [];

  constructor() {
    /*console.log("constructor Called!")*/
   }  

  @ViewChild('commenttxt') comm: ElementRef;

  ngOnInit(): void {
    console.log("ngOnInit Called!")
  }

 ngDoCheck(){
  console.log("ngDoCheck Called!")
 }
  
 ngAfterContentInit(): void {
  console.log("ngAfterContentInit Called!")
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked Called!")
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit Called!")
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked Called!")
}
  addCommnet(){
    let c: ICommnet = {
      comment: this.comm.nativeElement.value,
      dislike: 0,
      like: 0,
      numberOfReviews: 0,
      star: 0

    }
    this.comments.push(c);
  }
  reviewsCount(c: ICommnet , n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }
  commentLike(c: ICommnet){
    c.like++;
  }
  commentDislike(c: ICommnet){
    c.dislike++;
  } 

}
