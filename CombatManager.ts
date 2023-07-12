class CombatManager {

    public enemyCount: number = 0;
    public waveNumber: number = 0;

    constructor() {
        this.registerOverlaps();
        this.spawnWave();
    }

    private spawnWave(): void {
        this.waveNumber += 1;
        for (let i = 0; i < this.waveNumber; i++) {
            new EnemySprite();
            this.enemyCount += 1;
        }
        music.beamUp.play();
    }

    private registerOverlaps(): void {

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite: Sprite, enemy: Sprite): void {
            info.changeLifeBy(-1);
            music.knock.play();
            playerSprite.setVelocity(enemy.vx * enemy.data.knockbackForce, enemy.vy * enemy.data.knockbackForce)
            Render.jumpWithHeightAndDuration(playerSprite, 2, 300)
            timer.after(300, function (): void {
                playerSprite.setVelocity(0, 0);
            });
            new EnemySprite();
            enemy.destroy();
        });

        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy: Sprite): void {
            info.changeScoreBy(100);
            this.enemyCount -= 1;
            if(this.enemyCount < 1) {
                this.spawnWave();
            }
            projectile.destroy();
            enemy.destroy(effects.ashes);
        });
    }
}