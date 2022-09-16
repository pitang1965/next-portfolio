import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
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
import { showNotification, hideNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';

const ContactPage: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      showNotification({
        id: 'sending',
        title: 'お問合せ',
        message: '送信しています...',
        icon: <IconCheck size={16} />,
        loading: true,
      });

      // microCMSに送信
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      form.reset();
      hideNotification('sending');
      showNotification({
        title: 'お問合せありがとうございます',
        message: '24時間以内に確認いたします。',
        icon: <IconCheck size={16} />,
      });
    } catch (error) {
      console.error('Fetch error: ', error);
      alert(JSON.stringify(error));
    }
  };

  return (
    <Layout content='Contact'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Contact
        </Title>
        <Divider mt='sm' />
        <Box mx='auto'>
          <form onSubmit={form.onSubmit(handleSubmit)}>
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
