import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from '@/store/hooks';
import { setLanguage } from '@/store/customizer/CustomizerSlice';
import { Stack } from '@mui/system';
// import { useTranslation } from 'react-i18next 2-12-2024';
import { useEffect } from 'react';
import { AppState } from '@/store/store';

const Languages = [
  {
    flagname: 'English (UK)',
    icon: "/images/flag/icon-flag-en.svg",
    value: 'en',
  },
  {
    flagname: '中国人 (Chinese)',
    icon: "/images/flag/icon-flag-cn.svg",
    value: 'ch',
  },
  {
    flagname: 'français (French)',
    icon: "/images/flag/icon-flag-fr.svg",
    value: 'fr',
  },

  {
    flagname: 'عربي (Arabic)',
    icon: "/images/flag/icon-flag-sa.svg",
    value: 'ar',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[1];
  // const { i18n } = useTranslation();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    // i18n.changeLanguage(customizer.isLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        aria-label="more"
        id="long-button" className="btn-rounded-circle-40"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true" color="inherit"
        onClick={handleClick}
      >
        <Avatar src={currentLang.icon} alt={currentLang.value} sx={{ width: 20, height: 20 }} />
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 2, px: 3 }}
            onClick={() => dispatch(setLanguage(option.value))}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
