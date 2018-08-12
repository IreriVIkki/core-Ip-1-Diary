import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timepassed"
})
export class TimepassedPipe implements PipeTransform {
  transform(value: any): any {
    let today: any = new Date(); //get current date and time
    var dateDifference = Math.abs(value - today); // returns value in milliseconds

    var Seconds = dateDifference * 0.001; //converts to seconds

    var days = parseInt(Seconds / 86400 + "");
    var hours = parseInt((Seconds % 86400) / 3600 + "");
    var minutes = parseInt(((Seconds % 86400) % 3600) / 60 + "");
    var seconds = parseInt(Seconds + "");

    if (Seconds >= 86400) {
      return days + " days";
    } else if (Seconds < 86400 && Seconds >= 3600) {
      return hours + " hours ";
    } else if (Seconds < 3600 && Seconds >= 60) {
      return minutes + " minutes ";
    } else {
      return seconds + " seconds ";
    }
  }
}
