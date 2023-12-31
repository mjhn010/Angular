import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number = 10;
  serverStatus:String = "offline";
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getserverStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
