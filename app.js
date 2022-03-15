const express = require('express')
const Airtable = require('airtable')
const req = require('express/lib/request')
const fetch = require('node-fetch')
const dayjs = require('dayjs')
const app = express()
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')
const scheduler = new ToadScheduler()


const port = 3000 || process.env.PORT
app.use(express.static('public'))
app.use(express.json())

const base = new Airtable({apiKey: 'keyRtSv4UAZ79Kpoy'}).base('appkAFcXYmg8XNqMD');
const stockMarket ='p6rar36NVmWOuFIkopmFNL_225wBbZRn'
const yesterday = dayjs().add(-1, 'day').format("YYYY-MM-DD", "America/New_York")



const xomData = `https://api.polygon.io/v1/open-close/XOM/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const rio_data = `https://api.polygon.io/v1/open-close/RIO/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const shlx_data =  `https://api.polygon.io/v1/open-close/SHLX/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const pypl_data = `https://api.polygon.io/v1/open-close/PYPL/${yesterday}?adjusted=true&apiKey=${stockMarket}`
const rivn_data =  `https://api.polygon.io/v1/open-close/RIVN/${yesterday}?adjusted=true&apiKey=${stockMarket}`



const fetchXomData = () =>{ fetch(xomData).then(result => result.json()).then(data =>{
   const closeXom = data.close
   const dateFrom = data.from
   const SymbolXom = data.symbol

   base('Table 1').replace([
      {
        "id": "recbrh7FtuGgG3tzV",
        "fields": {
          "Stock Ticker Symbol": SymbolXom,
          "Exchange": "NYSE",
          "Last Price (API)": closeXom,
          "Shares": 8,
          "Date Acquired": dateFrom,
         
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
     console.log(`I run every 3 xom`)
     fetchXomData()
})

const xomJob = new SimpleIntervalJob({ minutes: 3, }, Xomtask)

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
          "Exchange": "NYSE",
          "Last Price (API)": closeRio,
          "Shares": 8,
          "Date Acquired": dateRio,
         
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
     console.log(`I run every 3 rio`)
     fetchrioData()
})

const rioJob = new SimpleIntervalJob({ minutes: 3, }, riotask)
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
          "Exchange": "NYSE",
          "Last Price (API)": closeshlx,
          "Shares": 8,
          "Date Acquired": dateshlx,
         
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
     console.log(`I run every 3 shlx`)
     fetchshlxData()
})

const shlxJob = new SimpleIntervalJob({ minutes: 3, }, shlxtask)
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
          "Exchange": "NYSE",
          "Last Price (API)": closepypl,
          "Shares": 8,
          "Date Acquired": datepypl,
         
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
     console.log(`I run every 3 pypl`)
     fetchpyplData()
})

const pyplJob = new SimpleIntervalJob({ minutes: 3, }, pypltask)
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
          "Exchange": "NYSE",
          "Last Price (API)": closerivn,
          "Shares": 8,
          "Date Acquired": daterivn,
         
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
     console.log(`I run every 3 rivrn`)
     fetchrivrnData()
})

const rivirnJob = new SimpleIntervalJob({ minutes: 3, }, rivrntask)
scheduler.addSimpleIntervalJob(rivirnJob)


app.listen(port, () =>{console.log(`Server started on ${port}`)})