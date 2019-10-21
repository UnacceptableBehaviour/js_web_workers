# js_web_workers
Experiments with Web workers & Service Workers - Working offline


## Web workers  
Initial vid: https://www.youtube.com/watch?v=EiPytIxrZtU

No access to DOM, window, parent? object (nothing that interacts with the web page)
Access to HTTP Request, navigator, location object, fetch, set timeout, set interval

To Create: worker = new Worker('web-worker.js')

Output (from WW) listening to events
Input (passing to WW) postMessage(‘my mesasage ‘)


This doesn’t work in Chrome because of security permissions. (serve as http or local works fine!)
Fine in Firefox!

### Debugging service workers:
#### in Chrome
https://www.youtube.com/watch?v=tuRPSaSiK_c
#### in Firefox
https://www.youtube.com/watch?v=ranU2qe1JVA


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

#Gotchas
1. Most important fundamental gotcha - Serve as https or local NOT file (double click) or http  
https://stackoverflow.com/questions/39136625/service-worker-registration-failed  
$ cd into root dir and fire up a web server, here node is used but presumable any will do  
Serve w/ node (local):  
$ brew install node  					# I have an od bug with my node install fixed with brew reinstall node
$ http-server -p 8000					# view in browser @ http://127.0.0.1:8000/service-worker.html  

2. So the browser restarts the Service Worker code on clicking reload:
Go to the Application tab in devtools, going to the Service Workers section, and checking 'Update on reload'.

3. Read more here: https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9





TODO:
https://developers.google.com/web/fundamentals/primers/service-workers/registration
https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#serving_files_from_the_cache
https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp
	recommends
	https://developers.google.com/web/tools/workbox/

With Flask
https://www.reddit.com/r/PWA/comments/bmsed8/this_is_how_i_install_my_service_worker_using/

EG Flask PWA
```
$ cd repos
$ git clone https://github.com/uwi-info3180/flask-pwa
$ cd flask-pwa
$ pip install -r requirements.txt
$ python ./flask-pwa.py
```

One more EG
https://blog.formpl.us/a-simple-guide-to-taking-a-web-page-offline-using-service-workers-f4c42e7b4ada