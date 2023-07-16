// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1900190003030303030303030303030303030303030303030303030303030100000000000000000000000000000000000000000001030300020000000000000000000000010000000100000000000303000004040400000000000000000004040000000000000003030000000000000100000000000000000000000000000001030300000100000404040404040405040000040504040404040303000000000004010000010400000000000004010000000403030000000000040000000004000000000000050000000105030304040400000401000001040000000000000401000000040303000000000004040004050400000000000004040400000403030000000000040000000000000001000000000000000004030300000100000400010000000004040404000000040404040303000004000004000000000000040404040000000000010403030000040000040000000000000001000000000000000004030300000400000404050400000405040000040404000404040303000004000004010000000000010400000401000000010403030000010000040000000000000004000005000000000005030300000400000400000000000000040000040000000000040303000004000004010000000000010400000400000100000403030000040000040404040404040405000005000000000005030300000000000100000000000000010000040100000001040303000400040000000000000000000000000404040004040403030000000000000000000000000100000000000000000000030301000000000000000000000000000000000000000000010303030303030303030303030303030303030303030303030303`, img`
2222222222222222222222222
2.......................2
2.......................2
2..222.........22.......2
2.......................2
2.....222222222..22222222
2.....2....2......2....22
2.....2....2......2....22
2222..2....2......2....22
2.....22.222......222..22
2.....2................22
2.....2......2222...22222
2..2..2......2222......22
2..2..2................22
2..2..2222..222..222.2222
2..2..2.......2..2.....22
2.....2.......2..2.....22
2..2..2.......2..2.....22
2..2..2.......2..2.....22
2..2..222222222..2.....22
2................2.....22
2.2.2............222.2222
2.......................2
2.......................2
2222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "enemy spawn":
            case "tile1":return tile1;
            case "player spawn":
            case "tile2":return tile2;
            case "transparency16":return transparency16;
            case "door entry":
            case "tile3":return tile3;
            case "door":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
