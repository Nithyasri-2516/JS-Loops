
const searchCourses = ['Java', 'python', 'C', 'TS'];
const searchItem = 'TS';
for (let courses of searchCourses) {
    if (courses === searchItem) {
        console.log("Course found:", courses);
        break; // Exit loop when item is found
    }
}

