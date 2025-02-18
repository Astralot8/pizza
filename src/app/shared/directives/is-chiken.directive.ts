import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[isChiken]',
  standalone: false
})
export class IsChikenDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()

  isChiken: string='';
  ngOnInit(){
    if(this.isChiken.toLocaleLowerCase().includes('кур')){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  // set isChiken(description: string){
  //   if(description.toLocaleLowerCase().includes('кур')){
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

}
