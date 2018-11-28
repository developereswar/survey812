import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-typetest",
  templateUrl: "./typetest.component.html",
  styleUrls: ["./typetest.component.scss"]
})
export class TypetestComponent implements OnInit {
  public showmodal: boolean = false;
  public tmp = 2 * 60;
  public time = this.tmp;
  public timer: any;
  public comparetext: any;
  public timeout: boolean = true;
  public sec: string;
  public intervalInitiator: any;
  public message :any = { "ranking": 'knwe', "score": 12, "showReg": 12.12 };
  public text = 'Aesop was one of the great Greek writers. He is best known for his fables, stories that have a moral. They teach us something about how we should live our lives. Aesop wrote thousands of these stories. Here are a few.The Wolf in Sheep Clothing.Once upon a time, a Wolf decided to disguise the way he looked.He thought it would help him get food more easily.He put on the skin of a sheep, then he went out with the flock into the pasture.Even the shepherd was fooled by his clever costume.In the evening, the shepherd put him in with the rest of the sheep.He closed the gate and made sure it was secure before he went to bed.In the middle of the night, he came back to the fold to get some meat for the next day.Instead of a sheep, though, he grabbed the Wolf, killing him instantly.Those who look to harm others will be harmed themselves.The Bat and the Weasel.A Bat fell on the ground and was caught by a Weasel.It begged the Weasel to spare its life, but the Weasel refused.It told the Bat that birds, by nature, were its enemy.The Bat assured him that it was not a bird, it was a mouse.The Weasel thought a moment, then set it free.A while later, the Bat fell again to the ground, and it was caught by another Weasel.It begged this Weasel not to eat him, either.The Weasel, though, said it did not like mice at all and would eat it.The Bat told the Weasel that it was not a mouse, but a bat.The second Weasel had no good answer, so he let it go.The Bat knew it is always wise to turn events to your advantage.The Lion and the Mouse.A sleeping Lion was woken up by a Mouse running over his face.He got up angrily and caught the scared little Mouse.He was about to kill the Mouse, but it said in its squeaky little voice, "If you would only spare my life, I would be sure to repay your kindness." The Lion laughed at such nonsense, but he let him go.A short time later, though, the Lion was caught by some hunters.They bound him by ropes to the ground.The Mouse recognized his roar, and he rushed over and gnawed the rope with his teeth, setting the Lion free.The Mouse said "You laughed at the idea of my ever being able to help you. Now you know that it is possible for even a small little Mouse to help a great big Lion.';
  constructor(public router: Router) { }

  ngOnInit() { }

  intervalInitator() {
    this.intervalInitiator = setInterval(() => {
      this.loadingCount();
    }, 1000);
  }

  loadingCount() {

    var c = this.time--;
    var m = (c / 60) >> 0;
    var s = (c - m * 60) + '';
    console.log(m)
    if (c != 0) {

      this.sec = m + ':' + (s.length > 1 ? '' : '0') + s
    } else {
      this.showmodal = true;
      this.timeout = false;
      clearInterval(this.intervalInitiator);
      this.timeout = true;
    }
  }
  testfunc(e) {
    if ("start" === e) {
      this.timeout = false;
      this.intervalInitator();
    }
    if ("stop" === e) {
      this.submitTest();
      this.timeout = true;
      clearInterval(this.intervalInitiator);
    }
  }
  
  submitTest() {
    let len = this.text.split(" ").length;

    clearInterval(this.intervalInitiator);
    this.showmodal = true;
    if (this.comparetext == undefined) {
      this.showmodal = true;
      this.message.ranking = Math.floor(Math.random() * 0) + 0;
      this.message.score = 0;
      this.message.showReg = false;
    } else {
      let ans = this.comparetext.split(" ").length;
      if (ans <= 200 ) {
        this.message.ranking = Math.floor(Math.random() * 10) + 0;
        this.message.score = Math.floor(Math.random() * 60) + 50;
        this.message.showReg = true;
      } else {
        this.message.ranking = Math.floor(Math.random() * 20) + 30;
        this.message.score = Math.random() * 10 + 50;
        this.message.showReg = false;
      }

    }
  }
}
