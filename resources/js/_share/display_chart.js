export default class displayChart {
    constructor(userId) {
        this.userId = userId;

        this.Chart = require('chart.js');
        this.barChartCanvas = document.querySelector('#js-barChart');
        this.doughnutChartCanvas = document.querySelector('#js-doughnutChart');
    }

    /**
     * 一通りの処理を呼び出す基幹method
     * ・apiでそのユーザーに紐付くtask一覧を取得し、
     * ・2種類のグラフに表示
     *
     * @returns
     */
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

    /**
     * 棒グラフ表示用にデータを整形
     * タスクのカテゴリごとの件数を完了/未完了に分けてオブジェクトに格納
     *
     * @param {array} tasks
     * @returns
     */
    countTasksByIsDone(tasks) {
        const countPerIsDone = { done: {}, notDone: {} };

        tasks.forEach((task, i) => {
            // taskのカテゴリが未定義の場合
            if (countPerIsDone.done[task.category_name] === undefined) {
                // 条件がfalseでも、定義（初期化）のため0を入れる
                countPerIsDone.done[task.category_name] = task.is_done ? 1 : 0;
                countPerIsDone.notDone[task.category_name] = task.is_done
                    ? 0
                    : 1;
                // taskのカテゴリ名が設定されている時
            } else {
                task.is_done
                    ? countPerIsDone.done[task.category_name]++
                    : countPerIsDone.notDone[task.category_name]++;
            }
        });

        return countPerIsDone;
    }

    /**
     * 整形したデータに基づき、棒グラフを表示
     *
     * @param {object} countPerIsDone
     */
    displayBarChart(countPerIsDone) {
        const type = 'horizontalBar';

        const data = {
            labels: Object.keys(countPerIsDone.done),
            datasets: [
                {
                    label: '完了',
                    data: Object.values(countPerIsDone.done),
                    backgroundColor: this.getColorList(
                        Object.keys(countPerIsDone.done).length
                    ),
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
                fontSize: 30,
            },
        };

        new this.Chart(this.barChartCanvas, { type, data, options });
    }

    /**
     * 円グラフ表示用にデータを整形
     * タスクのカテゴリごとの件数をオブジェクトに格納
     *
     * @param {array} tasks
     * @returns
     */
    countTasksByCategory(tasks) {
        const countPerCategory = {};

        tasks.forEach((task) => {
            if (!task.is_done) return;

            countPerCategory[task.category_name]
                ? countPerCategory[task.category_name]++
                : (countPerCategory[task.category_name] = 1);
        });

        return countPerCategory;
    }

    /**
     * 整形したデータに基づき、円グラフを表示
     *
     * @param {object} countPerCategory
     */
    displayDoughnutChart(countPerCategory) {
        // ドーナツグラフ
        const type = 'doughnut';

        const data = {
            labels: Object.keys(countPerCategory),
            datasets: [
                {
                    data: Object.values(countPerCategory),
                    // dataごとの背景色
                    backgroundColor: this.getColorList(
                        Object.keys(countPerCategory).length
                    ),
                },
            ],
        };

        const options = {
            // 真ん中の空洞の大きさ
            cutoutPercentage: 40,
            title: {
                display: true,
                text: '完了タスク内訳',
                fontSize: 30,
            },
        };

        new this.Chart(this.doughnutChartCanvas, { type, data, options });
    }

    /**
     * グラフに表示する色を優先順位順にまとめて管理し、countの数だけ先頭からreturn
     *
     * @param {number} count グラフが必要とする色の数
     * @returns {array}
     */
    getColorList(count) {
        const colorsArray = [
            'tomato',
            'mediumseagreen',
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

        return colorsArray.slice(0, count);
    }
}
