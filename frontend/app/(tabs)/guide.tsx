import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones, ajuste conforme necessário

const StepByStepScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Passo 1 */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Passo 1</Text>
        <View style={styles.stepContent}>
          <Text style={styles.stepText}>Para configurar e utilizar o dispositivo corretamente, comece acessando a aba "Botões" no aplicativo.</Text>
        </View>
      </View>

      {/* Passo 2 */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Passo 2</Text>
        <View style={styles.stepContent}>
          <Text style={styles.stepText}>Utilize o dispositivo pressionando o botão correspondente para emitir a frase previamente configurada.</Text>
        </View>
      </View>

      {/* Passo 3 */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Passo 3</Text>
        <View style={styles.stepContent}>
          <Text style={styles.stepText}>Na aba "Home" do aplicativo, visualize as ocorrências de cada botão, bem como as estatísticas de uso semanais. Essa visualização permite acompanhar o uso do dispositivo ao longo do tempo e identificar padrões de utilização.3</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default StepByStepScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fffaf0', // Fundo claro
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b705c',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 18,
    color: '#6b705c',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  stepContent: {
    backgroundColor: '#e9edc9', // Fundo pastel
    padding: 30,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  stepText: {
    fontSize: 16,
    color: '#606c38', // Cor de texto suave
  },
});
