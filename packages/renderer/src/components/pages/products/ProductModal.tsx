import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../../store/hooks';
import { createProduct } from '../../../store/productsSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IProps {
  isModalOpen: boolean;
  handleOpenModal: () => void;
}

export const ProductModal: FC<IProps> = ({ isModalOpen, handleOpenModal }) => {
  const useDispatch = useAppDispatch();

  const [formData, setFormData] = useState<IProduct>({
    id: 0,
    name: '',
    price: 0,
  });

  // handleChange:
  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: any) => {
    e.preventDefault();

    useDispatch(createProduct(formData));
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleOpenModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <form onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid xs={6} item display={'flex'} justifyContent={'center'}>
              <TextField
                name='name'
                onChange={handleChange}
                value={formData.name}
                type='text'
                placeholder='Nombre del producto'
                variant='outlined'
              />
            </Grid>
            <Grid xs={6} item display={'flex'} justifyContent={'center'}>
              <TextField
                name='price'
                onChange={handleChange}
                value={formData.price}
                type='number'
                placeholder='Precio del producto'
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Button variant='contained' type='submit'>
            Cargar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
