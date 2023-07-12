class TilemapManager {
    public tileMap: tiles.TileMapData;
    public playerSprite: Sprite;

    constructor(tileMap: tiles.TileMapData, playerSprite: Sprite) {
        this.tileMap = tileMap;
        this.playerSprite = playerSprite;
        this.buildLevel();
    }

    private placePlayer(): void {
        tiles.placeOnRandomTile(this.playerSprite, assets.tile`player spawn`);
    }

    public buildLevel(): void {
        tiles.setCurrentTilemap(this.tileMap)
        this.placePlayer();
    }
}