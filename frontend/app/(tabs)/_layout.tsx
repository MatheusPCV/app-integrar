import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function AppLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: true, // Ativa o cabeçalho para o botão de voltar
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Index', headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="phrases" options={{ title: 'Frases' }} />
      <Stack.Screen name="guide" options={{ title: 'Guia de Uso' }} />
    </Stack>
  );
}
