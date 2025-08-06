namespace SpriteKind {
    export const rifle = SpriteKind.create()
    export const leg = SpriteKind.create()
    export const arm = SpriteKind.create()
    export const glass = SpriteKind.create()
    export const blood = SpriteKind.create()
    export const KillAnimation = SpriteKind.create()
    export const particle = SpriteKind.create()
    export const ammoCrate = SpriteKind.create()
}
namespace StatusBarKind {
    export const Ammo = StatusBarKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile1`)) {
        if (controller.B.isPressed()) {
            if (ToggleCrouch == false) {
                animation.runImageAnimation(
                mySprite3,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c . . . . . . . . . 
                    . c c c c c c . . . . . . . . . 
                    . c c c c c c c c . . . . . . . 
                    c c c c c c c c c . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c . . . . . . . . . 
                    . . . c c c c c . . . . . . . . 
                    . . c c c c c c c . . . . . . . 
                    . c c c c c c c c c . . . . . . 
                    . c c c c c c c c c . f f f . . 
                    c c c c c c c c c c c f f f . . 
                    c c c c c . c c c c c c f f . . 
                    c c c c . . . c c c c c f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . f f f f f f f . . . 
                    . . . . . . . f f f f f f . . . 
                    . . . . . . . c c c c f f . . . 
                    . . . . . . c c c c c f . . . . 
                    . . . . c c c c c c c . . . . . 
                    . . . c c c c c c c c . . . . . 
                    . . c c c c c c c c . . . . . . 
                    . c c c c c c c c c . . . . . . 
                    . c c c c c c c c . . . . . . . 
                    c c c c c c c c . . . . . . . . 
                    c c c c c c . . . . . . . . . . 
                    c c c c . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c . . . . . . . . . 
                    . . . c c c c c . . . . . . . . 
                    . . c c c c c c c . . . . . . . 
                    . c c c c c c c c c . . . . . . 
                    . c c c c c c c c c . f f f . . 
                    c c c c c c c c c c c f f f . . 
                    c c c c c . c c c c c c f f . . 
                    c c c c . . . c c c c c f . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c . . . . . . . . . 
                    . c c c c c c . . . . . . . . . 
                    . c c c c c c c c . . . . . . . 
                    c c c c c c c c c . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                200,
                false
                )
                pause(200)
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                tiles.setWallAt(location, false)
                timer.after(3000, function () {
                    tiles.setWallAt(location, true)
                })
            } else {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                tiles.setWallAt(location, false)
                timer.after(3000, function () {
                    tiles.setWallAt(location, true)
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.glass, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 3603, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
})
controller.combos.attachCombo("uu", function () {
    ToggleCrouch = false
    Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, 0)
    Render.moveWithController(2, 3, 1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HasAmmo == true) {
        statusbar2.value += -5
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 . . . . . . . . . . . . . 
            . . . 5 . 5 . . . . . . . . . . 
            . . . . 1 5 . . . . . . . . . . 
            . . . 5 5 1 . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f . . . . . . 
            . . . . . . . . . f f f . . . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . f f f b f f f 
            . . . . . . . f f f f . f f f f 
            . . . . . . . f f f . . . f f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . f f f c f f f . 
            . . . . . . f f f f . f f f f f 
            . . . . . . f f f . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `],
        100,
        false
        )
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        projectile = sprites.createProjectileFromSprite(img`
            5 5 
            5 5 
            `, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 500, Render.getAttribute(Render.attribute.dirY) * 500)
    } else {
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        statusbar.sayText("no ammo", 2000, false)
    }
})
controller.combos.attachCombo("dd", function () {
    ToggleCrouch = true
    Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, -5)
    Render.moveWithController(1, 2, 0.5)
})
statusbars.onStatusReached(StatusBarKind.Ammo, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Fixed, 0, function (status) {
    HasAmmo = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ammoCrate, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    5000,
    5000,
    255,
    0,
    100,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    mags += 1
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (mySprite.overlapsWith(value)) {
            sprites.destroy(value)
            animation.runImageAnimation(
            mySprite8,
            [img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ff....bbbbbbbbbb....
                ff....bbbbbbbbbb....
                ff....bbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                f.....bbbbbbbbbb....
                fff...bbbbbbbbbb....
                fff...bbbbbbbbbb....
                fff...bbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ff....bbbbbbbbbb....
                ffff..bbbbbbbbbb....
                ffff..bbbbbbbbbb....
                ffff..bbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                .ff...bbbbbbbbbb....
                cffff.bbbbbbbbbb....
                cffff.bbbbbbbbbb....
                cffff.bbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..ff..bbbbbbbbbb....
                ccffffbbbbbbbbbb....
                ccffffbbbbbbbbbb....
                ccffffbbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbb....
                .fffffbbbbbbbbbb....
                cfffffbbbbbbbbbb....
                ccffffbbbbbbbbbb....
                cccccfbbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbb....
                .fffffbbbbbbbbbb....
                cffffcbbbbbbbbbb....
                ccfffcbbbbbbbbbb....
                ccccccbbbbbbbbbb....
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbb....
                .fffffbbbbbbbbbb....
                cffffcbbbbbbbbbbf...
                ccfffcbbbbbbbbbbf...
                ccccccbbbbbbbbbbf...
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbb....
                .fffffbbbbbbbbbbff..
                cffffcbbbbbbbbbbfff.
                ccfffcbbbbbbbbbbfff.
                ccccccbbbbbbbbbbfff.
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbb....
                .fffffbbbbbbbbbbf...
                cffffcbbbbbbbbbbff..
                ccfffcbbbbbbbbbbff..
                ccccccbbbbbbbbbbff..
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ......bbbbbbbbbb....
                ..fff.bbbbbbbbbbfff.
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffffcc
                ...........bb...ffcc
                ...........b....cccc
                .................ccc
                .................ccc
                ..................cc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffffcc
                ...........bb...ffcc
                ...........b....cccc
                .................ccc
                .................ccc
                .................ccc
                ..................cc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffffcc
                ...........bb...ffcc
                ...........b....cccc
                .................ccc
                ..................cc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffff..
                ...........bb...ffcc
                ...........b....cccc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbb.ccc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ...............ffb..
                ..............fffff.
                ..............fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                .............2......
                .............2......
                ..........2.2.......
                ..........2....ffb..
                ...........2..fffff.
                ...........2..fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ..........2......2..
                ...........2...22...
                ......2....2..2.....
                .......2...2........
                ........2....2......
                ........2....2......
                ........2.2.2.......
                ..........2....ffb..
                ...........2..fffff.
                ...........2..fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ..........2......2..
                ...........2...22...
                ......2....2..2.....
                .......2...2........
                ........2...........
                ........2...........
                ........2...........
                ...............ffb..
                ..............fffff.
                ..............fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ...............ffb..
                ..............fffff.
                ..............fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ...............ffb..
                ..............fffff.
                ..............fffff.
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbfffc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbbcccc
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffff..
                ...........bb...ffcc
                ...........b....cccc
                ......bbbbbbbbbbcccc
                ......bbbbbbbbbb.ccc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffffcc
                ...........bb...ffcc
                ...........b....cccc
                .................ccc
                ..................cc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ..............fffb..
                .............ffffff.
                .............ffffff.
                ............bbfffff.
                ...........bbbffffcc
                ...........bb...ffcc
                ...........b....cccc
                .................ccc
                .................ccc
                .................ccc
                ..................cc
                ......bbbbbbbbbb..cc
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ......bbbbbbbbbb...c
                ..fff.bbbbbbbbbbfffc
                .fffffbbbbbbbbbbffff
                cffffcbbbbbbbbbbffff
                ccfffcbbbbbbbbbbffff
                ccccccbbbbbbbbbbffff
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `],
            60,
            false
            )
            mySprite2.setFlag(SpriteFlag.Invisible, true)
            statusbar.sayText("CLOSE COMBAT", 2000, false)
            mySprite7 = sprites.create(img`
                . . . . . . . . . . . . . 2 2 . 
                . . . . . . . . . 2 . 2 2 2 . . 
                . . . . . . . . . . 2 2 2 . . . 
                . . . . . . 2 . . 2 2 . . . 2 . 
                . . . . . . . . . 2 2 . . . . . 
                . . . . . 2 . . 2 2 . . . . . . 
                . . . . . 2 . 2 2 . . . 2 2 2 2 
                . . . . 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 . 2 2 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . 2 . 
                . . . 2 . 2 2 2 2 . . . . . . . 
                . . . 2 2 2 2 . . 2 2 2 2 2 . . 
                . . . 2 2 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.blood)
            mySprite7.setFlag(SpriteFlag.RelativeToCamera, true)
            mySprite7.setPosition(randint(20, 100), randint(20, 100))
            mySprite7.scale = 5
            info.changeScoreBy(3)
        }
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . 2 . . . 
        . . . . . . . . . . . . 2 . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . . . . . . 2 . 2 2 . . 2 . 
        . . . . . . . . 2 . 2 2 . . 2 . 
        . . . . . . . 2 2 2 2 2 . 2 . . 
        . . . . . . . 2 . 2 2 . . 2 . . 
        . . . . . . 2 . 2 2 . . 2 . . . 
        . . . . . 2 . 2 2 . . 2 . . . . 
        . . . . 2 2 2 2 . . 2 . . . . . 
        . . . 2 2 2 2 . . 2 . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 . 2 2 . . . . . . . . . 
        . 2 . 2 2 2 . . . . . . . . . . 
        . . 2 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blood)
    mySprite9.setPosition(80, 60)
    mySprite9.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite9.scale = 6
    color.startFadeFromCurrent(color.Black, 2000)
    info.setScore(info.highScore())
    music.play(music.createSong(hex`0078000408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80024000000010001000400050001000c000d0001001000110001001800190001001c001d000100`), music.PlaybackMode.UntilDone)
    game.reset()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    statusbar.value += -5
    pause(1000)
})
controller.combos.attachCombo("b+d", function () {
    if (mags == 0) {
        statusbar.sayText("out of mags", 2000, false)
    } else {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . f f f c f f f . 
            . . . . . . f f f f . f f f f f 
            . . . . . . f f f . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . f f . f f f f f 
            . . . . . . f f f f . . f f f c 
            . . . . . . f f f . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . . . f f f f f 
            . . . . . . . . f f . . f f f c 
            . . . . . . f f f f . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . . . f f f f f 
            . . . . . . . . . . . . f f f c 
            . . . . . . . . f f . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . . . f f f f f 
            . . . . . . . . . . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . . . f f f f f 
            . . . . . . . . . . . . f f f c 
            . . . . . . . . f f . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . . . . f f f f f 
            . . . . . . . . f f . . f f f c 
            . . . . . . f f f f . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . . . f c f f f . 
            . . . . . . . . f f . f f f f f 
            . . . . . . f f f f . . f f f c 
            . . . . . . f f f . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . f f f c f f f . 
            . . . . . . f f f f . f f f f f 
            . . . . . . f f f . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f c f f f . . 
            . . . . . . . . f f f b f f f . 
            . . . . . . f f f f . f f f f f 
            . . . . . . f f f . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . f b f f f . . 
            . . . . . . . . f f f c f f f . 
            . . . . . . f f f f . f f f f f 
            . . . . . . f f f . . . f f f c 
            . . . . . . . . . . . . . c c c 
            `],
        100,
        false
        )
        music.play(music.createSoundEffect(WaveShape.Noise, 2723, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        mags += -1
        timer.after(1000, function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            statusbar2.value = 100
            HasAmmo = true
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite2.setFlag(SpriteFlag.Invisible, false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    music.play(music.createSong(hex`00f4010408010109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800060000000100010a`), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.changeDataNumberBy(otherSprite, "health", -2)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    for (let index = 0; index < 10; index++) {
        mySprite10 = sprites.create(img`
            2 
            `, SpriteKind.particle)
        mySprite10.setPosition(otherSprite.x, otherSprite.y)
        mySprite10.setVelocity(randint(-50, 50), randint(-50, 50))
        mySprite10.ay = 100
        mySprite10.lifespan = 500
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        mySprite7 = sprites.create(img`
            . . . . . . . . . . . . . 2 2 . 
            . . . . . . . . . 2 . 2 2 2 . . 
            . . . . . . . . . . 2 2 2 . . . 
            . . . . . . 2 . . 2 2 . . . 2 . 
            . . . . . . . . . 2 2 . . . . . 
            . . . . . 2 . . 2 2 . . . . . . 
            . . . . . 2 . 2 2 . . . 2 2 2 2 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 . 2 2 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . 2 . 
            . . . 2 . 2 2 2 2 . . . . . . . 
            . . . 2 2 2 2 . . 2 2 2 2 2 . . 
            . . . 2 2 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.blood)
        mySprite7.setPosition(randint(20, 100), randint(20, 100))
        mySprite7.setFlag(SpriteFlag.RelativeToCamera, true)
        mySprite7.scale = 5
    }
})
let mySprite11: Sprite = null
let mySprite5: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite7: Sprite = null
let projectile: Sprite = null
let ToggleCrouch = false
let mags = 0
let HasAmmo = false
let statusbar2: StatusBarSprite = null
let mySprite8: Sprite = null
let mySprite6: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 13))
Render.moveWithController(2, 3, 1)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.positionDirection(CollisionDirection.Bottom)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . f f f . . . . 
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . f f b f f . . 
    . . . . . . . f f f f f c f f . 
    . . . . . . . f f f . f f f f f 
    . . . . . . . . . . . . f f f c 
    . . . . . . . . . . . . . c c c 
    `, SpriteKind.rifle)
mySprite2.setPosition(117, 78)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite2.scale = 6
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.leg)
mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite3.scale = 6
mySprite3.setPosition(39, 102)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.arm)
mySprite4.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite4.scale = 6
mySprite4.setPosition(31, 73)
animation.runMovementAnimation(
mySprite2,
animation.animationPresets(animation.bobbing),
2000,
true
)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    mySprite6 = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b . . . . . . . . . . . . . . b 
        b . 1 . . . . . . . . . . . . b 
        b . . 1 . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b . . . . . . . . . . . . . . b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.glass)
    tiles.placeOnTile(mySprite6, value)
    tiles.setWallAt(value, false)
}
mySprite8 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.KillAnimation)
mySprite8.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite8.scale = 8
mySprite8.setPosition(64, 51)
statusbar2 = statusbars.create(20, 4, StatusBarKind.Ammo)
HasAmmo = true
statusbar2.positionDirection(CollisionDirection.Top)
statusbar2.setColor(5, 2)
sprites.setDataNumber(mySprite, "kills", 0)
mags = 3
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataNumber(value, "health") <= 0) {
            value.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . b f b . 
                c . . . . c b c c 2 c c b d b . 
                c c b b b b 2 c 2 2 2 2 b b b . 
                `)
            value.setVelocity(0, 0)
            sprites.destroy(value, effects.disintegrate, 5000)
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
            info.changeScoreBy(1)
            if (ToggleCrouch == true) {
                statusbar.sayText("SNEAK ATTACK", 2000, false)
                info.changeScoreBy(2)
            }
        }
    }
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(5000, function () {
    statusbar.value += 1
})
game.onUpdateInterval(5000, function () {
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . . f d f . . . . . . . . 
        . . . . . b b b . . . . . . . . 
        . . . . b c b c b . . . . . . . 
        . . . . b c c c b . . . . . . . 
        . . . . b c b c b . . . . . . . 
        . . . . b c b c b . . . . . . . 
        . . . . c b c b c . . . . . . . 
        . . . . . b . b . b . . . . . . 
        . . . . . b . b . . b . . . . . 
        . . . . . c . c . . . . . . . . 
        . . . . c c . c c . . . . . . . 
        `, SpriteKind.Enemy)
    sprites.setDataNumber(mySprite5, "health", 3)
    tiles.placeOnRandomTile(mySprite5, assets.tile`transparency16`)
    mySprite5.follow(mySprite, 10)
})
game.onUpdateInterval(5000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.blood)
})
game.onUpdateInterval(15000, function () {
    mySprite11 = sprites.create(img`
        . . . . . . . . . . . . 6 6 . . 
        . . . . . . . . . . 6 6 . . . . 
        . . . . . . . . 6 6 . . . . . . 
        . . . . . . 6 6 . . . . . . . . 
        . . . . 6 6 . . . . . . . . . . 
        . . 6 6 . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 7 7 7 7 7 7 7 7 7 7 6 6 6 
        6 7 7 6 6 7 7 7 7 7 7 6 6 7 7 6 
        6 7 7 7 7 6 7 7 7 7 6 7 7 7 7 6 
        6 7 7 7 7 7 6 6 6 6 7 7 7 7 7 6 
        6 7 7 7 7 7 6 6 6 6 7 7 7 7 7 6 
        6 7 7 7 7 6 7 7 7 7 6 7 7 7 7 6 
        6 7 7 6 6 7 7 7 7 7 7 6 6 7 7 6 
        6 6 6 7 7 7 7 7 7 7 7 7 7 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.ammoCrate)
    tiles.placeOnRandomTile(mySprite11, assets.tile`transparency16`)
    mySprite11.scale = 0.5
})
