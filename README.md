# js_web_workers
Experiments with Web workers & Service Workers - Working offline


## Web workers  
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
#### in Firefox



## Web worker vs Service Workers vs Worklets
https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/

** They have very little overlap in what they are used for!! **

Web Worker - Generic extra thread, purpose off load heavy work, free up main thread.

Service Worker - Proxy between browser & network / cache	
                 << This is what we need for Offline mode! >>

Worklet - Worklets are a very lightweight, highly specific, worker. 
          They enable hooking into various parts of the browser’s critical rendering path.
          https://bitsofco.de/understanding-the-critical-rendering-path/



## SERVICE WORKERS
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

Gotchas
https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9

More important fundamental gotchas - only in https or local NOT file or http
https://stackoverflow.com/questions/39136625/service-worker-registration-failed
serve w/ node (local)
http-server -p 8000					#
http://127.0.0.1:8000




TODO:
https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#serving_files_from_the_cache