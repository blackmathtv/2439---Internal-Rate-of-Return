import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPanel from './main-panel/main-panel';
import HistoryPanel from './history-panel/history-panel';
import DiscountPanel from './discount-panel/discount-panel';
import CashFlowsPanel from './cash-flows-panel/cash-flows-panel';

function App() {
  return (
    <div className="App" style={{width: '100vw', height: '43vw', border: '1px solid black'}}>
       <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <h1>NET PRESENT VALUE CALCULATOR</h1>
        </Grid>
        <Grid item>
          <Grid container className={classes.root} spacing={3}>
            <Grid item>
              
            </Grid>
            <Grid item>
              
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
       </Grid>
      
      <DiscountPanel/>
      <CashFlowsPanel/>

      <MainPanel/>
      <HistoryPanel/>
    </div>
  );
}

export default App;
