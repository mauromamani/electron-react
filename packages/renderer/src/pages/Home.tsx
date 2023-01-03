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

interface Product {
  name: string;
  price: number;
}

function HomePage() {
  /**
   * Hooks
   */
  const [products, setProducts] = useState<Product[]>([]);

  const [formData, setFormData] = useState<Product>({
    name: '',
    price: 0,
  });

  useEffect(() => {
    const productsString = localStorage.getItem('products');
    const products: Product[] = productsString
      ? JSON.parse(productsString)
      : [];

    setProducts(products);
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

    const updatedProducts: Product[] = [...products, formData];

    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    const result = await window.ipcRenderer.invoke('testing-ipc', 'argumento');
    console.log(result);
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
            {products.map((product: any) => (
              <TableRow key={product.name}>
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
