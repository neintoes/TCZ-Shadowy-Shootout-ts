class TilemapManager {
    public tileMap: tiles.TileMapData;
    public playerSprite: Sprite;

    constructor(tileMap: tiles.TileMapData, playerSprite: Sprite) {
        this.tileMap = tileMap;
        this.playerSprite = playerSprite;
        this.buildLevel();
        // GH2
        this.registerOverlaps();
        // end GH2
    }

    private placePlayer(): void {
        tiles.placeOnRandomTile(this.playerSprite, assets.tile`player spawn`);
    }

    public buildLevel(): void {
        tiles.setCurrentTilemap(this.tileMap)
        this.placePlayer();
    }

    // GH2
    private openDoor(door: tiles.Location): void {
        tiles.setWallAt(door, false);
    }

    private getDoorFromEntry(doorEntry: tiles.Location): tiles.Location {
        let door: tiles.Location = null;
        let adjacentTiles: tiles.Location[] = tilesAdvanced.getAdjacentTiles(doorEntry, 2);
        adjacentTiles.forEach(function (tile: tiles.Location): void {
            if (tile.getImage().equals(assets.tile`door`)) {
                door = tile;
            }
        })
        return door;
    }

    private closeDoor(door: tiles.Location): void {
        let adjacentTiles: tiles.Location[] = tilesAdvanced.getAdjacentTiles(door, 2)
        if (!tilesAdvanced.tileIsInList(this.playerSprite.tilemapLocation(), adjacentTiles)) {
            tiles.setWallAt(door, true);
        }
    }

    private registerOverlaps(): void {
        scene.onOverlapTile(SpriteKind.Player, assets.tile`door entry`, function (playerSprite: Sprite, doorEntry: tiles.Location): void {
            let door: tiles.Location = this.getDoorFromEntry(doorEntry);
            if (door) {
                this.openDoor(door);
                timer.background(function (): void {
                    while (!door.isWall()) {
                        pause(500);
                        this.closeDoor(door);
                    }
                })
            }
        });
    }
    // end GH2
}