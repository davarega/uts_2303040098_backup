import React, { useState } from "react";
import { IconButton, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Card, ThemeProvider } from "@material-tailwind/react";
import { HomeIcon, UserCircleIcon, PowerIcon, ShoppingCartIcon, ShoppingBagIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbars = ({ isOpen }) => {
  const customTheme = {
    list: {
      styles: {
        base: {
          item: {
            selected: {
              bg: "bg-blue-gray-200/50",
              color: "text-blue-gray-700",
            },
          },
        },
      },
    },
  };

  const [open, setOpen] = useState(0);

  let home = false;
  let product = false;
  let cart = false;

  switch (isOpen) {
    case "home":
      home = true;
      break;
    case "product":
      product = true;
      break;
    case "cart":
      cart = true;
      break;
    default:
      break;
  }

  return (
    <ThemeProvider value={customTheme}>
      <div className="sticky top-0 z-[100]">
        <div onClick={() => setOpen(!open)} className='text-3xl z-[100] fixed right-6 top-6 cursor-pointer md:hidden'>
          <IconButton>
            {open ? (
              <XMarkIcon className="h-8 w-8 stroke-2" />
            ) : (
              <Bars3Icon className="h-8 w-8 stroke-2" />
            )}
          </IconButton>
        </div>

        <Card className={`md:flex h-[calc(100vh-2px)] sticky top-0 md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 duration-700 ${open ? 'flex transform-x-0' : 'transform-x-[20rem] hidden'}`}>
          <div className="mb-2 p-4 bg-blue-400 rounded-lg">
            <Typography variant="h5" color="white" className="flex items-center gap-2">
              <BuildingStorefrontIcon className="h-10 w-10" />
              Sidebar
            </Typography>
          </div>
          <List>
            <a href="/">
              <ListItem selected={home}>
                <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Utama
              </ListItem>
            </a>
            <a href="/product">
              <ListItem selected={product}>
                <ListItemPrefix >
                  <ShoppingCartIcon className="h-5 w-5" />
                </ListItemPrefix>
                Belanja
              </ListItem>
            </a>
            <a href="/cart">
              <ListItem selected={cart}>
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                Keranjang
                <ListItemSuffix>
                  <Chip value="2" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
              </ListItem>
            </a>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Akun
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Keluar
            </ListItem>
          </List>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default Navbars