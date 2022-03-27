const express = require('express')
const Airtable = require('airtable')
const req = require('express/lib/request')
const fetch = require('node-fetch')
const dayjs = require('dayjs')
const app = express()
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')
const scheduler = new ToadScheduler()


const port = process.env.PORT || 3000
app.use(express.static('public'))
app.use(express.json())

const base = new Airtable({Airtable_API}).base(BaseID); // Airtable is the database in this scenario
const stockMarket = STOCK_API //Polygon.io website to access stock market last price-Free api
const yesterday = dayjs().add(-1, 'day').format("YYYY-MM-DD", "America/New_York")




const xomData = `https://api.polygon.io/v1/open-close/XOM/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const rio_data = `https://api.polygon.io/v1/open-close/RIO/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const shlx_data =  `https://api.polygon.io/v1/open-close/SHLX/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const pypl_data = `https://api.polygon.io/v1/open-close/PYPL/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const rivn_data =  `https://api.polygon.io/v1/open-close/RIVN/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const apple_data =  `https://api.polygon.io/v1/open-close/AAPL/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const maxn_data =  `https://api.polygon.io/v1/open-close/MAXN/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const htz_data =  `https://api.polygon.io/v1/open-close/HTZ/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const copx_data =  `https://api.polygon.io/v1/open-close/COPX/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const amzn_data =  `https://api.polygon.io/v1/open-close/AMZN/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const tsla_data =  `https://api.polygon.io/v1/open-close/TSLA/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const blk_data =  `https://api.polygon.io/v1/open-close/BLK/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const msft_data =  `https://api.polygon.io/v1/open-close/MSFT/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const btc_data =  `https://api.polygon.io/v1/open-close/BTC/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const eth_data =  `https://api.polygon.io/v1/open-close/ETH/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const sol_data =  `https://api.polygon.io/v1/open-close/SOL/${yesterday}?adjusted=true&apiKey=${stockMarket}`




const fetchXomData = () =>{ fetch(xomData).then(result => result.json()).then(data =>{
   const closeXom = data.close
   const dateFrom = data.from
   const SymbolXom = data.symbol

   base('Table 1').update([
      {
        "id": "recbrh7FtuGgG3tzV",
        "fields": {
          "Stock Ticker Symbol": SymbolXom,
          "Last Price (API)": closeXom,
          "Date of Last Price": dateFrom,
         
        }
      },
    
   ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Exchange'));
      });
    });
})}
const Xomtask = new Task('simple task', () => {    
     fetchXomData()
})

const xomJob = new SimpleIntervalJob({ minutes: 15, }, Xomtask)

scheduler.addSimpleIntervalJob(xomJob)
// end of xom data fetch

const fetchrioData = () =>{ fetch(rio_data).then(result => result.json()).then(data =>{
   const closeRio = data.close
   const dateRio = data.from
   const SymbolRio = data.symbol

   base('Table 1').update([
      {
        "id": "recdychKZxJtk1vc2",
        "fields": {
          "Stock Ticker Symbol": SymbolRio,
          "Last Price (API)": closeRio,
          "Date of Last Price": dateRio,
         
        }
      },
    
   ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Exchange'));
      });
    });
})}
const riotask = new Task('simple task', () => {
     fetchrioData()
})

const rioJob = new SimpleIntervalJob({ minutes: 15, }, riotask)
scheduler.addSimpleIntervalJob(rioJob)
// end of rio fetch

const fetchshlxData = () =>{ fetch(shlx_data).then(result => result.json()).then(data =>{
   const closeshlx = data.close
   const dateshlx = data.from
   const Symbolshlx = data.symbol
 
   base('Table 1').update([
      {
        "id": "recBT5D2B0pfVfVBz",
        "fields": {
          "Stock Ticker Symbol": Symbolshlx,
          "Last Price (API)": closeshlx,
          "Date of Last Price": dateshlx,
         
        }
      },
    
   ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Exchange'));
      });
    });
})}
const shlxtask = new Task('simple task', () => {
     fetchshlxData()
})

const shlxJob = new SimpleIntervalJob({ minutes: 15, }, shlxtask)
scheduler.addSimpleIntervalJob(shlxJob)
// end of rio fetch


