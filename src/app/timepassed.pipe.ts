import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timepassed"
})
export class TimepassedPipe implements PipeTransform {
  transform(value: Array<any>): any {
    var dateDifference = Math.abs(value[0] - value[1]); // returns value in milliseconds

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

// import { Pipe, PipeTransform } from "@angular/core";

// @Pipe({
//   name: "timepassed"
// })
// export class TimepassedPipe implements PipeTransform {
//   transform(value: number): string {
//     var Seconds = value * 0.001; //converts to seconds

//     var days = parseInt(Seconds / 86400 + "");
//     var hours = parseInt((Seconds % 86400) / 3600 + "");
//     var minutes = parseInt(((Seconds % 86400) % 3600) / 60 + "");
//     var seconds = parseInt(Seconds + "");

//     if (Seconds >= 86400) {
//       return days + " days";
//     } else if (Seconds < 86400 && Seconds >= 3600) {
//       return hours + " hours ";
//     } else if (Seconds < 3600 && Seconds >= 60) {
//       return minutes + " minutes ";
//     } else {
//       return seconds + " seconds ";
//     }
//   }
// }
