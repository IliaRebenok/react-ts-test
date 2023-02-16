import './App.css';
import { useState } from 'react';
import List from './components/list';
import AddToList from './components/addToList';

interface IState {
  wish: {
    itemName: string,
    amount?: number,
    pictureUrl?: string,
    info?: string,
  }[]
}

function App() {

  const [wish, setWish] = useState<IState["wish"]>([
    {
      itemName: 'AirPods Pro 2',
      amount: 1,
      pictureUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361', 
      info: 'AirPods Pro have been reengineered for even richer audio experiences. Next-level Active Noise Cancellation and Adaptive Transparency reduce more external noise.'
    }
  ])



  return (
    <div className="App">
      <h1>Wish list</h1>
      <List wish={wish}/>
      <AddToList />
    </div>
  );
}

export default App;
