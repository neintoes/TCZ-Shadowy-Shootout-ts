class EnemySprite extends BaseSprite{

    private knockbackForce: number = 4;
    readonly playerSprite: Sprite;

    constructor() {
        super(assets.image`ghost`, SpriteKind.Enemy);
        this.playerSprite = sprites.allOfKind(SpriteKind.Player)[0];
        this.positionGhost();
        this.handleMovement();
    }

    public positionGhost(): void {
        tiles.placeOnRandomTile(this.sprite, assets.tile`enemy spawn`)
        while(spriteutils.distanceBetween(this.sprite, this.playerSprite) < 250) {
            tiles.placeOnRandomTile(this.sprite, assets.tile`enemy spawn`)
        }
    }

    public handleMovement(): void {
        tilesAdvanced.followUsingPathfinding(this.sprite, this.playerSprite, randint(10, 60))
    }
}