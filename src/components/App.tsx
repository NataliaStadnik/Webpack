import { Link } from 'react-router-dom';
import * as classes from './App.module.scss';
import Owl from '@/assets/owl.svg';

const App = () => {
  if (__PLATFORM__ === 'desktop') {
    return <div>is destop platform</div>;
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>is mobile platform</div>;
  }

  return (
    <div className={classes.main}>
      Hello World
      <div className={classes.menu}>
        <Link to={'/about'}>About</Link>
        <Link to={'/shop'}>Shop</Link>
      </div>
      <div>
        <Owl width={500} height={400} color={'black'} />
      </div>
    </div>
  );
};

export default App;
