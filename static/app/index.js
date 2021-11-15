define(function (require) {
   const css = require('require-css');
   //loading css
   css('./style')

   const App = () => {
       const el = document.createElement('div');
       el.setAttribute('class','App');
       
       
       return el;
   }

    document.body.appendChild(App());
});
