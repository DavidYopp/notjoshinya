import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';


beforeEach(() => {
  const sidebarApp = render(<Sidebar />);
});

test('renders Sidebar component', () => {
  const sidebarApp = render(<Sidebar />);
});

test('Sidebar component contains sidebar nav element', () => {
  const navcomponent = document.getElementById('sidebar');
  expect(navcomponent).toBeInTheDocument();
});

test('Sidebar component contains sidebar nav element', () => {
  const topcomponent = document.getElementById('sidebar-top');
  expect(topcomponent).toBeInTheDocument();
});

test('Sidebar component contains sidebar nav element', () => {
  const links = document.getElementsByTagName('a');
  expect(links.length).toBe(4);
});
