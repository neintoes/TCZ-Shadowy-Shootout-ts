namespace SpriteKind {
    export const UI: number = SpriteKind.create();
}

class GameManager {
    private wave_number: number = 0;
    private enemy_count: number = 0;
    private tilemapManager: TilemapManager;
    private tileMapLevels: tiles.TileMapData[];
    private overlapManager: OverlapManager;
    public level: number = 0;
    private ui: UI;
    public playerSprite: PlayerSprite;

    constructor(tilemapsToLoad: tiles.TileMapData[]) {
        this.tileMapLevels = tilemapsToLoad;
        this.ui = new UI(this.playerSprite.sprite);
        this.initialiseScene();
        this.initialisePlayer();
        // this.onUpdates();
        // this.onUpdateIntervals();
        this.overlapManager = new OverlapManager();
    }

    private initialiseScene(): void {
        this.tilemapManager = new TilemapManager(this.tileMapLevels[this.level], this.playerSprite);
        this.tilemapManager.buildLevel();
    }

    private initialisePlayer(): void {
        info.setLife(3);
        this.playerSprite = new PlayerSprite();
    }


    // on updates


    // on update intervals
}