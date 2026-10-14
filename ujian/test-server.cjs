const fs=require('fs'),vm=require('vm'),assert=require('assert');const tabs={};
class Sheet{constructor(){this.rows=[]}getLastRow(){return this.rows.length}getMaxRows(){return 10000}insertRowsAfter(){}appendRow(r){this.rows.push(r)}setFrozenRows(){}deleteRow(r){this.rows.splice(r-1,1)}getRange(row,col,rows=1,cols=1){const sh=this;return{setValues(matrix){matrix.forEach((r,i)=>sh.rows[row+i-1]=r)},getValue(){return sh.rows[row-1][col-1]},createTextFinder(value){return{matchEntireCell(){return this},findAll(){let found=[];for(let i=row-1;i<sh.rows.length;i++)if(sh.rows[i][col-1]===value)found.push({getRow:()=>i+1});return found},findNext(){return this.findAll()[0]||null}}}}}}
const ss={getSheetByName:n=>tabs[n],insertSheet:n=>tabs[n]=new Sheet()};const c={SpreadsheetApp:{openById:()=>ss,flush(){}},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},ContentService:{MimeType:{JSON:'json'},createTextOutput:s=>({setMimeType:()=>JSON.parse(s)})}};vm.createContext(c);vm.runInContext(fs.readFileSync(__dirname+'/../Code.gs','utf8'),c);const banks=vm.runInContext('SERVER_BANKS',c);
function record(b,n){return{id:'test-rec-'+n,date:new Date().toISOString(),name:'UJIAN SISTEM',className:'3 INTELEK',year:b.year,topic:b.title,total:20,score:999,duration:45,attempt:1,answers:b.ids.map((id,i)=>({id,selected:b.answers[i],correct:'IGNORE',ok:false}))}}
function send(p){return c.doPost({parameter:{payload:JSON.stringify(p)}})}
for(let n=0;n<banks.length;n++){const p=record(banks[n],n),r=send(p);assert.equal(r.ok,true);assert.equal(r.score,20);const again=send(p);assert.equal(again.duplicate,true);}
assert.equal(tabs['Keputusan Muzik'].rows.length,22);assert.equal(tabs['Jawapan Terperinci'].rows.length,421);
const wrong=record(banks[0],99);wrong.answers.forEach(a=>a.selected='SALAH');assert.equal(send(wrong).score,0);
const invalid=record(banks[0],100);invalid.answers[0].id='wrong';assert.equal(send(invalid).ok,false);
const short=record(banks[0],101);short.answers.pop();assert.equal(send(short).ok,false);
const formula=record(banks[0],102);formula.name=' =IMPORTXML("https://bad.test","//x")';assert.equal(send(formula).ok,true);assert(tabs['Keputusan Muzik'].rows.at(-1)[3].startsWith("'"));
assert.deepEqual(Object.keys(c.doGet()).sort(),['ok','service','version']);
console.log('Server mocks: 21 banks, 420 answers, idempotent retries, forged scores, input validation, formula injection: PASS');
fs.writeFileSync('server-test-results.json',JSON.stringify({banks:21,answers:420,idempotency:true,serverScoring:true,inputValidation:true,formulaGuard:true,engine:'Node VM with Google API mocks',liveDeployment:false},null,2));
