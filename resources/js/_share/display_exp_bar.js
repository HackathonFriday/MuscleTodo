// 参照：
// https://progressbarjs.readthedocs.io/en/latest/api/shape/
export default class displayExpBar {
    constructor() {
        this.animationDuration = 500;
        this.level = document.querySelector('.js-user_level');

        this.ProgressBar = require('progressbar.js');
        this.expContainer = document.querySelector('#exp_container');

        this.currentExp = Number(this.expContainer.dataset.currentExp);
        this.oldExp = Number(this.expContainer.dataset.oldExp);
    }

    run() {
        const bar = new this.ProgressBar.Line(this.expContainer, {
            strokeWidth: 10,
            easing: 'easeInOut',
            duration: this.animationDuration,
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

        // レベルアップしている場合、レベルアップ前→レベルアップ後の表示処理をするため、一旦レベルアップ前へ
        this.level.textContent = Number(this.level.textContent) - 1;

        // 経験値更新後の値までのアニメーション
        bar.animate(1);

        // レベルアップした場合、0に戻したうえでアップ後の値をアニメーション
        setTimeout(() => {
            // レベルアップ処理（数字部分）
            this.level.textContent = Number(this.level.textContent) + 1;

            // レベルアップ処理（バー部分）
            bar.set(0);
            bar.animate(currentProgressExp / 100);
        }, this.animationDuration);

        return;
    }
}
