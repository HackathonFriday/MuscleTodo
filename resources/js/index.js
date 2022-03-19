import displayChart from '@js/_share/display_chart';

window.addEventListener('DOMContentLoaded', () => {
    const userId = document.querySelector('.user_id') ?? 3;
    new displayChart(userId).run();


    // const animateExpBar = () => {
    
    // }
    // animateExpBar();
});

