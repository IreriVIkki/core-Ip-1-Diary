import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timepassed"
})
export class TimepassedPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;

    // this.days = parseInt(time / 86400);
    // this.hours = parseInt((time % 86400) / 3600);
    // this.minutes = parseInt(((time % 86400) % 3600) / 60);
    // this.seconds = parseInt(((100000 % 86400) % 3600) % 60);

    if (dateCounter >= 86400) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
