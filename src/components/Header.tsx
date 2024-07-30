import React from 'react';
import { arrow_down, kz, logo, menu, profile, ru } from '@/assets';
import { AppBar, Box, Button, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';
import styles from '@/config/styles.ts';
import { pages } from '@/config/pages.ts';

function Header() {
  const [isActiveProfile, setIsActiveProfile] = React.useState<null | HTMLElement>(null);
  const [isActiveLanguage, setIsActiveLanguage] = React.useState<null | HTMLElement>(null);
  const pathname = window.location.pathname;

  return (
    <AppBar position="static" color="default">
      <MobileMenu>
        <img src={logo} alt="logo" />
        <Button color="inherit" sx={{ fontSize: '14px' }} onClick={(e) => setIsActiveProfile(e.currentTarget)}>
          <img src={menu} alt="profile" />
        </Button>
      </MobileMenu>
      <DesktopHeader>
        <Toolbar sx={{ gap: '15px' }}>
          <img src={logo} alt="logo" />
          <LeftBlock>
            {pages.map((p, i) => (
              <Box key={`header-${p.value}-${i}`}>
                <Link
                  href={p.value}
                  underline="none"
                  color={pathname === `/${p.value}` ? styles.colors.active : styles.colors.disable}
                  sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
                >
                  <img src={p.icon} alt={p.title} />
                  <Typography component="div" style={{ marginLeft: '10px', textTransform: 'none', fontSize: '14px' }}>
                    {p.title}
                  </Typography>
                </Link>
              </Box>
            ))}
          </LeftBlock>

          <RightBlock>
            <Button color="inherit" sx={{ fontSize: '14px' }} onClick={(e) => setIsActiveLanguage(e.currentTarget)}>
              <img src={ru} alt="ru" width={20} height={16} />
              <Typography sx={{ margin: '0 4px' }}>RU</Typography>
              <img src={arrow_down} alt="Arrow Down" />
            </Button>

            <Menu
              anchorEl={isActiveLanguage}
              open={Boolean(isActiveLanguage)}
              onClose={() => setIsActiveLanguage(null)}
            >
              <MenuItem onClick={() => {}}>
                <img src={ru} alt="ru" width={20} height={16} />
                <Typography sx={{ margin: '0 4px' }}>RU</Typography>
              </MenuItem>
              <MenuItem onClick={() => {}}>
                <img src={kz} alt="kz" width={20} height={16} />
                <Typography sx={{ margin: '0 4px' }}>KZ</Typography>
              </MenuItem>
            </Menu>

            <Button color="inherit" sx={{ fontSize: '14px' }} onClick={(e) => setIsActiveProfile(e.currentTarget)}>
              <img src={profile} alt="profile" />
            </Button>

            <Menu anchorEl={isActiveProfile} open={Boolean(isActiveProfile)} onClose={() => setIsActiveProfile(null)}>
              <MenuItem onClick={() => {}}>Профиль</MenuItem>
              <MenuItem onClick={() => {}}>Выйти</MenuItem>
            </Menu>
          </RightBlock>
        </Toolbar>
      </DesktopHeader>
    </AppBar>
  );
}

export default Header;

const RightBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const LeftBlock = styled('div')(() => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'Inter',
  gap: '5px',
}));

const MobileMenu = styled('div')`
  display: none;

  @media (max-width: 1160px) {
    display: flex;
      justify-content: space-between;
      padding: 14px 0;
      width: 100%;
  }
`;

const DesktopHeader = styled('div')`
  display: flex;\
    justify-content: center;
  flex-grow: 1;

  @media (max-width: 1160px) {
    display: none;
  }
`;
