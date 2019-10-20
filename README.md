# js_web_workers
Experiments w web workers



### Web workers  
Initial vid: https://www.youtube.com/watch?v=EiPytIxrZtU

No access to DOM, window, parent? object (nothing that interacts with the web page)
Access to HTTP Request, navigator, location object, fetch, set timeout, set interval

To Create: worker = new Worker('web-worker.js')

Output (from WW) listening to events
Input (passing to WW) postMessage(‘my mesasage ‘)
