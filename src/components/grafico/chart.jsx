import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./chart.css";

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chartData] = useState({
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Medida Genrica",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [chartData]);

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
      labels.join(",") +
      "\n" +
      datasets[0].data.join(",");

    const blob = new Blob([csvData], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "grafico.csv";
    link.click();
  };

  return (
    <div style={{ height: "100vh", padding: "15vw" }}>
      <h1>Grafico</h1>
      <canvas id="myChart"></canvas>
      <button class='myButton'onClick={exportToPDF}>Exportar para PDF</button>
      <button class='myButton' onClick={exportToCSV}>Exportar para CSV</button>
    </div>
  );
};

export default ChartComponent;
