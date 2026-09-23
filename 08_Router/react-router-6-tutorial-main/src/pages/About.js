import {Link} from 'react-router-dom';
const About = () => {
  return (
    <>
      <h2>About page</h2>
      <Link to='/' className='btn'>Home Page</Link>
      <Link to='/products' className='btn'>Product Page</Link>

    </>
  );
};
export default About;
