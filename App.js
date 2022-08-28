import React from 'react';
import Search from './src/Components/Search'
import {findPivot} from './src/Functions/FindPivot'

const App= () => {
  return (
    <Search/>
  );
};

export default App;




const res = findPivot()
if(res == -1)
  console.log('Pivot not found')
else
  console.log('res',res);