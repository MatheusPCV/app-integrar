import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

function DashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Cartões de informações */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Usuários Ativos</Text>
          <Text style={styles.cardValue}>1,200</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Novos Cadastros</Text>
          <Text style={styles.cardValue}>150</Text>
        </View>
      </View>

      {/* Primeiro Gráfico: Gráfico de Linha */}
      <Text style={styles.chartTitle}>Ocorrência semanal dos botões</Text>
      <LineChart
        data={{
          labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
          datasets: [
            {
              data: [2, 4, 2, 8, 9, 4, 5],
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // Largura do gráfico
        height={220}
        yAxisSuffix="x"
        chartConfig={{
          backgroundColor: "#e9edc9",
          backgroundGradientFrom: "#bde0fe",
          backgroundGradientTo: "#8ecae6",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(106, 138, 134, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(69, 123, 157, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#6b705c",
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Segundo Gráfico: Gráfico de Barras */}
      <Text style={styles.chartTitle}>Ocorrências diárias de cada botão</Text>
      <BarChart
        data={{
          labels: ["Botão 1", "Botão 2", "Botão 3", "Botão 4"],
          datasets: [
            {
              data: [25, 20, 30, 40],
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // Largura do gráfico
        height={220}
        yAxisSuffix="x"
        chartConfig={{
          backgroundColor: "#e9edc9",
          backgroundGradientFrom: "#bde0fe",
          backgroundGradientTo: "#8ecae6",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(106, 138, 134, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(69, 123, 157, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            strokeWidth: 0.5,
          },
        }}
        style={styles.chart}
      />
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#fffaf0', // Fundo claro
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b705c',
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    width: '40%',
    backgroundColor: '#e9edc9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#457b9d',
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 22,
    color: '#606c38',
    fontWeight: 'bold',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b705c',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
  },
});
