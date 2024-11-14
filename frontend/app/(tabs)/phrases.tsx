import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function EditPhrasesScreen() {
  const [phrases, setPhrases] = useState<string[]>([
    "Frase 1",
    "Frase 2",
    "Frase 3",
    "Frase 4"
  ]);

  const handlePhraseChange = (text: string, index: number) => {
    const newPhrases = [...phrases];
    newPhrases[index] = text;
    setPhrases(newPhrases);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {phrases.map((phrase, index) => (
        <View key={index} style={styles.phraseContainer}>
          <Text style={styles.phraseLabel}>Botão {index + 1}</Text>
          <TextInput
            style={styles.phraseInput}
            value={phrase}
            onChangeText={(text) => handlePhraseChange(text, index)}
            placeholder="Digite aqui..."
          />
        </View>
      ))}

      <Button title="Salvar Frases" onPress={() => alert('Frases salvas!')} color="#8ecae6" />
    </ScrollView>
  );
};

export default EditPhrasesScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fffaf0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b705c',
    marginBottom: 10,
    marginTop: 10,
  },
  phraseContainer: {
    width: '100%',
    backgroundColor: '#e9edc9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 35,
    alignItems: 'center',
  },
  phraseLabel: {
    fontSize: 18,
    color: '#457b9d',
    marginBottom: 5,
  },
  phraseInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#bde0fe',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#606c38',
  },
});
