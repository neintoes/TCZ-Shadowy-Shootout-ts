class PlayerSprite {

    public sprite: Sprite;
    readonly projectileSpeed: number = 120; 

    constructor() {
        this.sprite = Render.getRenderSpriteVariable();
        this.registerControls();
    }


    private fire (): void {
        let dirX = Render.getAttribute(Render.attribute.dirX);
        let dirY = Render.getAttribute(Render.attribute.dirY);
        let projectile = sprites.createProjectileFromSprite(
            assets.image("projectile"),
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
    }
}