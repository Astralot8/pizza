import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, Subject, from, map } from 'rxjs';
import { PopupComponent } from '../../../shared/components/popup/popup.component';

//import * as bootstrap from "bootstrap";
// declare var bootstrap: any; //обьявляем глобальную переменную

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements AfterViewInit {
  private observable: Observable<number>;
  private subscription: Subscription | null = null;
  private subject: Subject<number>;
  // private promise: Promise<string>;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;
  constructor(private modalService: NgbModal) {
    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('hello2');
    //   }, 2000);
    // });

    // this.observable = new Observable((observer: Subscriber<number>) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);

    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     },
    //   };
    // });

    this.observable = from([1, 2, 3, 4, 5]);

    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);
  }


  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent; 

  ngAfterViewInit(): void {

    this.popupComponent.open();
      // const modalRef = this.modalService.open(PopupComponent);
      // modalRef.componentInstance.data = 'World'

    //this.modalService.open(this.popup, {});
  }
  ngOnInit() {
    // const myModal = new bootstrap.Modal('#myModal', {});
    // myModal.show()
    // this.subscription = this.observable
    // // .pipe(
    // //   map((number: number) =>{
    // //     return number * 10;
    // //   })
    // // )
    // .subscribe({
    //   next: (param: number) => {
    //     console.log('subscriber 1', param);
    //   },
    //   error: (error: string) => {
    //     console.log('ERROR!!!' + error);
    //   },
    // });
    // this.promise.then((param: string) => {
    //   console.log(param);
    // })

    this.subscription = this.subject
      // .pipe(
      //   map((number: number) =>{
      //     return number * 10;
      //   })
      // )
      .subscribe({
        next: (param: number) => {
          console.log('subscriber 1', param);
        },
        error: (error: string) => {
          console.log('ERROR!!!' + error);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  test() {
    //this.modalService.open(popup, {});
    // this.observable
    // .pipe(
    //   map(number =>{
    //     return 'Число: ' + number;
    //   })
    // )
    // .subscribe((param: string) => {
    //   console.log('subscriber 2', param);
    // });
    this.subject
      .pipe(
        map((number) => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2', param);
      });
  }
}
