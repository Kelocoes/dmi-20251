setTimeout(() => {
    console.log("100ms")
}, 100)


function longRunningTask() {
    let count = 0;
    for (let i = 0; i < 1e10; i++) {
        count++;
    }
    console.log("Long task done!");
}

longRunningTask();