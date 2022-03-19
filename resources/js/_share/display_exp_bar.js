// 参照：
// https://progressbarjs.readthedocs.io/en/latest/api/shape/
export default class displayExpBar {
    constructor() {
        this.ProgressBar = require('progressbar.js');
        this.expContainer = document.querySelector('#exp_container');

        this.currentExp = Number(this.expContainer.dataset.exp);
        this.overflowExp = Number(this.expContainer.dataset.overflow);
    }

    run() {
        const bar = new this.ProgressBar.Line(this.expContainer, {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: 1000,
            color: '#FFEA82',
            trailColor: '#eee',
            svgStyle: { width: '100%', height: '100%' },
        });

        // 経験値更新前の値を初期値にセット
        bar.set(this.currentExp / 100);
        // 経験値更新後の値までのアニメーション
        bar.animate(1);

        // レベルアップしていなければreturn
        if (this.overflowExp === 0) return;

        // レベルアップした場合、0に戻したうえでアップ後の値をアニメーション
        setTimeout(() => {
            bar.set(0);
            bar.animate(this.overflowExp / 100);
        }, 1000);

        return;
    }
}
