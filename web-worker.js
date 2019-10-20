console.log(`WEB worker up: ${new Date()}\n`);

// self refers to this script / worker
// /
self.addEventListener('message', (ev)=>{
    console.log('\n\nWeb worker started with data: ', ev.data);
    console.log('Inside WW event handler.', ev);
    
    let data = ev.data;
    switch(data){
        case 'Operations HOT':
            // this message is picked up by workerMessaged - using 
            // worker.addEventListener('message', workerMessaged);  <  <  <  <
            // in main javascript                                              |
            self.postMessage('Web Worker Started'); // post message to self - triggers
            break;
        case 'Ping':
            self.postMessage('Ping reply...');
            break;
        //case 'fetch':
        //    let url = 'http://jsonplaceholder.typicode.com/posts';
        //    console.log('about to do the fetch for the data');
        //    
        //    fetch(url)
        //    .then(response=>response.json() )
        //    .then( data =>{
        //        self.postMessage( data );
        //    })
        //    .catch(err=>console.log(err));
        //    
        //    break;
        default:
            console.log(`Unexpected message: [${data}]`);
            // self.postMessage('Closing web worker');
            // self.close();
    }
    
})