// GH2
namespace scenery {
    
    export function openDoor(door: tiles.Location): void {
        tiles.setWallAt(door, false);
    }

    export function getDoorFromEntry(doorEntry: tiles.Location): tiles.Location {
        let door: tiles.Location = null;
        let adjacentTiles: tiles.Location[] = tilesAdvanced.getAdjacentTiles(doorEntry, 2);
        adjacentTiles.forEach(function (tile: tiles.Location): void {
            if (tile.getImage().equals(assets.tile`door`)) {
                door = tile;
            }
        })
        return door;
    }

    export function closeDoor(door: tiles.Location): void {
        let playerSprite: Sprite = sprites.allOfKind(SpriteKind.Player)[0];
        let adjacentTiles: tiles.Location[] = tilesAdvanced.getAdjacentTiles(door, 2)
        if(!tilesAdvanced.tileIsInList(playerSprite.tilemapLocation(), adjacentTiles)) {
            tiles.setWallAt(door, true);
        } 
    }
}
// end GH2