const dataPoints = [10, 20, 30, 40, 50];
let total = 0;
for (let point of dataPoints) {
    total += point;  //10+20+30+40+50=120
}
const average = total / dataPoints.length;  //150/5=30
console.log("Average:", average);
