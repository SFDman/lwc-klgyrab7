import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Jojo's Current Onboarding Process";
  completion = 88
  Design_Schema;
  Message;

get statusSelector(){
  if(completion>=79){
    Design_Schema="ahead";
    Message="Jojo is ahead!"
  }

  else if(completion < 79 && completion > 70){
    Design_Schema="onpace";
    Message="Jojo is On Track!"
  }

  else{
    Design_Schema="behind";
    Message="Jojo is behind!"
  }

}

get status(){
  statusSelector(completion);
  

}




}
