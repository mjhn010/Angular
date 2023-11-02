import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
// [x: string]: any;
 allowNewServer = true;
 serverCreationStatus:String = 'No server was created';
 serverName = 'TestServers';
 serverCreated = false;
 servers = ['Testserver','Testserver2'];

  constructor(){
    // setTimeout(function(){//seTimeout이 실행되면서 this는
    //   //전역(window)을 가르치게됨. 아는내용인데 자꾸 까먹네 짜증나게 이것을 해결하려면 bind
    //   console.log(this)
    // },2000)
    setTimeout(()=>{//이것을 보완한게 ES6에서 =>(화살표)함수가 나옴
       this.allowNewServer = false;
      console.log(this)
      },2000)
  }

  ngOnInit() {

 }
 onCreateServer(){
   this.serverCreationStatus = 'server was created ! is Name'+this.serverName;
   this.servers.push(this.serverName);
  //  toggle easy
   this.serverCreated = !this.serverCreated
  // this,this.serverName = '';
 }
 onUpdateServerName(event: Event){
  // TypeScript문법으로는 event.target이 어떤 Element가 되는지
  //명시적으로 표현해줘야한다 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓이런식으로 해줘야
  //event의 target의 value값을 찾을수있다. 꼭기억할것 !
 this.serverName = (<HTMLInputElement>event.target).value
 console.log(this.serverName)
 }

}
