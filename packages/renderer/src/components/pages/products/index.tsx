import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchProducts } from '../../../store/productsSlice';
import { ProductModal } from './ProductModal';

export const Page = () => {
  /**
   * Hooks
   */
  const useDispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    useDispatch(fetchProducts());
  }, []);

  /**
   * Functions
   */

  // handleOpenModal
  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Stack direction='row' spacing={2} mb={4}>
        <Button
          variant='contained'
          type='button'
          color='success'
          startIcon={<AddBoxRoundedIcon />}
          onClick={handleOpenModal}
        >
          Nuevo Producto
        </Button>
      </Stack>

      <ProductModal
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
      />

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
};
