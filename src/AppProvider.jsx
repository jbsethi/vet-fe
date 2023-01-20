import { useState, createContext } from 'react';

export const appContext = createContext({
  openItem: ['dashboard'],
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
});

const AppProvider = ({ children }) => {
  const [openItem, setOpenItem] = useState(['dashboard']);
  const [openComponent, setOpenComponent] = useState('buttons');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [componentDrawerOpen, setComponentDrawerOpen] = useState(true);

  const activeItem = (item) => {
    setOpenItem(item);
  };

  const activeComponent = (component) => {
    setOpenComponent(component);
  };

  const openDrawer = (status) => {
    setDrawerOpen(status);
  };

  const openComponentDrawer = (status) => {
    setComponentDrawerOpen(status);
  };

  return (
    <appContext.Provider
      value={{
        openItem,
        openComponent,
        drawerOpen,
        componentDrawerOpen,
        activeItem,
        activeComponent,
        openDrawer,
        openComponentDrawer
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
