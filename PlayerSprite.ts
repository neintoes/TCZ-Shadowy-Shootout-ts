class PlayerSprite {

    public sprite: Sprite;
    readonly projectileSpeed: number = 120; 
    // GH2
    private hasBomb: boolean;
    // end GH2

    constructor() {
        this.sprite = Render.getRenderSpriteVariable();
        this.registerControls();
        // GH2
        this.hasBomb = true;
        // end GH2
    }

    private fire (): void {
        let dirX = Render.getAttribute(Render.attribute.dirX);
        let dirY = Render.getAttribute(Render.attribute.dirY);
        let projectile = sprites.createProjectileFromSprite(
            assets.image`projectile`,
            this.sprite,
            dirX * this.projectileSpeed,
            dirY * this.projectileSpeed
        )
        Render.setSpriteAttribute(projectile, RCSpriteAttribute.ZOffset, randint(-3, 0));
    }

    private registerControls(): void {
        Render.moveWithController(4, 3);
        controller.A.onEvent(ControllerButtonEvent.Pressed, function (): void {
            this.fire();
        });

        // GH2
        controller.B.onEvent(ControllerButtonEvent.Pressed, function(): void {
            if(this.hasBomb) {
                this.hasBomb = false;
                let bomb = new Bomb(this.sprite);
                bomb.throw();
                timer.after(bomb.fuse, function (): void {
                    bomb.detonate();
                    this.hasBomb = true;
                });
            }
        });
        // end GH2
    }
}