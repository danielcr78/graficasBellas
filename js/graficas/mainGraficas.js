//Primera Gráfica

function fillAsistenciaMural(afluenciaM,afluenciaMm,afluenciaJ,afluenciaV,afluenciaS,afluenciaD){

    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            afluenciaM,
            afluenciaMm,
            afluenciaJ,
            afluenciaV,
            afluenciaS,
            afluenciaD
          ],
          backgroundColor: [
            '#b27d49',
            '#a5300f',
            '#d55816',
            '#e18825',
            '#b19c7d',
            '#7f5f52'
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Martes',
          'Miercoles',
          'Jueves',
          'Vienres',
          'Sabado',
          'Domingo'
        ]
      },
      options: {
        responsive: true
      }
    };

    window.onload = function() {
      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myPie = new Chart(ctx, config);
    };

    var colorNames = Object.keys(window.chartColors);
}