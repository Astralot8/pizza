import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../../../shared/components/popup/popup.component';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  constructor(private modalService: NgbModal) {}
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    this.popupComponent.open();
    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'World'

    //this.modalService.open(this.popup, {});
  }

  // ngAfterViewInit(): void {
  //   const modalRef = this.modalService.open(PopupComponent);
  //   modalRef.componentInstance.data = 'World';

  //   //this.modalService.open(this.popup, {});
  // }
}
