import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Sidebar from './components/Sidebar';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Sidebar component', () => {
  const sidebarApp = render(<Sidebar />);
});
