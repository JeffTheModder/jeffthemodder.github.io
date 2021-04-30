/*VERSION:0.39.6*/

window._utils = {};
window._utils.requirelib = async function(url, global){
  return new Promise(async function(resolve){
    async function getCode(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
    }
    let code = await getCode();

    if (global){
      code += 'window["' + global + '"] = ' + global + ';';
    }
    let evaluateCode = new Function(code);
    evaluateCode();
    resolve('done');
  });
};

window._utils.requirelib('https://unpkg.com/guify@0.12.0/lib/guify.min.js').then(() => { 
  window.hack.loadGui();
});

let codeVersion = "0.39.6";
let gameVersion = window.version;
if (codeVersion != gameVersion){
  alert(`JeffWare Code Version does not match ShellShockers current version.
Expect bugs!

JeffWare may need to be updated by Jeff.
JeffWare update will automatically be applied when it is updated.
No download is required when JeffWare is updated.

JeffWare Version: ${codeVersion}
Game Version: ${gameVersion}`);
}

window.hack = {
  loadGui: ()=>{},
  modMenu: { 
    credit: {},
    dialog: {}
}
