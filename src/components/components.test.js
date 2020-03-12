import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';


test('renders Sidebar component', () => {
  const sidebarApp = render(<Sidebar />);
});
