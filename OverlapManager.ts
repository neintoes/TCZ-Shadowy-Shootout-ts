class OverlapManager {

    constructor() {
        this.registerOverlaps();
    }

    private registerOverlaps(): void {
    //     def caught(me, enemy):
    // info.change_life_by(-1)
    // music.knock.play()
    // me.set_velocity(enemy.vx * knockback_force, enemy.vy * knockback_force)
    // Render.jump_with_height_and_duration(me, 2, 300)
    // timer.after(300, land)
    // enemy.destroy()
    // spawn_enemy()
    //     sprites.on_overlap(SpriteKind.Player, SpriteKind.enemy, caught)
        
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (me: Sprite, enemy: Sprite): void {
            info.changeLifeBy(-1);
            music.knock.play();
            me.setVelocity(enemy.vx * enemy.data.knockback_force, enemy.vy * enemy.data.knockback_force)
        })
    }
}