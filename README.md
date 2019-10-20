# js_web_workers
Experiments w web workers



### Web workers  
Initial vid: https://www.youtube.com/watch?v=EiPytIxrZtU

No access to DOM, window, parent? object (nothing that interacts with the web page)
Access to HTTP Request, navigator, location object, fetch, set timeout, set interval

To Create: worker = new Worker('web-worker.js')

Output (from WW) listening to events
Input (passing to WW) postMessage(‘my mesasage ‘)


This doesn’t work in Chrome because of security permissions.
Fine in Firefox!

### Debugging service workers:
#### in Chrome
https://www.youtube.com/watch?v=tuRPSaSiK_c
#### in Friefox



### Web worker vs Service Workers vs Worklets
https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/

** have very little overlap in what they are used for!! **

Web Worker - Generic extra thread, purpose off load heavy work, free up main thread.

Service Worker - Proxy between browser & network / cache	
                 << This is what we need for Offline mode! >>

Worklet - Worklets are a very lightweight, highly specific, worker. 
          They enable hooking into various parts of the browser’s critical rendering path.
          https://bitsofco.de/understanding-the-critical-rendering-path/








TODO:
https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#serving_files_from_the_cache