import displayChart from '@js/display_chart';

const userId = document.querySelector('.user_id') ?? 3;
window.addEventListener('DOMContentLoaded', () =>
    new displayChart(userId).run()
);

// const animateExpBar = () => {

// }
// animateExpBar();
