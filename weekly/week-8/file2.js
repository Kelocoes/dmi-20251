function longRunningTask() {
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
        count++;
    }
    console.log("Long task done!");
}

function importantTask() {
    console.log("Important task!");
}

longRunningTask();
importantTask();


/*
Examples of long running tasks include:
fetch("...")
    .then(res => ...)

const [fileHandle] = await window.showOpenFilePicker();
const file = await fileHandle.getFile();

const request = indexedDB.open("test");
request.onsuccess = event => {
    console.log(event)
}
request.onerror = error => {
    console.log(error)
}

setTimeout(() => {
    console.log("Timeout done!")
}, 1000)
*/