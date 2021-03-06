// 参照：
// https://progressbarjs.readthedocs.io/en/latest/api/shape/
export default class displayExpBar {
    constructor(levelTagName, expContainerName) {
        this.animationDuration = 500;
        this.ProgressBar = require('progressbar.js');

        this.level = document.querySelector(levelTagName);
        this.expContainer = document.querySelector(expContainerName);

        if (!this.level || !this.expContainer) return;

        this.currentExp = Number(this.expContainer.dataset.currentExp);
        this.oldExp = Number(this.expContainer.dataset.oldExp);
    }

    run() {
        const bar = new this.ProgressBar.Line(this.expContainer, {
            strokeWidth: 4,
            easing: 'linear',
            duration: this.animationDuration,
            color: '#f4eab7',
            trailColor: '#eee',
            svgStyle: { width: '100%', height: '100%' },
            from: { color: '#f4eab7' },
            to: { color: '#0acf0a' },
            step: (state, bar) => {
                bar.path.setAttribute('stroke', state.color);
            },
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