const fetchpyplData = () =>{ fetch(pypl_data).then(result => result.json()).then(data =>{
   const closepypl = data.close
   const datepypl = data.from
   const Symbolpypl = data.symbol
   
   base('Table 1').update([
      {
        "id": "recC9hLJj6Qj8PADw",
        "fields": {
          "Stock Ticker Symbol": Symbolpypl,
          "Last Price (API)": closepypl,
          "Date of Last Price": datepypl,
         
        }
      },
    
   ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Exchange'));
      });
    });
})}
const pypltask = new Task('simple task', () => {
     fetchpyplData()
})

const pyplJob = new SimpleIntervalJob({ minutes: 15, }, pypltask)
scheduler.addSimpleIntervalJob(pyplJob)

// end of fetch pypl
const fetchrivrnData = () =>{ fetch(rivn_data).then(result => result.json()).then(data =>{
   const closerivn = data.close
   const daterivn= data.from
   const Symbolrivrn= data.symbol
 
   base('Table 1').update([
      {
        "id": "recJpxr77WedTNGB5",
        "fields": {
          "Stock Ticker Symbol": Symbolrivrn,
          "Last Price (API)": closerivn,
          "Date of Last Price": daterivn,
         
        }
      },
    
   ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Exchange'));
      });
    });
})}
const rivrntask = new Task('simple task', () => {
     fetchrivrnData()
})

const rivirnJob = new SimpleIntervalJob({ minutes: 15, }, rivrntask)
scheduler.addSimpleIntervalJob(rivirnJob)

