import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer:boolean =true;

  constructor(){
    // setTimeout(function(){//seTimeout이 실행되면서 this는
    //   //전역(window)을 가르치게됨. 아는내용인데 자꾸 까먹네 짜증나게 이것을 해결하려면 bind
    //   console.log(this)
    // },2000)
    setTimeout(()=>{//이것을 보완한게 ES6에서 =>함수가 나옴
       this.allowNewServer = false;
      console.log(this)
      },2000)
  }

  ngOnInit() {

 }

}
