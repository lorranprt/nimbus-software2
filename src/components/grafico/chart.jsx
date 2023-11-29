import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./chart.css";


const ChartComponent = () => {
  const chartRef = useRef(null);

    const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const [chartData] = useState({
    labels: meses,
    datasets: [
      {
        label: "Chuva (mm)",
        data: [50, 80, 120, 70, 90, 60, 30, 45, 85, 110, 75, 60],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Umidade (%)",
        data: [65, 70, 80, 75, 85, 60, 40, 55, 75, 90, 70, 55],
        backgroundColor: "rgba(165, 75, 192, 0.2)",
        borderColor: "#bca5c0",
        borderWidth: 1,
      },
      {
        label: "Temperatura (°C)",
        data: [22, 24, 26, 20, 18, 22, 28, 30, 26, 24, 20, 18],
        backgroundColor: "rgba(192, 75, 75, 0.2)",
        borderColor: "#c0704b",
        borderWidth: 1,
      },
      {
        label: "Velocidade do Vento (km/h)",
        data: [10, 12, 15, 8, 10, 14, 18, 20, 16, 12, 10, 8],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "#ffee00",
        borderWidth: 1,
      },
      {
        label: "Visibilidade (km)",
        data: [20, 18, 16, 22, 25, 20, 15, 18, 20, 22, 25, 20],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#369edb",
        borderWidth: 1,
      },
      {
        label: "Temperatura Aparente (°C)",
        data: [23, 25, 28, 22, 20, 23, 30, 32, 28, 25, 22, 20],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#ff6384",
        borderWidth: 1,
      },
    ],
  });

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const exportToPDF = () => {
    const canvas = document.getElementById("myChart");

    if (canvas) {
      html2canvas(canvas).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("grafico.pdf");
      });
    }
  };

  const exportToCSV = () => {
    const { labels, datasets } = chartData;
    const csvData =
      `Meses,${labels.join(",")}\n` +
      `${datasets[0].label},${datasets[0].data.join(",")}\n` +
      `${datasets[1].label},${datasets[1].data.join(",")}\n` +
      `${datasets[2].label},${datasets[2].data.join(",")}`;

    const blob = new Blob([csvData], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "grafico.csv";
    link.click();
  };

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
  
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  }, [chartData, chartOptions]);

  return (
    <div style={{ height: "100vh", padding: "5vw" }}>
      <h1>Condições Meteorológicas</h1>
      <canvas id="myChart"></canvas>
      <div style={{ marginTop: "20px" }}>
        <button className='myButton' onClick={exportToPDF}>Exportar para PDF</button>
        <button className='myButton' onClick={exportToCSV}>Exportar para CSV</button>
      </div>
    </div>
  );
};

export default ChartComponent;