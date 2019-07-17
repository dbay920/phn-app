import { Injectable } from '@angular/core';
import { Frame } from 'tns-core-modules/ui/frame/frame';

@Injectable({
  providedIn: 'root'
})
export class ActionbarService {

  private frame:Frame;

  constructor() { }

  public registerPage(frame:Frame){
    this.frame =frame;
  }

  public showActionBar(){
    if(this.frame){
      this.frame.actionBarVisibility='always';      
    }
    
  }

  public hideActionBar(){
    if(this.frame){
        this.frame.actionBarVisibility='never';
    }

  }
}
