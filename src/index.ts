import * as request from 'request'

export class indexExample {
     getInfo(){
          let options: any = {
               headers: {
                    'User-Agent': 'request',
               }
          }
          request.get('http://localhost:3000', options, (err, res, body) => {
               console.log(body);
          })
     }
}
let ejemplo = new indexExample();
ejemplo.getInfo();