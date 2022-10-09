import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../app/store';
import NavBar from './NavBar';

const testButtonSearchId = 'searchButton';

describe('NavBar test', () => {
  test('esperamos que renderice el component navbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>,
    );

    const element = screen.getByAltText('logo_estafa_mlibre');

    expect(element).toBeInTheDocument();
  });
  // test('esperamos que ante un click el componente reaccione', () => {
  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <NavBar />
  //       </BrowserRouter>
  //     </Provider>,
  //   );
  //   const inputElement = screen.getByPlaceholderText('Buscar');
  //   fireEvent.change(inputElement, { target: { value: 'vehiculos' } });
  //   const searchButton = screen.getByTestId(testButtonSearchId);
  //   fireEvent.keyPress(searchButton, { key: 'Enter', code: 'Enter' });
  //   console.log(inputElement.value);
  //   expect(inputElement.value).toEqual('vehiculos');
  // });
});
