import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
  rem,
  Badge,
  Anchor
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.tsx';
import { motion } from 'framer-motion';

const skills = ['Postman', 'Mongo DB', 'Git', 'AWS', 'Figma', 'React JS', 'TypeScript', 'Postgres SQL', 'Bootstrap'];

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <Container size="sm" py="xl">
      {/* Header */}
      <Header />
      <Stack spacing="xs">
        <Title c="blue.9" fw={1000}>
          Namaste, I am <Text span c="yellow.6">Harsh</Text>
        </Title>
        <Text size="lg" fw={700}>
          A Passionate Software Developer from Bharat
        </Text>
      </Stack>

      {/* Social Links */}
      <Group mt="md" grow>
        <Button color="yellow" leftSection={<IconBrandInstagram size={18} />} radius="md">
          Instagram
        </Button>
        <Button color="yellow" leftSection={<IconBrandGithub size={18} />} radius="md">
          GitHub
        </Button>
        <Button color="yellow" leftSection={<IconBrandLinkedin size={18} />} radius="md">
          LinkedIn
        </Button>
      </Group>

      {/* Who I Am */}
      <Box mt="xl">
        <Title order={3} c="blue.9" fw={800}>Who I Am?</Title>
        <Text mt="xs">
          As a Master of Computer Application student, I am passionate about coding. I excel in designing aesthetically pleasing websites and
          helping businesses grow through great communication and skill.
        </Text>
        <Button color="yellow" mt="md" onClick={() => navigate('/contact')}>
          Contact
        </Button>
      </Box>

      {/* Currently Learning */}
      <Box mt="xl">
        <Title order={3} c="blue.9" fw={800}>Currently Learning</Title>
        <Text mt="xs">
          <strong>Spring Boot</strong> is a Java-based framework that simplifies backend development.
          It’s used for scalable, enterprise-grade APIs and supports microservice architecture.
        </Text>
      </Box>

      {/* Skills */}
      <Box mt="xl">
        <Title order={3} c="blue.9" fw={800}>
          My Skills
        </Title>

        <Text size="sm" mt="xs" c="gray.7">
          "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." –{' '}
          <strong>Colin Powell</strong>
        </Text>

        <Group mt="md" spacing="xs" wrap="wrap">
          {skills.map((tech, idx) => (
            <motion.div
              key={tech}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.5, duration: 0.4, ease: 'easeOut' }}
            >
              <Badge color="dark" variant="light" size="lg" radius="lg">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </Group>
      </Box>

      {/* Hobbies */}
      <Box mt="xl">
        <Title order={3} c="blue.9" fw={800}>Hobbies</Title>
        <Text mt="xs" mb="xs">
          Traveling, Driving, Listening to music
        </Text>
      </Box>

      {/* Footer */}
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
              <Anchor c="gray.5" onClick={() => navigate('/contact')}>
                Contact
              </Anchor>
              <Anchor c="yellow" fw={600}>About Me</Anchor>
              <Anchor c="gray.5">Learn</Anchor>
            </Group>
          </Stack>
        </Center>
      </Box>
    </Container>
  );
}
