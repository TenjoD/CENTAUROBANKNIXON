import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  standalone: false
})
export class ControlPanelComponent implements OnInit {

  constructor(public languageService: LanguageService){}

  public months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public selectedMonth: 'Enero' | 'Febrero' | 'Marzo' | 'Abril' | 'Mayo' | 'Junio' | 'Julio' | 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' | 'Diciembre' = 'Enero';
  public barChartLabels: string[] = ['Tarjeta Debito de Centauro Bank', 'Tarjeta Black Debito de Centauro Bank', 'Tarjeta Debito de Centauro Bank con funcionalidad de Transporte',
    'Tarjeta Debito de Centauro Bank', 'Tarjeta Debito de Centauro Bank', 'Tarjeta Debito de Centauro Bank'];
  public barChartData: number[] = [10, 20, 30, 10, 20, 30];
  private pieChart: any;
  private barChart: any;

  myPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    if (ctx) {  // Asegúrate de que el canvas está presente en el DOM
      this.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [{
            label: 'Clientes',
            data: [50, 100, 150, 200, 120, 100, 100, 180, 400, 130, 120, 80],
            backgroundColor: [
              '#4E73DF', '#1CC88A', '#36B9CC', '#F4B400', '#FF6F61', '#FFD700',
              '#6F42C1', '#E83E8C', '#F8D7DA', '#20C997', '#343A40', '#28A745'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `Clientes: ${tooltipItem.raw}`;
                }
              }
            }
          }
        }
      });
    } else {
      console.error('El canvas con id "pieChart" no se encontró en el DOM');
    }
  }

  ngOnInit() {
    this.createPieChart(); // Crear gráfico de pastel
    this.createBarChart(); // Crear gráfico de barras
  }

  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Productos',
          data: [50, 100, 150, 200, 120, 100, 100, 180, 400, 130, 120, 80],
          backgroundColor: ['#4E73DF', '#1CC88A', '#36B9CC', '#F4B400', '#FF6F61', '#FFD700', '#6F42C1', '#E83E8C', '#F8D7DA', '#20C997', '#343A40', '#28A745'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return `Clientes: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });
  }

  updateChartData() {
    // Actualizar datos para el gráfico de barras
    const barData = this.getBarDataForMonth(this.selectedMonth);
    this.barChart.data.datasets[0].data = barData;
    this.barChart.update();
  }

  getDataForMonth(month: string): number[] {
    const data: { [key: string]: number[] } = {
      'Enero': [50, 100, 150, 200, 120, 100, 100, 180, 400, 130, 120, 80],
      'Febrero': [12, 8, 6],
      'Marzo': [20, 25, 10],
      'Abril': [30, 20, 15],
      'Mayo': [5, 8, 12],
      'Junio': [18, 20, 25],
      'Julio': [15, 25, 30],
      'Agosto': [10, 12, 20],
      'Septiembre': [15, 18, 22],
      'Octubre': [20, 25, 30],
      'Noviembre': [5, 8, 15],
      'Diciembre': [10, 12, 18],
    };
    return data[month] || [0, 0, 0];
  }
  
  getBarDataForMonth(month: string): number[] {
    const data: { [key: string]: number[] } = {
      'Enero': [10, 15, 5],
      'Febrero': [12, 8, 6],
      'Marzo': [20, 25, 10],
      'Abril': [30, 20, 15],
      'Mayo': [5, 8, 12],
      'Junio': [18, 20, 25],
      'Julio': [12, 10, 5],
      'Agosto': [8, 7, 12],
      'Septiembre': [18, 14, 15],
      'Octubre': [10, 20, 15],
      'Noviembre': [12, 15, 10],
      'Diciembre': [15, 12, 10],
    };
    return data[month] || [0, 0, 0];
  }
  
  createBarChart() {
    const ctx = document.getElementById('barChartCanvas') as HTMLCanvasElement;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.barChartLabels,
        datasets: [{
          label: 'Cantidad de Clientes',
          data: this.barChartData,  // Inicialmente los datos de barras
          backgroundColor: '#36B9CC',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                return `Clientes: ${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });
  }
  
}
