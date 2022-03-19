// 参照：
// https://progressbarjs.readthedocs.io/en/latest/api/shape/
export default class displayExpBar {
    constructor() {
        this.ProgressBar = require('progressbar.js');
        this.expContainer = document.querySelector('#exp_container');

        this.currentExp = Number(this.expContainer.dataset.currentExp);
        this.oldExp = Number(this.expContainer.dataset.oldExp);
    }

    run() {
        const bar = new this.ProgressBar.Line(this.expContainer, {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: 500,
            color: 'limegreen',
            trailColor: '#eee',
            svgStyle: { width: '100%', height: '100%' },
        });

        // 経験値更新前の値を初期値にセット
        const oldprogressExp = this.oldExp % 100;
        bar.set(oldprogressExp / 100);

        const currentProgressExp = this.currentExp % 100;

        // 双方が同じ値の場合は、経験値を獲得していない
        if (oldprogressExp === currentProgressExp) return;

        // currentの方が大きい場合はレベルアップしていないとみなし、animateだけする
        if (oldprogressExp < currentProgressExp) {
            return bar.animate(currentProgressExp / 100);
        }

        // 経験値更新後の値までのアニメーション
        bar.animate(1);

        // レベルアップした場合、0に戻したうえでアップ後の値をアニメーション
        setTimeout(() => {
            bar.set(0);
            bar.animate(currentProgressExp / 100);
        }, 500);

        return;
    }
}
