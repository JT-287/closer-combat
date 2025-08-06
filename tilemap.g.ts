// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000000101000000010000000000000000000001010103010101030100000001000000010100000001000001000000010000000101000000010000010000000200000001010000000100000100000001000000010100000002000000000000010000000101000000010000000001000100000001010000000100000000000001000000010100000001010201010101010103010101000000000000000000000000000001010001000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 2 . 2 . . . 2 . . . 2 
2 . . . 2 . . 2 . . . 2 . . . 2 
2 . . . 2 . . 2 . . . 2 . . . 2 
2 . . . 2 . . 2 . . . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 . . . . 2 . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
