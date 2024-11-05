const dataPoints = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < dataPoints.length; i++) {
    total += dataPoints[i];    //10+20+30+40+50=150
}

const average = total / dataPoints.length;  // 150/5
console.log("Average:", average);  // Average: 30
