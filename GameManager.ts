namespace SpriteKind {
    export const UI: number = SpriteKind.create();
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
        this.initialiseScene();
        this.combatManager = new CombatManager();
        this.onUpdates();
    }

    private initialiseScene(): void {
        this.tilemapManager = new TilemapManager(this.tileMapLevels[this.level], this.playerSprite.sprite);
        this.tilemapManager.buildLevel();
        Render.setViewAngleInDegree(90)
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