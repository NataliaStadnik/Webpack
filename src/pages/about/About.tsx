import food from '@/assets/food.png';
import * as classes from './About.module.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={classes.wrap}>
      <h2>About</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit iusto ipsa similique iure
        aspernatur dicta dolorem nesciunt voluptate eaque, mollitia animi, dolore maiores
        praesentium labore vitae minus voluptatem voluptas rem.
      </div>
      <img src={food} alt="food" />
      <Link to={'/'}>Main Page</Link>
    </div>
  );
};

export default About;
