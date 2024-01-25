/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class MyGateway {
    @SubscribeMessage('newMassage')
    onNewMessage(@MessageBody() body:any){
        console.log("why not comming");
        
        console.log(body);
        
    }
}