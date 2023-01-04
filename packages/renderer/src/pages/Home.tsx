import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  /**
   * Hooks
   */
  const [products, setProducts] = useState<IProduct[]>([]);

  const [formData, setFormData] = useState<IProduct>({
    id: 0,
    name: '',
    price: 0,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const products = await window.ipcRenderer.invoke('get-products');
      setProducts(products);
    };

    loadProducts();
  }, []);

  /**
   * Functions
   */

  // handleChange:
  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // submitForm:
  const submitForm = async (e: any) => {
    e.preventDefault();

    const newProduct = await window.ipcRenderer.invoke(
      'create-product',
      formData
    );

    const updatedProducts: IProduct[] = [...products, newProduct];
    setProducts(updatedProducts);
  };

  return (
    <>
      <Button variant='outlined'>
        <Link to={'/about'}>About</Link>
      </Button>
      <Button variant='contained'>Home</Button>

      {/* Form product */}
      <form onSubmit={submitForm}>
        <TextField
          name='name'
          onChange={handleChange}
          value={formData.name}
          type='text'
          placeholder='Nombre del producto'
          variant='outlined'
        />

        <TextField
          name='price'
          onChange={handleChange}
          value={formData.price}
          type='number'
          placeholder='Precio del producto'
          variant='outlined'
        />

        <Button variant='contained' type='submit'>
          Cargar
        </Button>
      </form>

      {/* Table of products */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre del producto</TableCell>
              <TableCell>Precio del producto</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default HomePage;
