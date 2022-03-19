import displayChart from '@js/_share/display_chart';
import displayExpBar from '@js/_share/display_exp_bar';

window.addEventListener('DOMContentLoaded', () => {
    const userId = document.querySelector('.user_id') ?? 3;
    new displayChart(userId).run();

    new displayExpBar().run();
});
