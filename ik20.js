/**
 * Javascript Scheduler queue - callstack / microtask / task
 */


 function iKschedulerWork () {
     //placeing a microtask within a task queue
    setTimeout(() => {
        Promise.resolve('1 - task: setTimeout --> microtask: Promise.resolve')
            .then(console.log)
    }, 0)

    Promise.resolve('2 - microtask: Promise.resolve').then(console.log)
    
    setTimeout(() => console.log('3 - task: setTimeout'), 0)
    
    Promise.resolve('4 - microtask: Promise.resolve').then(console.log)

    //A microtask place within a task within a task
    setTimeout(() => {
        setTimeout(() => {
            Promise.resolve('5 - task: setTimeout --> task: setTimeout --> Promise.resolve')
                .then(console.log)
        }, 0)
    }, 0)
}

iKschedulerWork()
/*OP:
    '2 - microtask: Promise.resolve'
    '4 - microtask: Promise.resolve'
    '1 - task: setTimeout --> microtask: Promise.resolve'
    '3 - task: setTimeout'
    '5 - task: setTimeout --> task: setTimeout --> Promise resolve'  */

/**
 * 2 4 1 3 5
 */