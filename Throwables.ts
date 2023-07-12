// GH2
interface iThrowable {
    throwSpeed: number;
    throw(playerSprite: Sprite): void;
}

class Bomb extends BaseSprite implements iThrowable {
    readonly throwSpeed: number = 60;
    readonly fuse: number = 750;
    private playerSprite: Sprite;

    constructor(playerSprite: Sprite) {
        super(assets.image`bomb`, SpriteKind.Bomb);
        this.playerSprite = playerSprite;
    }

    public throw(): void {
        let dirX = Render.getAttribute(Render.attribute.dirX);
        let dirY = Render.getAttribute(Render.attribute.dirY)
        this.sprite.setPosition(this.playerSprite.x, this.playerSprite.y);
        this.sprite.setVelocity(dirX  * this.throwSpeed, dirY * this.throwSpeed);
        Render.jumpWithHeightAndDuration(this.sprite, 5, 750);
    }

    public detonate(): void {
        animation.runImageAnimation(this.sprite, assets.animation`explosion`, 100, false);
        let nearbyEnemies = spriteutils.getSpritesWithin(SpriteKind.Enemy, 60, this.sprite)
        nearbyEnemies.forEach(function(ghost: Sprite): void {
            ghost.destroy();
        });
        pause(400);
        this.sprite.destroy();
    }
}
// end GH2