class EnemySprite extends BaseSprite{

    private knockbackForce: number = 4;

    constructor() {
        super(assets.image`ghost`, SpriteKind.Enemy);
    }

    public positionGhost(playerSprite: Sprite): void {
        tiles.placeOnRandomTile(this.sprite, assets.tile`enemy spawn`)
        while(spriteutils.distanceBetween(this.sprite, playerSprite) < 200) {
            tiles.placeOnRandomTile(this.sprite, assets.tile`enemy spawn`)
        }
    }

    public handleMovement(playerSprite: Sprite): void {
        tilesAdvanced.followUsingPathfinding(this.sprite, playerSprite, randint(10, 60))
    }

}