class CombatManager {

    public enemyCount: number = 0;
    public waveNumber: number = 0;

    constructor() {
        this.registerOverlaps();
        this.setupEnemyDestructionhandler();
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

    private setupEnemyDestructionhandler(): void {
        sprites.onDestroyed(SpriteKind.Enemy, function(): void {
            this.enemyCount -= 1;
            info.changeScoreBy(100);
            if (this.enemyCount < 1) {
                this.spawnWave();
            }
        });
    }

    private registerOverlaps(): void {

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (playerSprite: Sprite, enemy: Sprite): void {
            enemy.data.positionGhost();
            music.knock.play();
            playerSprite.setVelocity(enemy.vx * enemy.data.knockbackForce, enemy.vy * enemy.data.knockbackForce)
            Render.jumpWithHeightAndDuration(playerSprite, 2, 300)
            timer.after(300, function (): void {
                playerSprite.setVelocity(0, 0);
            });
            info.changeLifeBy(-1);
        });

        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile: Sprite, enemy: Sprite): void {
            projectile.destroy();
            enemy.destroy(effects.ashes);
        });
    }
}