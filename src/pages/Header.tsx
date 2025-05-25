import { useState } from 'react';
import {
  Box,
  Group,
  Text,
  ActionIcon,
  Paper,
  Stack,
} from '@mantine/core';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Contact', path: '/contact' },
    { label: 'About Me', path: '/' },
    { label: 'Learn' },
  ];

  return (
    <Box
      px="md"
      py="xs"
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid #eaeaea',
        position: 'relative',
        boxShadow: 'sm',
        borderRadius: '0 0 10px 10px',
        zIndex: 100,
      }}
    >
      <Group position="apart">
        <Text fw={700}>Developer Harsh</Text>

        <Group spacing="xs">
          <ActionIcon
            variant="transparent"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <IconX color="orangered" /> : <IconMenu2 />}
          </ActionIcon>
        </Group>
      </Group>

      {menuOpen && (
        <Paper
          shadow="md"
          radius="md"
          p="sm"
          sx={{
            position: 'absolute',
            top: 50,
            right: 15,
            backgroundColor: 'white',
            zIndex: 101,
          }}
        >
          <Stack spacing="xs">
            {navLinks.map((link) => (
              <Text
                key={link.path}
                component={Link}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                sx={{
                  fontWeight: location.pathname === link.path ? 700 : 500,
                  color:
                    location.pathname === link.path ? '#facc15' : '#0f172a',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#facc15',
                  },
                }}
              >
                {link.label}
              </Text>
            ))}
          </Stack>
        </Paper>
      )}
    </Box>
  );
}
