import Swal from 'sweetalert2';
import logoSpinner from '../assets/mini-logo-estafa-libre.png';

export const spinner = () => {
  Swal.fire({
    imageUrl: logoSpinner,
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: 'Estafa Libre logo',
    title: 'Ya se carga, tenga paciencia',
    showConfirmButton: false,
  });
  setTimeout(() => {
    Swal.close();
  }, 500);
};
