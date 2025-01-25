import { Link } from 'react-router-dom';
import * as classes from './Shop.module.scss';

const Shop = () => {
  return (
    <div className={classes.wrap}>
      <h2>Shop</h2>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas quaerat sed
        consectetur repellendus voluptates maxime dolores? Natus asperiores accusantium rerum, ipsa,
        magni cupiditate ea eaque distinctio a aliquam sit.
      </div>
      <div className={classes.img}></div>
      <Link to={'/'}>Main Page</Link>
    </div>
  );
};

export default Shop;
