// I set charset as utf-8 
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
// method has to read what an user typed in the console 
        var input = process.stdin.read();
        if (input !== null) {
            var instruction = input.toString().trim();
           
            switch(instruction){
                case '/exit':    
                process.stdout.write('Quitting app! \n');
                console.log('your os language is ' +  process.env['lang']);
                console.log('your node version is ' + process.versions['node']);
                process.exit();
                
                case '/sayhello':
                process.stdout.write('hello \n');
                process.exit();
                break;

                case '/getOSinfo':
                var OSinfo = require('./modules/OSInfo');
                OSinfo.print();
                break;
               
                

                default:
                process.stderr.write('wrong command \n');
            }


               
        
    }
});





