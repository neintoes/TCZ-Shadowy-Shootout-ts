namespace SpriteKind {
    export const UI: number = SpriteKind.create();
    // GH2
    export const Bomb: number = SpriteKind.create();
    // end GH2
}

class GameManager {
    public playerSprite: PlayerSprite;
    private tilemapManager: TilemapManager;
    private tileMapLevels: tiles.TileMapData[];
    public level: number = 0;
    private combatManager: CombatManager;
    private ui: UI;

    constructor(tilemapsToLoad: tiles.TileMapData[]) {
        this.tileMapLevels = tilemapsToLoad;
        this.initialisePlayer();
        this.ui = new UI(this.playerSprite.sprite);
        this.tilemapManager = new TilemapManager(this.tileMapLevels[this.level], this.playerSprite.sprite);
        this.combatManager = new CombatManager();
        this.onUpdates();
    }

    private initialisePlayer(): void {
        info.setLife(3);
        this.playerSprite = new PlayerSprite();
    }

    // on updates
    private onUpdates(): void {
        game.onUpdate(function(): void {
            this.ui.checkDanger();
            this.ui.updateEnemyCounter(this.combatManager.enemyCount)
        });
    }
}