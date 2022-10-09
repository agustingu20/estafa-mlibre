/* istanbul ignore file */

import Swal from 'sweetalert2';
import logoSpinner from '../assets/mini-logo-estafa-libre.png';

export const suscription = (resp) => {
  Swal.fire({
    imageUrl: logoSpinner,
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: 'Estafa Libre logo',
    title: resp.status === 201 ? resp.res : 'Se precento un error',
    showConfirmButton: false,
  });
};
