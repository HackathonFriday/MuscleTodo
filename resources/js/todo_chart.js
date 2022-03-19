// scssファイルをバンドル
import '@scss/todo_chart.scss';

class displayChart {
    constructor() {
        // @TODO 動的に変える
        this.userId = 3;

        this.Chart = require('chart.js');
        this.barChartCanvas = document.querySelector('#js-barChart');
        this.doughnutChartCanvas = document.querySelector('#js-doughnutChart');
    }

    async run() {
        // fetchでapiリクエスト
        const params = new URLSearchParams({ user_id: this.userId });
        const response = await fetch(
            `http://localhost:3000/api/fetch_task?${params}`
        );
        const data = await response.json();

        // 棒グラフ更新
        const countPerIsDone = this.countTasksByIsDone(data.tasks);
        this.displayBarChart(countPerIsDone);

        // 円グラフ更新
        const countPerCategory = this.countTasksByCategory(data.tasks);
        this.displayDoughnutChart(countPerCategory);

        return;
    }

    countTasksByIsDone(tasks) {
        const countPerIsDone = { done: {}, notDone: {} };

        tasks.forEach((task, i) => {
            // taskのカテゴリ名が設定されている時
            if (countPerIsDone.done[task.category_name] === undefined) {
                // 条件がfalseでも、定義（初期化）のため0を入れる
                countPerIsDone.done[task.category_name] = task.is_done ? 1 : 0;
                countPerIsDone.notDone[task.category_name] = task.is_done
                    ? 0
                    : 1;
                // taskのカテゴリが未定義の時
            } else {
                // 条件がfalseでも、定義（初期化）のため0を入れる
                task.is_done
                    ? countPerIsDone.done[task.category_name]++
                    : countPerIsDone.notDone[task.category_name]++;
            }
        });

        return countPerIsDone;
    }

    displayBarChart(countPerIsDone) {
        const type = 'horizontalBar';

        const data = {
            labels: Object.keys(countPerIsDone.done),
            datasets: [
                {
                    label: '完了',
                    data: Object.values(countPerIsDone.done),
                    backgroundColor: this.getColorList(),
                    borderWidth: 0,
                },
                {
                    label: '未完了',
                    data: Object.values(countPerIsDone.notDone),
                    // それぞれの棒の背景を個別に指定可能
                    backgroundColor: 'lightgray',
                    borderWidth: 0,
                },
            ],
        };

        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 400,
                        },
                    },
                ],
            },
            // 積み上げグラフ
            scales: {
                xAxes: [
                    {
                        stacked: true,
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                    },
                ],
            },
            title: {
                display: true,
                text: 'カテゴリごとの完了率',
                fontSize: 18,
            },
        };

        new this.Chart(this.barChartCanvas, { type, data, options });
    }

    countTasksByCategory(tasks) {
        const countPerCategory = {};

        tasks.forEach((task) => {
            countPerCategory[task.category_name]
                ? countPerCategory[task.category_name]++
                : (countPerCategory[task.category_name] = 1);
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
                text: '完了タスク内訳',
                fontSize: 18,
            },
        };

        new this.Chart(this.doughnutChartCanvas, { type, data, options });
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

window.addEventListener('DOMContentLoaded', () => new displayChart().run());
