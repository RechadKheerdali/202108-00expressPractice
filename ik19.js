/**
 * Javascript Scheduler queue - callstack / microtask / task
 */


function iKschedulerWork () {
    //Promise is place in the microtask queue within the callback
    Promise.resolve('1 - microtask: Promise.resolve').then(console.log)
    
    //setTimeout() is place to the task queue within the js callback queue
    setTimeout(() => console.log('2 - task: setTimeout'), 0)
    
    //Js will first execute microtask code before any task code within the local scope
    Promise.resolve('3 - microtask: Promise.resolve').then(console.log)
    
}

//function callback is place in the callstack (since it is synchronous) 
iKschedulerWork()
/*OP:
    '1 - microtask: Promise.resolve'
    '3 - microtask: Promise.resolve'
    '2 - task: setTimeout' */

/**
 * Js will check for three things, the first callstack, and then the callback queue which event loop handles the microtask and task order
 * iK There are two type of of web apis task (excluding http request task), microtask and task
     * iKBIM Microtask and task will than go the the callback queue to which event loop will handle the order it passes it to the callstack to be executed
 * Microtask will always take priority over task queue
 *  + Microtask will constantly be checked first by event loop after every code execution line (ahead of task queue within the web apis) and passes any microtask within its queue to the callstack
 *  +\ BIM Microtask and task will only be checked when the callstack is empty
 * 
 * Promise is define as microtask to js
 *  +iK? I think that include http request such as fetch()
 * setTimeout() is define as task queue to js
 */