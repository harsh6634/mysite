import {
  Container,
  Title,
  Text,
  TextInput,
  Select,
  Button,
  Group,
  Stack,
  Divider,
  Paper,
  Center,
  Anchor,
  Box,
  rem
} from '@mantine/core';
import { IconBrandLinkedin, IconMail, IconBrandGithub} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.tsx';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <Container size="sm" py="xl">
      {/*Header*/}
      <Header />

      <Paper p="md" withBorder radius="md" shadow="md">
        <Title color="#00509e" ta="left" ff="sans-serif" fw={800}>
          Have a Project?
        </Title>
        <Text fw={500} ta="left" mt="sm">
          Don&apos;t worry we can assist you with this. Just let us know
        </Text>

        <form>
          <Box mt="xl">
            <TextInput label="Name" />
            <TextInput label="Contact" />
            <TextInput label="Email" type="email" />
            <Select
              label="Select Service"
              placeholder="Select"
              data={['Web Development', 'UI/UX Design', 'Consultation']}
            />
            <Button color="yellow" mt="md"  radius="sm" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>

      <Divider my="xl" />

      <Box mt="xl">
        <Title color="#00509e" ta="left" ff="sans-serif" fw={800} mt={10} mb={10}>Want to Hire me?</Title>
        <Text fw={500} ta="left">
          For my privacy I have excluded my contact number from resume, but you can still reach me via email
        </Text>
        <Button color="yellow" mt="md" radius="sm">Download Resume</Button>
      </Box>

      <Divider my="xl" />

      <Stack align="left">
        <Title color="#00509e" ta="left" ff="sans-serif" fw={800}>
          Want to Connect?
        </Title>
        <Text fw={500} ta="left">
          Here are few platforms where you can connect with me.
        </Text>
      </Stack>

      <Divider my="xl" />

      <Box
        component="footer"
        py="md"
        px="xl"
        style={{
          backgroundColor: '#0B1120',
          borderTop: '1px solid #1f2937',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Center>
          <Stack spacing="sm" align="center">
            <Text size="lg" fw={700} c="white">
              Harsh Modi
            </Text>

            <Group spacing="xs">
              {[IconMail, IconBrandGithub, IconBrandLinkedin].map((Icon, idx) => (
                <Box
                  key={idx}
                  p={8}
                  style={{
                    backgroundColor: '#1E293B',
                    borderRadius: rem(10),
                    transition: 'transform 0.2s, background 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                >
                  <Icon size={20} color="#CBD5E1" />
                </Box>
              ))}
            </Group>

            {/* Footer Navigation */}
            <Group spacing="lg" mt="sm">
              <Anchor c="yellow" fw={600}>
                Contact
              </Anchor>
              <Anchor c="gray.5" onClick={() => navigate('/')}>About Me</Anchor>
              <Anchor c="gray.5">Learn</Anchor>
            </Group>
          </Stack>
        </Center>
      </Box>
    </Container>
  );
}