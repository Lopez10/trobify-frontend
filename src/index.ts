import i18next from 'i18next';

i18next.init({
     lng:'en',
     debug:true,
     resources:{
          es:{
               translation:{
                    "key":"hola mundo"
               }
          },
          en:{
               translation:{
                    "key":"hello world"
               }
          }
     }
}).then(()=>{
     console.log(i18next.t('key'));
})

i18next.changeLanguage('es',(err,t)=>{
     if(err) return console.log("error");
     t('key');
})