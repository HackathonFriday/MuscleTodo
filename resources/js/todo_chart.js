class displayChart {
    constructor() {
        // @TODO 動的に変える
        this.userId = 3;
        
        this.Chart =  require('chart.js');
        this.doughnutChartCanvas = document.querySelector('#js-doughnutChart');
        this.barChartCanvas = document.querySelector('#js-barChart');
    }
    
    async run() {
        // fetchでapiリクエスト
        const params = new URLSearchParams({ user_id: this.userId });
        const response = await fetch(`http://localhost:3000/api/fetch_task?${params}`);
        const data = await response.json();

        // 円グラフ更新
        const countPerCategory = this.countTasksByCategory(data.tasks);
        this.displayDoughnutChart(countPerCategory);

        return;
    }

    countTasksByCategory(tasks) {
        const countPerCategory = {};

        tasks.forEach(task => {
            countPerCategory[task.category_name]
                ? countPerCategory[task.category_name]++
                : countPerCategory[task.category_name] = 1;
        });

        return countPerCategory;
    }

    displayDoughnutChart(countPerCategory) {
        // ドーナツグラフ
        const type = 'doughnut';

        const backgroundColor = this.getColorList();

        const data = {
            labels: Object.keys(countPerCategory),
            datasets: [
                {
                    data: Object.values(countPerCategory),
                    // dataごとの背景色
                    backgroundColor,
                },
            ],
        };

        const options = {
            // 真ん中の空洞の大きさ
            cutoutPercentage: 40,
            title: {
                display: true,
                text: 'Dooughnut Chart',
                fontSize: 18,
            },
        };

        new this.Chart(
            this.doughnutChartCanvas,
            { type, data, options }
        );
    }

    getColorList() {
        return [
            'tomato',
            'limegreen',
            'steelblue',
            'darkorchid',
            'teal',
            'lavender',
            'palevioletred',
            'gold',
            'skyblue',
            'mediumaquamarine',
            'mediumvioletred',
            'tan',
            'forestgreen',
            'steelblue',
            'maroon',
            'paleturquoise',
            'paleturquoise',
            'peachpuff',
        ];
    }
}

window.addEventListener('DOMContentLoaded', () => (new displayChart).run());