// warning!

function function1() {
    return new Promise((resolve, reject) => {
        console.log("Function 1 started");
        // Выполнение асинхронной работы, например, setTimeout
        setTimeout(() => {
            console.log("Function 1 completed");
            resolve();
        }, 1000);
    }).then(function2);
}

function function2() {
    return new Promise((resolve, reject) => {
        console.log("Function 2 started");
        // Выполнение асинхронной работы, например, setTimeout
        setTimeout(() => {
            console.log("Function 2 completed");
            resolve();
        }, 1000);
    }).then(function1);
}

// Начинаем выполнение функции 1
function run() {
    function1().catch((error) => {
        console.error("Error:", error);
    });
}