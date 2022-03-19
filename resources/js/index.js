import displayChart from '@js/_share/display_chart';
import displayExpBar from '@js/_share/display_exp_bar';

window.addEventListener('DOMContentLoaded', () => {
    const userId = document.querySelector('.js-chart-wrapper').dataset.userId;

    if (!userId) throw 'ユーザーが見つかりません';

    new displayChart(userId).run();

    new displayExpBar().run();
});
