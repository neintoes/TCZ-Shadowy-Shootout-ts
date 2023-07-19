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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`1900190003030303030303030303030303030303030303030303030303030100000000000000000000000000000000000000000001030300020000000000000000000000010000000100000000000303000006060600000000000000000006060000000000000003030000000000000100000000000000000000000000000001030300000100000606060606060605060000060506060606060303000000000006010000010600000000000006010000000603030000000000060000000006000000000000050000000105030306060600000601000001060000000000000601000000040303000000000006060006050600000000000006060600000403030000000000060000000000000001000000000000000004030300000100000600010000000006060606000000040404040303000006000006000000000000060606060000000000010403030000060000060000000000000001000000000000000004030300000600000606050600000605060000060606000404040303000006000006010000000000010600000601000000010403030000010000060000000000000006000005000000000005030300000600070807000000000000060000060000000000060303000006000006010000000700010600000600000100000603030000060000060606060608060605000005000000000005030300000000000100000000070000010000060100000701060303000600060000000000000000000000000606060008060603030000000000000000000000000100000000000000070000030301000000000000000000000000000000000000000000010303030303030303030303030303030303030303030303030303`, img`
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
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth2,myTiles.tile5,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
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
            case "wall":
            case "tile5":return tile5;
            case "up":
            case "tile6":return tile6;
            case "down":
            case "tile7":return tile7;
            case "left":
            case "tile8":return tile8;
            case "right":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
