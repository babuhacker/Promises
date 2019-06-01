to unserstand promise , we start to 
synchronous and asynchronous:

synchronous:
               we can simplify the definition of synchronous code as “a bunch of statements in sequence". so each statement in your code is executed one after the other. This means each statement has to wait for the previous one to finish executing.

  console.log('First');
  console.log('Second');
  console.log('Third');

The statements above will execute in order, outputting “First”, “Second”, “Third” to the console. That’s because it’s written synchronously.

problem with synchronous way:
solution of synchronous problem : asynchronous callbacks 

Asynchronous:Asynchronous means that things can happen independently of the main program flow.


            // Say "Hello."
            console.log("Hello.");
            // Say "Goodbye" two seconds from now.
            setTimeout(function() {
              console.log("Goodbye!");
            }, 2000);
            // Say "Hello again!"
            console.log("Hello again!");
  If you are only familiar with synchronous code, you might expect the code above to behave in the following way:

                Say "Hello".
                Do nothing for two seconds.
                Say "Goodbye!"
                Say "Hello again!"      

But setTimeout does not pause the execution of the code. It only schedules something to happen in the future, and then immediately continues to the next line.

                Say "Hello."
                Say "Hello again!"
                Do nothing for two seconds.
                Say "Goodbye!"
 
 The problem with callbacks

Callbacks are great for simple cases!

However every callback adds a level of nesting, and when you have lots of callbacks, the code starts to be complicated very quickly:

        window.addEventListener('load', () => {
          document.getElementById('button').addEventListener('click', () => {
            setTimeout(() => {
              items.forEach(item => {
                //your code here
              })
            }, 2000)
          })
        })

This is just a simple 4-levels code, but I’ve seen much more levels of nesting and it’s not fun.

How do we solve this?
Alternatives to callbacks

Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks:

    Promises (ES2015)
    Async/Await (ES2017)





# Promises
Promises in javascript(topic of javascript/ES6)

A Promise object represents a value that may not be available yet, but will be resolved at some point in the future. It allows you to write asynchronous code in a more synchronous fashion. For example, if you use the promise API to make an asynchronous call to a remote web service, you will create a Promise object which represents the data that will be returned by the web service in future. The caveat is that the actual data isn’t available yet. It will become available when the request completes and a response comes back from the web service. In the meantime, the Promise object acts like a proxy to the actual data. Furthermore, you can attach callbacks to the Promise object, which will be called once the actual data is available.






promises a way to resolve asynchronous thing.

anonymous

difference between try-catch block and  .then .catch


promises may be in  one of three possible states:----------1)Fullfilled
                                                            2)Rejected
                                                            3)Pending

  
