import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/icons/Layout';
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Space,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';

const ContactPage: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Layout content='Contact'>
      <Container>
        <Title align='left'>Contact</Title>
        <Divider mt='sm' />
        <Box sx={{ maxWidth: 300 }} mx='auto'>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Space h='md' />
            
            <TextInput
              required
              label='Email'
              placeholder='your@email.com'
              {...form.getInputProps('email')}
            />

            <Space h='md' />

            <TextInput
              required
              label='Name'
              placeholder='Taro Yamada'
              {...form.getInputProps('name')}
            />

            <Space h='md' />

            <Textarea
              required
              label='Your message'
              placeholder='I want to order your goods'
              {...form.getInputProps('message')}
            />

            <Space h='md' />

            <Group position='center' mt='md'>
              <Button
                type='submit'
                radius='xl'
                sx={(theme) => ({
                  color: theme.colorScheme === 'dark' ? 'black' : 'white',
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[2]
                      : theme.colors.gray[7],
                })}
              >
                Send message
              </Button>
            </Group>
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;