//start of Apple stocks
const fetchApplnData = () =>{ fetch(apple_data).then(result => result.json()).then(data =>{
  const closeappl = data.close
  const dateappl= data.from
  const Symbolappl= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recfuEwSzXZaoBLpF",
       "fields": {
         "Stock Ticker Symbol": Symbolappl,
         "Last Price (API)": closeappl,
         "Date of Last Price": dateappl,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const appltask = new Task('simple task', () => {
  console.log('I run apple')  
  fetchApplnData()
})

const applJob = new SimpleIntervalJob({ minutes: 15, }, appltask)
scheduler.addSimpleIntervalJob(applJob)

//start of maxn

const fetchMxnnData = () =>{ fetch(maxn_data).then(result => result.json()).then(data =>{
  const closemxn = data.close
  const datemxn= data.from
  const Symbolmxn= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "rec5sIt6GYwwMoWeH",
       "fields": {
         "Stock Ticker Symbol": Symbolmxn,
         "Last Price (API)": closemxn,
         "Date of Last Price": datemxn,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const mxntask = new Task('simple task', () => {
  console.log('I run mxn')  
  fetchMxnnData()
})

const maxnJob = new SimpleIntervalJob({ minutes: 15, }, mxntask)
scheduler.addSimpleIntervalJob(maxnJob)

//start of HTZ stock
const fetchHTZData = () =>{ fetch(htz_data).then(result => result.json()).then(data =>{
  const closehtz = data.close
  const datehtz= data.from
  const Symbolhtz= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "rec6t91tGZI42Nemz",
       "fields": {
         "Stock Ticker Symbol": Symbolhtz,
         "Last Price (API)": closehtz,
         "Date of Last Price": datehtz,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const htztask = new Task('simple task', () => {
  console.log('I run htz')  
  fetchHTZData()
})
const htzJob = new SimpleIntervalJob({ minutes: 15, }, htztask)
scheduler.addSimpleIntervalJob(htzJob)


//Start of COPEX
const fetchcopxData = () =>{ fetch(copx_data).then(result => result.json()).then(data =>{
  const closecopx = data.close
  const datecopx= data.from
  const Symbolcopx= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recaXYKiDbxm1WR7D",
       "fields": {
         "Stock Ticker Symbol": Symbolcopx,
         "Last Price (API)": closecopx,
         "Date of Last Price": datecopx,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const copxtask = new Task('simple task', () => {
  console.log('I run copex')  
  fetchcopxData()
})
const copxJob = new SimpleIntervalJob({ minutes: 15, }, copxtask)
scheduler.addSimpleIntervalJob(copxJob)



const fetchAmznData = () =>{ fetch(amzn_data).then(result => result.json()).then(data =>{
  const closeAmzn = data.close
  const dateAmzn= data.from
  const SymbolAmzn= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "rec2jU6DSlhrSQnYF",
       "fields": {
         "Stock Ticker Symbol": SymbolAmzn,
         "Last Price (API)": closeAmzn,
         "Date of Last Price": dateAmzn,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const amzntask = new Task('simple task', () => {
  console.log('I run Amazon')  
  fetchAmznData()
})
const amznJob = new SimpleIntervalJob({ minutes: 15, }, amzntask)
scheduler.addSimpleIntervalJob(amznJob)

//BLK start here
const fetchBLKData = () =>{ fetch(blk_data).then(result => result.json()).then(data =>{
  const closeblk = data.close
  const dateblk= data.from
  const Symbolblk= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recldEbbVysnB36Tr",
       "fields": {
         "Stock Ticker Symbol": Symbolblk,
         "Last Price (API)": closeblk,
         "Date of Last Price": dateblk,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const blktask = new Task('simple task', () => {
  console.log('I run BLK')  
  fetchBLKData()
})
const blkJob = new SimpleIntervalJob({ minutes: 15, }, blktask)
scheduler.addSimpleIntervalJob(blkJob)


//Tesla starts here
const fetchTslaData = () =>{ fetch(tsla_data).then(result => result.json()).then(data =>{
  const closetsla = data.close
  const datetsla= data.from
  const Symboltsla= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recwv5s8cG6qhuCIj",
       "fields": {
         "Stock Ticker Symbol": Symboltsla,
         "Last Price (API)": closetsla,
         "Date of Last Price": datetsla,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const teslatask = new Task('simple task', () => {
  console.log('I run TSLA')  
  fetchTslaData()
})
const teslaJob = new SimpleIntervalJob({ minutes: 15, }, teslatask)
scheduler.addSimpleIntervalJob(teslaJob)



//MSFT starts Here
const fetchmsftData = () =>{ fetch(msft_data).then(result => result.json()).then(data =>{
  const closemsft = data.close
  const datemsft= data.from
  const Symbolmsft= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recT9MGQ1Bxbynz21",
       "fields": {
         "Stock Ticker Symbol": Symbolmsft,
         "Last Price (API)": closemsft,
         "Date of Last Price": datemsft,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const msftatask = new Task('simple task', () => {
  console.log('I run MSFT')  
  fetchmsftData()
})
const msftJob = new SimpleIntervalJob({ minutes: 15, }, msftatask)
scheduler.addSimpleIntervalJob(msftJob)

//BTC start here
const fetchBTCData = () =>{ fetch(btc_data).then(result => result.json()).then(data =>{
  const closeBTC = data.close
  const dateBTC= data.from
  const SymbolBTC= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "rechifDmtDcIA4ibC",
       "fields": {
         "Stock Ticker Symbol": SymbolBTC,
         "Last Price (API)": closeBTC,
         "Date of Last Price": dateBTC,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const btctask = new Task('simple task', () => {
  console.log('I run BTC')  
  fetchBTCData()
})
const btcJob = new SimpleIntervalJob({ minutes: 15, }, btctask)
scheduler.addSimpleIntervalJob(btcJob)

//ETH start here
const fetchETHData = () =>{ fetch(eth_data).then(result => result.json()).then(data =>{
  const closeETH = data.close
  const dateETH= data.from
  const SymbolETH= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recDMexP5NyiNMtCo",
       "fields": {
         "Stock Ticker Symbol": SymbolETH,
         "Last Price (API)": closeETH,
         "Date of Last Price": dateETH,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const ethtask = new Task('simple task', () => {
  console.log('I run ETH')  
  fetchETHData()
})
const ethJob = new SimpleIntervalJob({ minutes: 15, }, ethtask)
scheduler.addSimpleIntervalJob(ethJob)

//
const fetchSOLData = () =>{ fetch(sol_data).then(result => result.json()).then(data =>{
  const closeSoL = data.close
  const dateSol= data.from
  const SymbolSoL= data.symbol
  console.log(data)
  base('Table 1').update([
     {
       "id": "recgPjaohYBXDg6qT",
       "fields": {
         "Stock Ticker Symbol": SymbolSoL,
         "Last Price (API)": closeSoL,
         "Date of Last Price": dateSol,
        
       }
     },
   
  ], function(err, records) {
     if (err) {
       console.error(err);
       return;
     }
     records.forEach(function(record) {
       console.log(record.get('Exchange'));
     });
   });
})}
const soltask = new Task('simple task', () => {
  console.log('I run SOL')  
  fetchSOLData()
})
const solJob = new SimpleIntervalJob({ minutes: 15, }, soltask)
scheduler.addSimpleIntervalJob(solJob)



app.listen(port, () =>{console.log(`Server started on ${port}`)})
