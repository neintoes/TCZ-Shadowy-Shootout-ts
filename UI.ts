class UI {
    private crosshair: Sprite;
    private warningSprite: Sprite;
    private enemyCounter: TextSprite;
    private playerSprite: Sprite

    constructor(playerSprite: Sprite) {
        this.registerCrosshair();
        this.registerWarning();
        this.registerEnemyCounter();
        this.playerSprite = playerSprite;
    }

    private registerCrosshair(): void {
        this.crosshair = sprites.create(assets.image`crosshair`, SpriteKind.UI);
        this.crosshair.setFlag(SpriteFlag.RelativeToCamera, true);
    }

    private registerEnemyCounter(): void {
        this.enemyCounter = textsprite.create("", 1, 3);
        this.enemyCounter.setFlag(SpriteFlag.RelativeToCamera, true);
        this.enemyCounter.setPosition(40, 115);
    }

    private registerWarning(): void {
        this.warningSprite = sprites.create(assets.image`warning`, SpriteKind.UI);
        this.warningSprite.setFlag(SpriteFlag.RelativeToCamera, true);
        animation.runImageAnimation(this.warningSprite, assets.animation`warning animation`, 600, true);
    }

    public updateEnemyCounter(count: number): void {
        this.enemyCounter.setText("Left in wave:" + count);
    }

    public checkDanger(): void {
        let nearbyEnemies = spriteutils.getSpritesWithin(SpriteKind.Enemy, 80, this.playerSprite)
        if (nearbyEnemies.length > 0) {
            this.warningSprite.setFlag(SpriteFlag.Invisible, false)
        }
        else {
            this.warningSprite.setFlag(SpriteFlag.Invisible, true)
        }
    }
}
