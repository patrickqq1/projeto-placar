import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  const chartOptions = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Time A', 'Time B', 'Time C', 'Time D', 'Time E'],
    },
  };

  const chartSeries = [
    {
      name: 'Pontuação',
      data: [120, 200, 150, 80, 100],
    },
  ];

  return (
    <Flex direction="column" align="center" p={4}>
      <Box w="600px" h="400px">
        <Chart options={chartOptions} series={chartSeries} type="bar" />
      </Box>
      <Box mt={6}>
        <Text fontSize="xl" fontWeight="bold">Placar de Times</Text>
        <Flex align="center" mt={2}>
          <Text fontWeight="bold" mr={4}>Time A:</Text>
          <Text>120 pontos</Text>
        </Flex>
        <Flex align="center" mt={2}>
          <Text fontWeight="bold" mr={4}>Time B:</Text>
          <Text>200 pontos</Text>
        </Flex>
        <Flex align="center" mt={2}>
          <Text fontWeight="bold" mr={4}>Time C:</Text>
          <Text>150 pontos</Text>
        </Flex>
        <Flex align="center" mt={2}>
          <Text fontWeight="bold" mr={4}>Time D:</Text>
          <Text>80 pontos</Text>
        </Flex>
        <Flex align="center" mt={2}>
          <Text fontWeight="bold" mr={4}>Time E:</Text>
          <Text>100 pontos</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
