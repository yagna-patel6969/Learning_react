import products from '../data';
import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <section className='section'>
      <h2>Products</h2>
      <div className='products-list' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map((product) => {
          return (
            <article key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
              <h5 style={{ marginTop: '10px', textTransform: 'capitalize' }}>{product.name}</h5>
            </article>
          );
        })}
      </div>

      <Link to='/' className='btn'>Home Page</Link>
      <Link to='/about' className='btn'>About Page</Link>
      
    </section>
  );
};

export default Products;
