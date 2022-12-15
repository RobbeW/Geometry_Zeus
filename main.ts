namespace SpriteKind {
    export const Pila = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Axe = SpriteKind.create()
    export const Dead = SpriteKind.create()
    export const deadBarbarian = SpriteKind.create()
    export const oracle = SpriteKind.create()
    export const spike = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const d_jump = SpriteKind.create()
    export const boost = SpriteKind.create()
    export const fuerball = SpriteKind.create()
    export const boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`double jump`, function (sprite, location) {
    if (controller.A.isPressed()) {
        Zeus_block.vy = -130
        Zeus_block.setImage(assets.image`Big zeus0`)
        pause(100)
        Zeus_block.setImage(assets.image`Big zeus1`)
        pause(100)
        Zeus_block.setImage(assets.image`Big zeus2`)
        pause(100)
        Zeus_block.setImage(assets.image`myImage`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    game.splash("The boss ate you")
    game.over(false, effects.melt)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (current_level == -1) {
    	
    } else {
        if (Boost > 0) {
            Boost += -1
            Zeus_block.vx = 200
            pause(500)
            Zeus_block.vx = 0
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (current_level == -1) {
    	
    } else {
        if (Zeus_block.vy == 0) {
            Zeus_block.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . d d d d d d d . . . . . 
                . . . . d 3 3 3 3 3 d . . . . . 
                . . . . . 3 f 3 f 3 . 5 . . . . 
                . . . . 5 d 3 3 3 d . 5 5 . . . 
                . . . 5 5 d d d d d . 3 5 5 . . 
                . . 5 5 . . . 3 . . 3 . . 5 . . 
                . . 5 3 . . 3 3 3 3 . . . . . . 
                . . 5 . 3 3 . 3 . . . . . . . . 
                . . . . . . . 3 . . . . . . . . 
                . . . . . 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . . . 3 . . . . . 
                . . . . 3 . . . . . 3 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            pause(100)
            Zeus_block.setImage(assets.image`myImage`)
            Zeus_block.vy = -130
            Zeus_block.setImage(assets.image`myImage0`)
            pause(100)
            Zeus_block.setImage(assets.image`myImage1`)
            pause(100)
            Zeus_block.setImage(assets.image`myImage2`)
            pause(100)
            Zeus_block.setImage(assets.image`myImage`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (current_level == 4) {
        Zeus_block.destroy()
        scene.setBackgroundImage(assets.image`u win`)
        tiles.setCurrentTilemap(tilemap`level11`)
        effects.confetti.endScreenEffect()
        current_level = 0
    } else {
        current_level += 1
        Startlevel()
        game.splash("next level")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike`, function (sprite, location) {
    game.splash("χάνεις")
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`flag`, function (sprite, location) {
    if (current_level == 4) {
        Zeus_block.destroy()
        game.over(true, effects.confetti)
        game.splash("you outrunned the boss")
        scene.setBackgroundImage(assets.image`u win`)
        tiles.setCurrentTilemap(tilemap`level11`)
        music.wawawawaa.play()
        current_level = 0
        Startlevel()
    } else {
        current_level += 1
        Startlevel()
        game.splash("next level")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`jump boost`, function (sprite, location) {
    Zeus_block.vy = -200
    Zeus_block.setImage(assets.image`myImage0`)
    pause(100)
    Zeus_block.setImage(assets.image`myImage1`)
    pause(100)
    Zeus_block.setImage(assets.image`myImage2`)
    pause(100)
    Zeus_block.setImage(assets.image`myImage`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boost, function (sprite, otherSprite) {
    Boost += 1
    bbboost.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    game.splash(sprite)
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`vuurbal`, function (sprite, location) {
    game.splash("χάνεις")
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeupside`, function (sprite, location) {
    game.splash("χάνεις")
    game.over(false, effects.melt)
})
function Startlevel () {
    music.playTone(147, music.beat(BeatFraction.Half))
    if (current_level == 0) {
        scene.setBackgroundColor(9)
        game.splash("Vind de vlag!")
        game.splash("Pas op voor de traps")
        game.splash("Misschien zijn er wel valstrikken")
        game.splash("pak de coins")
        game.splash("αρχίζω ")
        game.showLongText("Spring terwijl je op een groen bolletje bent om te double jumpen.", DialogLayout.Top)
        scene.setBackgroundImage(assets.image`BackgroundLVL1`)
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundImage(img`
            5555555555555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111119999999999999999999999999999999999
            5555555555555555555555599555555599999911111999999999999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999
            5555555555555555555555999999999955599111111119999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999
            5555555555555555555555999999999991155111111111199999999999999999999999111111111119999999999999999999999999999999999999111111111111111999999999999999999999999999
            5555555555555555555559999999999991111551111111111999999999999999999911111111111111999999999999999999999999999111999999111111111111111999999999999999999999999999
            5555555555555555555559999999999111111115511111111199999999999999999111111111111111999999999991111119999999991111119999111111111111119999999999999999999999999999
            5555555555555555555559959999999111111111111111111119999999999999991111111111111111999999999911111111199999991111111999111111111111199999999999999999999999999999
            5555555555555555555559955559991111111111111111111119999999111111111111111111111111999999991111111111119999991111111111111111111119999999999999991111111199999999
            5555555555555555555599999995555511111111111111111119999911111111111111111111111111999999911111111111111999991111111111111111111999999999999999911111111111999999
            5555555555555555555599999999911155551111111111111111999111111111111111111111111999999999111111111111111999991111111111111111111999999999999911111111111111999999
            5555555555555555555599999999111111115511111111111111999111111111111111111111999999999911111111111111111199999911111111111111119999999999999111111111111111119999
            5555555555555555555999999999111111111155555555511111999111111111111111111111999999999911111111111111111111999999111111111111119999999999911111111111111111111999
            5555555555555555555995555555555511111111111111111111199911111111111111111119999999999111111111111111111111999999991111111111119999999999111111111111111111111999
            5555555555555555555559999999111151111111111111111111199999999911111111111199999999991111111111111111111111199999999911111111199999999999111111111111111111111199
            5555555555555555559999999991111115551111111111111111199999999991111111111199999999911111111111111111111111199999999999999999999999999991111111111111111111111199
            5555555555555555599999999911111111115111111111111111119999999999999111111999999999911111111111111111111111119999999999999999999999999911111111111111111111111119
            5555555555555555599999999911111111111551111111111111119999999999999999999999999991111111111111111111111111119999999999999999999999999911111111111111111111111119
            5555555555555559555559999911111111111115511111111111119999999999999999999999999991111111111111111111111111111999999999999999999999999111111111111111111111111111
            5555555555555599999995559911111111111111155511111111111999999999999999999999999911111111111111111111111111111999999999999999999999991111111111111111111111111111
            5555555555555999999999995511111111111111111155111111111999999999999999999999999111111111111111111111111111111199999999999999999999991111111111111111111111111111
            5555555555559999999999999151111111111111111111555111111999999999999999999999999111111111111111111111111111111199999999999999999999911111111111111111111111111111
            5555555559999999999999999115511111111111111111111111111999999999999999999999991111111111111111111111111111111119999999999999999999111111111111111111111111111111
            999995999955999999999999b111155111111111111111111111111999999999999999999999991111111111111111111111111111111119999999999999999991111111111111111111111111111111
            199995999999559999999999bb11111551111111111111111111111999999999999999999999911111111111111111111111111111111111999999999999999991111111111111111111111111111111
            11999599999999559999999bbb11111155111111111111111111111999999999999999999999911111111111111111111111111111111111999999999999999911111111111111111111111111111111
            1119959999999999555999bbbbbb111111511111111111111111111199999999999999999999111111111111111111111111111111111111999999999999999111111111111111111111111111111111
            1111195999999999999555bbbbbbbbbb11151111111111111111111199999999999999999999111111111111111111111111111111111111999999999999999111111111111111111111111111111111
            11111159999999999999955bbbbbbbbbb1115111111111111111111199999999999999999999111111111111111111111111111111111111199999999999991111111111111111111111111111111111
            1111115599999999999999b5bbbbbbbbbb111555111111111111111199999999999999999999111111111111111111111111111111111111199999999999991111111111111111111111111111111111
            111111159999999999999bbb5bbbbbbbbbb11111551111111111111199999999999999999991111111111111111111111111111111111111199999999999911111111111111111111111111111111111
            11111115199999999999bbbbb5bbbbbbbbbb11111155111111bbbbbb99999999999999999991111111111111111111111111111111111111119999999999911111111111111111111111111111111111
            11111115119999999999bbbbbb5bbbbbbbbbb1111111555511bbbbbbb99999999999999999111111111111111111111111111111111111111b9999999999111111111111111111111111111111111111
            1111111151199999999bbbbbbb5bbbbbbbbbbb1111111111555bbbbbb99999999999999999111111111111111111111111111111111111bbbb9999999999111111111111111111111111111111111111
            111111115111999999bbbbbbbbb5bbbbbbbbbbb11111111111bbbbbbbb9999999999999999111111111111111111111111111111111bbbbbbbb999999991111111111111111111111111111111111111
            111111115111199999bbbbbbbbbb5bbbbbbbbbbb1111111111bbbbbbbb99999999999999911111111111111111111111111111111bbbbbbbbbbb99999991111111111111111111111111111111111111
            11111111511111999bbbbbbbbbbb5bbbbbbbbbbb1111111111bbbbbbbb99999999999999911111111111111111111111111111bbbbbbbbbbbbbb99999911111111111111111111111111111111111111
            11111111511111999bbbbbbbbbbb55bbbbbbbbbb1111111111bbbbbbbbb999999999999991111111111111111111111111111bbbbbbbbbbbbbbb99999911111111111111111111111111111111111111
            11111111511111199bbbbbbbbbbbbbbbbbbbbbbb111111111bbbbbbbbbb9999999999999911111111111111111111111111bbbbbbbbbbbbbbbbb99999911111111111111111111111111111111111111
            1111111151111119bbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbbbbbbb99999999999991111111111111111111111111bbbbbbbbbbbbbbbbbbb99999911111111111111111111111111111111111111
            11111111511111b9bbbbbbbbbbbbbbbbbbbbbbbbbbb111bbbbbbbbbbbbb999999999999911111111111111111111111bbbbbbbbbbbbbbbbbbbbbb9999bb1111111111111111111111111111111111111
            111111115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999bbbbbbbbb111111111111111111111111111111
            111111115bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999bbbbbbbbbbbb111111111111111111111111111
            1111111b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbb111111111111111111111111
            111111bb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbb11111111111111111111111
            11111bbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99bbbbbbbbbbbbbbbbb1111111111111111111111
            11bbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999911111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbb111111111111111111111
            bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999991111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbb111111111111111111111
            bbbbbbbbb5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbb1111111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbb11111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbb1111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999991111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999991111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999991111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111b
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999911bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
    } else if (current_level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaaddddddddddddddddddddddddddddddddddddddaadddddddddddddddd
            dddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddddddddddddddddddddddddddadddddddddddddddd
            dddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddaaaaddddddddddddddd
            ddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaadddddddddddddddddddddddddddddddddddaaaaaddddddddddddddd
            dddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddddddddddddddddddddddaaaaaaadddddddddddddd
            dddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddddddddddddddddddddddaaaaadadddddddddddddd
            ddddddddddddbdddddddaaaaddddddddddddddddddddddddddddbdddddddaaaaddddddddddddddddddddddddddddbdddddddaaaaddddddddddddddddddddddddddddbdddddddaaaadddddddddddddddd
            ddddddddddddbddddddaaaaaaaddddddddddddddddddddddddddbddddddaaaaaaaddddddddddddddddddddddddddbddddddaaaaaaaddddddddddddddddddddddddddbddddddaaaaaaadddddddddddddd
            ddddddddddddbdddddaaaaaaaaddddddddddddddddddddddddddbdddddaaaaaaaaddddddddddddddddddddddddddbdddddaaaaaaaaddddddddddddddddddddddddddbdddddaaaaaaaadddddddddddddd
            ddddddddddddbddddaaaaaaaaaaaddddddddddddddddddddddddbddddaaaaaaaaaaaddddddddddddddddddddddddbddddaaaaaaaaaaaddddddddddddddddddddddddbddddaaaaaaaaaaadddddddddddd
            ddaaddddddddbddadaaaaaaaaaaaaaddddbdddddddaaddddddddbddadaaaaaaaaaaaaaddddbdddddddaaddddddddbddadaaaaaaaaaaaaaddddbdddddddaaddddddddbddadaaaaaaaaaaaaaddddbddddd
            daaaaaddddddbddaaaaaaaaaaaaaaaddddbddddddaaaaaddddddbddaaaaaaaaaaaaaaaddddbddddddaaaaaddddddbddaaaaaaaaaaaaaaaddddbddddddaaaaaddddddbddaaaaaaaaaaaaaaaddddbddddd
            aaaaaaaaddddbdddaaaaaaaaaaaaaaddddbdddddaaaaaaaaddddbdddaaaaaaaaaaaaaaddddbdddddaaaaaaaaddddbdddaaaaaaaaaaaaaaddddbdddddaaaaaaaaddddbdddaaaaaaaaaaaaaaddddbddddd
            aaaaaaaaaddddbddddaaaaaaaaaaaaddddbdddddaaaaaaaaaddddbddddaaaaaaaaaaaaddddbdddddaaaaaaaaaddddbddddaaaaaaaaaaaaddddbdddddaaaaaaaaaddddbddddaaaaaaaaaaaaddddbddddd
            daaaaaaaadddddbddddaaaaaaa444444dbbdddd3daaaaaaaadddddbddddaaaaaaa444444dbbdddd3daaaaaaaadddddbddddaaaaaaa444444dbbdddd3daaaaaaaadddddbddddaaaaaaa444444dbbdddd3
            daaaaaaaaadddddbbaaaaaaa444444444bdddd3ddaaaaaaaaadddddbbaaaaaaa444444444bdddd3ddaaaaaaaaadddddbbaaaaaaa444444444bdddd3ddaaaaaaaaadddddbbaaaaaaa444444444bdddd3d
            aaaaaaaaddddddddbbaaaaaaaa44a4aabbddddddaaaaaaaaddddddddbbaaaaaaaa44a443bbddddddaaaaaaaaddddddddbbaaaaaaaa44a443bbddddddaaaaaaaaddddddddbbaaaaaaaa44a443bbdddddd
            aaaaaaaaaddddddaaabaaaaaaa4aaa4bbadddddaaaaaaaaaaddddddaaabaaaaaaa4aaa4bb3dddddaaaaaaaaaaddddddaaabaaaaaaa4aaa4bb3dddddaaaaaaaaaaddddddaaabaaaaaaa4aaa4bb3ddddda
            aaaabaaddddddaaaaaaaaaaaaaaaaabbddddddaaaaaabaaddddddaaaaaaaaaaaaaaaaabbddddddaaaaaabaaddddddaaaaaaaaaaaaaaaaabbddddddaaaaaabaaddddddaaaaaaaaaaaaaaaaabbddddddaa
            aaaabaaaadddddaaaaaaaaaaaaaaabbdddddddaaaaaabaaaadddddaaaaaaaaaaaaaaabbdddddddaaaaaabaaaadddddaaaaaaaaaaaaaaabbdddddddaaaaaabaaaadddddaaaaaaaaaaaaaaabbdddddddaa
            aaaabaabaaddddddaaaa44444aaaaaadddddddaaaaaabaabaaddddddaaaa44444aaaaaadddddddaaaaaabaabaaddddddaaaa44444aaaaaadddddddaaaaaabaabaaddddddaaaa44444aaaaaadddddddaa
            aaaabaabaaddddd34444444444aaaaaaaaadddaaaaaabaabaaddddd34444444444aaaaaaaaadddaaaaaabaabaaddddd34444444444aaaaaaaaadddaaaaaabaabaaddddd34444444444aaaaaaaaadddaa
            aaaababaaadddd44444444444aa444aaaaadddaaaaaababaaadddd44444444444aa444aaaaadddaaaaaababaaadddd44444444444aa444aaaaadddaaaaaababaaadddd44444444444aa444aaaaadddaa
            aaaabbba44adaaa444444444444a444aaadddddaaaaabbba44ad3334444444444443444aaadddddaaaaabbba44ad3334444444444443444aaadddddaaaaabbba44ad3334444444444443444aaaddddda
            aaaabba44aaa4444444444444444a444aaddddaaaaaabba44aaa44444444444444443444aaddddaaaaaabba44aaa44444444444444443444aaddddaaaaaabba44aaa44444444444444443444aaddddaa
            aaabbaaaaa4444444444444444444aaaaaaaaaaaaaabbaaaaa4444444444444444444aaaaaaaaaaaaaabbaaaaa4444444444444444444aaaaaaaaaaaaaabbaaaaa4444444444444444444aaaaaaaaaaa
            aabbaaaa4444444444444444abbaaaaaaaaabaaaaabbaaaa4444444444444444abbaaaaaaaaabaaaaabbaaaa4444444444444444abbaaaaaaaaabaaaaabbaaaa4444444444444444abbaaaaaaaaabaaa
            aabaaaa4aaaa444a44a44a44abbaaa44aaaabaaaaabaaaa4aaaa444344a44344abbaaa44aaaabaaaaabaaaa4aaaa444344a44344abbaaa44aaaabaaaaabaaaa4aaaa444344a44344abbaaa44aaaabaaa
            aababaaaaaa444a44aa444aaabbaaab44aaabaaaaababaaaaaa444a44aa444aaabbaaab44aaabaaaaababaaaaaa444a44aa444aaabbaaab44aaabaaaaababaaaaaa444a44aa444aaabbaaab44aaabaaa
            abbabaaaaaa4aaa4aaaaa4aaabbaaabaaaaabaaaabbabaaaaaa4aaa4aaaaa4aaabbaaabaaaaabaaaabbabaaaaaa4aaa4aaaaa4aaabbaaabaaaaabaaaabbabaaaaaa4aaa4aaaaa4aaabbaaabaaaaabaaa
            abbbbaaaaaaaa4aaa44aaaaaabbaaabaaaaaabaaabbbbaaaaaaaa4aaa44aaaaaabbaaabaaaaaabaaabbbbaaaaaaaa4aaa44aaaaaabbaaabaaaaaabaaabbbbaaaaaaaa4aaa44aaaaaabbaaabaaaaaabaa
            abbbaaaaaaaa44aa44aaaaaaabbaaabaaaaaabaaabbbaaaaaaaa44aa44aaaaaaabbaaabaaaaaabaaabbbaaaaaaaa44aa44aaaaaaabbaaabaaaaaabaaabbbaaaaaaaa44aa44aaaaaaabbaaabaaaaaabaa
            abaaaaaaaaaa4aaaaaaabaaaabbaabaaaaaaabbbabaaaaaaaaaa4aaaaaaabaaaabbaabaaaaaaabbbabaaaaaaaaaa4aaaaaaabaaaabbaabaaaaaaabbbabaaaaaaaaaa4aaaaaaabaaaabbaabaaaaaaabbb
            bbaaaaaaaaaaaaaaaaaabaaaabbbabaaaaaaaaabbbaaaaaaaaaaaaaaaaaabaaaabbbabaaaaaaaaabbbaaaaaaaaaaaaaaaaaabaaaabbbabaaaaaaaaabbbaaaaaaaaaaaaaaaaaabaaaabbbabaaaaaaaaab
            abaaaaaaaaaaaaaaaaaabaaaabbbbaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaaaaaaaaaa
            abaaaaaaaaaaaaaaaaaabaaaabbbbaaa444aaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaa444aaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaa444aaaaaabaaaaaaaaaaaaaaaaaabaaaabbbbaaa444aaaaa
            ab444aa444aaaaaaaaaabaaaabbbaaa444aaaaaaab444aa444aaaaaaaaaabaaaabbbaaa444aaaaaaab444aa444aaaaaaaaaabaaaabbbaaa444aaaaaaab444aa444aaaaaaaaaabaaaabbbaaa444aaaaaa
            444444aa444aaaaaaaaabaaaabbbaa444aa44444444444aa444aaaaaaaaabaaaabbbaa444aa44444444444aa444aaaaaaaaabaaaabbbaa444aa44444444444aa444aaaaaaaaabaaaabbbaa444aa44444
            4444aaaab444aaaaaaaabaaaabbbaaaaa44444444444aaaab444aaaaaaaabaaaabbbaaaaa44444444444aaaab444aaaaaaaabaaaabbbaaaaa44444444444aaaab444aaaaaaaabaaaabbbaaaaa4444444
            4444444abaaaaaaaabaabaaaabbbaaaa444444444444444abaaaaaaaabaabaaaabbbaaaa444444444444444abaaaaaaaabaabaaaabbbaaaa444444444444444abaaaaaaaabaabaaaabbbaaaa44444444
            4444444444aaaaaaabaabaaaabbbba4444a444444444444444aaaaaaabaabaaaabbbba4444a444444444444444aaaaaaabaabaaaabbbba4444a444444444444444aaaaaaabaabaaaabbbba4444a44444
            44444a4444aaaaaaabaabaaaabbb4444b4aa44a444444a4444aaaaaaabaabaaaabbb4444b4aa44a444444a4444aaaaaaabaabaaaabbb4444b4aa44a444444a4444aaaaaaabaabaaaabbb4444b4aa44a4
            a444aaabbabbaaaaabaabaaaabbbb444baa44aaaa444aaabbabbaaaaabaabaaaabbbb444baa44aaaa444aaabbabbaaaaabaabaaaabbbb444baa44aaaa444aaabbabbaaaaabaabaaaabbbb444baa44aaa
            aab4aaabbabaaaaaabbabbaaabbbbaaabbaaaaaaaab4aaabbabaaaaaabbabbaaabbbbaaabbaaaaaaaab4aaabbabaaaaaabbabbaaabbbbaaabbaaaaaaaab4aaabbabaaaaaabbabbaaabbbbaaabbaaaaaa
            aabaaaabbbbaaaaaaabbbbaaabbbbaaabbaaaaaaaabaaaabbbbaaaaaaabbbbaaabbbbaaabbaaaaaaaabaaaabbbbaaaaaaabbbbaaabbbbaaabbaaaaaaaabaaaabbbbaaaaaaabbbbaaabbbbaaabbaaaaaa
            aabaaaabbaaaaaaaaaabbbaaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaabbbaaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaabbbaaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaabbbaaabbbbaaabbaaaaaa
            aabaaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaabaaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaa
            aaabaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaaabaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaaabaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaaaaabaaabbaaaaaaaaaaabbbaabbbbaaabbaaaaaa
            aaabbabbbaaaa44a444aa4baabbbbaaabbaabaaaaaabbabbbaaaa44a444aa4baabbbbaaabbaabaaaaaabbabbbaaaa44a444aa4baabbbbaaabbaabaaaaaabbabbbaaaa44a444aa4baabbbbaaabbaabaaa
            aaabbbbbbaaa444444444444abbbbbaabbaabaaaaaabbbbbbaaa444444444444abbbbbaabbaabaaaaaabbbbbbaaa444444444444abbbbbaabbaabaaaaaabbbbbbaaa444444444444abbbbbaabbaabaaa
            aaaabbbbbaa4444444444444bbbbbbabbaabbaaaaaaabbbbbaa4444444444444bbbbbbabbaabbaaaaaaabbbbbaa4444444444444bbbbbbabbaabbaaaaaaabbbbbaa4444444444444bbbbbbabbaabbaaa
            aaaaabbbbaaa44a4444444a4bbbbbbabbaabaaaaaaaaabbbbaaa44a4444444a4bbbbbbabbaabaaaaaaaaabbbbaaa44a4444444a4bbbbbbabbaabaaaaaaaaabbbbaaa44a4444444a4bbbbbbabbaabaaaa
            aaaaabbbaa44aa444444a4aabbbbbbabbabaaaaaaaaaabbbaa44aa444444a4aabbbbbbabbabaaaaaaaaaabbbaa44aa444444a4aabbbbbbabbabaaaaaaaaaabbbaa44aa444444a4aabbbbbbabbabaaaaa
            aaaaabbbaaaaa44aa44aa4aabbbbbbabbbaaaaaaaaaaabbbaaaaa44aa44aa4aabbbbbbabbbaaaaaaaaaaabbbaaaaa44aa44aa4aabbbbbbabbbaaaaaaaaaaabbbaaaaa44aa44aa4aabbbbbbabbbaaaaaa
            aaaaabbbaaaba4aaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaaba4aaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaaba4aaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaaba4aaaaaaaaaaabbbbbbbaaaaaaaa
            aaaaabbbaaabaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaabaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaabaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaabaaaaaaaaaaaaabbbbbbbaaaaaaaa
            aaaaabbbaaababaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbbaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbbaaaaaaaa
            aaaaabbbaaababaaaaaaaaaaabbbbbbaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbbaaaaaaaaa
            aaaaabbbaaababaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbbaaababaaaaaaaaaaabbbbbaaaaaaaaaa
            aaaaabbaaaabbbaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaaabbbaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaaabbbaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaaabbbaaaaaaaaaaabbbbbaaaaaaaaaa
            aaaaabbaaabbbaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaabbbaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaabbbaaaaaaaaaaaabbbbbaaaaaaaaaaaaaaabbaaabbbaaaaaaaaaaaabbbbbaaaaaaaaaa
            aaaabbbaaabaaaaaaaaaddaaabbbbbadaaaaaaaaaaaabbbaaabaaaaaaaaaddaaabbbbbadaaaaaaaaaaaabbbaaabaaaaaaaaaddaaabbbbbadaaaaaaaaaaaabbbaaabaaaaaaaaaddaaabbbbbadaaaaaaaa
            aaaabbbaaabaaaaaaaaaaddabbbbbbaaddaaaadaaaaabbbaaabaaaaaaaaaaddabbbbbbaaddaaaadaaaaabbbaaabaaaaaaaaaaddabbbbbbaaddaaaadaaaaabbbaaabaaaaaaaaaaddabbbbbbaaddaaaada
            aaaabbbabbbaaaaaaaaaaaaabbbbbbbaadaaaddaaaaabbbabbbaaaaaaaaaaaaabbbbbbbaadaaaddaaaaabbbabbbaaaaaaaaaaaaabbbbbbbaadaaaddaaaaabbbabbbaaaaaaaaaaaaabbbbbbbaadaaadda
            ddaabbbbbbaaaaaaaadaaaaabbbbbbbaaaaaadaaddaabbbbbbaaaaaaaadaaaaabbbbbbbaaaaaadaaddaabbbbbbaaaaaaaadaaaaabbbbbbbaaaaaadaaddaabbbbbbaaaaaaaadaaaaabbbbbbbaaaaaadaa
            addabbbbbaaddaaaaddaaaadbbbbbbbdaaaaaaaaaddabbbbbaaddaaaaddaaaadbbbbbbbdaaaaaaaaaddabbbbbaaddaaaaddaaaadbbbbbbbdaaaaaaaaaddabbbbbaaddaaaaddaaaadbbbbbbbdaaaaaaaa
            adddbbbbbaaaddaaddaadaddbbbbbbbdaaadaaaaadddbbbbbaaaddaaddaadaddbbbbbbbdaaadaaaaadddbbbbbaaaddaaddaadaddbbbbbbbdaaadaaaaadddbbbbbaaaddaaddaadaddbbbbbbbdaaadaaaa
            adddbbbaaaaaaaaadaadddddbbbbbbbddaddaadaadddbbbaaaaaaaaadaadddddbbbbbbbddaddaadaadddbbbaaaaaaaaadaadddddbbbbbbbddaddaadaadddbbbaaaaaaaaadaadddddbbbbbbbddaddaada
            ddddbbbdaaaaaaaaaaadddddbbbbbbbddddaadddddddbbbdaaaaaaaaaaadddddbbbbbbbddddaadddddddbbbdaaaaaaaaaaadddddbbbbbbbddddaadddddddbbbdaaaaaaaaaaadddddbbbbbbbddddaaddd
            ddddbbbdaaadaadddaadddddbbbbbbbdddddddddddddbbbdaaadaadddaadddddbbbbbbbdddddddddddddbbbdaaadaadddaadddddbbbbbbbdddddddddddddbbbdaaadaadddaadddddbbbbbbbddddddddd
            ddddbbbdaadddaddddadddddbbbbbbbdddddddddddddbbbdaadddaddddadddddbbbbbbbdddddddddddddbbbdaadddaddddadddddbbbbbbbdddddddddddddbbbdaadddaddddadddddbbbbbbbddddddddd
            ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
            ddddbbbaddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
            ddddbbbaddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
            ddddbbbbadddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
            ddddbbbbadddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
            ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
            ddddbbbbbaddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
            ddddbbbbbadddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
            dddabbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
            dddabbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
            44abbbbbbbadddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
            44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            `)
    } else if (current_level == 3) {
        tiles.setCurrentTilemap(tilemap`level10`)
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
            8888888888888888888888888888888888688888888888b88888888888888888888888888888888888888888888888888888888888888888888888b888888688888588888888888888b8888888888888
            888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888b888888888888888888888888888b888888688888588888888888888b8888888888888
            888888888888888888888888888888888868888888888b888888888888888888888888888888888888888888888888888888888888888888888888b888888888888588888888888888b8888888888888
            88888888888888888888888888888888886888888888b8888888888888888888888888888888888888888888888b88888888888888888888888888b888888868888588888888888888b8888888888888
            8888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888888888888888888888888888b888888868888588888888888888b8888888888888
            88888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888b8888888888888888888888888b888888868888588888888888888b8888888888888
            888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
            88888888888888888888888888888888868888888b888888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
            8888888888888888888888888888888868888888b88888888888888888888888888888888888888888888888888888b88888888888888888888888b888888886888588888888888888b8888888888888
            88888888888888888888888888888888688888bb8888888888888888888888888888888888888888888888888888888b8888888888888888888888b88888888868858888888888888858888888888888
            8888888888888888888888888888888868888bb88888888888888888888888888888888888888888888888888888888b8888888888888888888888b888888888688588888888888888b8888888888888
            888888888888888888888888888888886888bb8888888888888888888888888888888888888888888888888888888888b888888888888888888888b888888888688588888888888888b8888888888888
            88888888888888888888888888888888688b888888888888888888888888888888888888888888888888888888888888bb88888888888888888888b888888888668588888888888888b8888888888888
            8888888888888888888888888888888688b88888888888888888888888888888888888888888888888888888888888888bb8888888888888888888b88888888886858888888888888858888888888888
            88888888888888888888888888888886bb8888888888888888888888888888888888888888888888888888888888888888b8888888888888888888b888888888868b88888888888888b8888888888888
            88888888888888888888888888888886b888888888888888888888888888888888888888888888888888888888888886888b888888888888888888b888888888855b55888888888888b8888888888888
            8888888888888888888888888888886b88888888888888888888888888888888888888888888888888888888888888868888b88888888888888888b88888888555b5b555888888888858888888888888
            8888888888888888888888888888bb68888888888888888888888888888888888888888888888888888888888888888888888b888888888888888858888b88bbbb555bbbbb8b888888b8888888888888
            888888888888888888888888888bb85b8888888888888888888888888888888888888888888888888888888888888888688888b888888888888888b88885555bbb5555bbb55588888858888888888888
            88888888888888888888888888b8865588888888888888888888888888888888888888888888888888888888888888886888888bb8888888888888b8888b555555555555555b88888858888888888888
            888888888888888888888888bb555555b88888888888888888888888888888888888888888888888888888888888888888888888bb888888888888b88888bbb8b86688b88bb888888858888888888888
            88888888888888888888888bb8b55555555b888888888888888888888888888888888888888888888888888888888888868888888bb88888888888588888b5855586855585b888888858888888888888
            888888888888888888888bb88885555555b888888888888888888888888888888888888888888888888888888888888886888888888b8888888888b88888858b5b868b5b858888888858888888888888
            88888888888888888888b888888b55555b88888888888888888888888888888888888888888888888888888888888888886888888888bb88888888b88888858858868858858888888858888888888888
            888888888888888888bb8888888b55555b888888888888888888888888888888888888888888888888888888888888888868888888888bb8888888588888858858866858858888888858888888888888
            8888888888888888bb888888888555b55588888888888888888888888888888888888888888888888888888888888888886888888888888bb88888b88888858858886858858888888858888888888888
            888888888888888bb888888888855888558888888888888888888888888888888888888888888888888888888888888888868888888888888bb888588888858858886858858888888858888888888888
            8888888888888bb8888888888866888888888888888888888888888888888888888888888888888888888888888888888886888888888888888bb8588888858858886658858888888858888888888888
            8888888888bbb88888888888886888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888b5b8888858858886658858888888858888888888888
            888888888b8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888886688888888888888885bbb88858858888658858888888858888888888888
            88888888bb888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888588bbbb58858888658858888888858888888888888
            888888bb88888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888866888888888888888588888b5bb58888658858888888858888888888888
            8888bb8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888588888858b5bbb8658858888888858888888888888
            bbbb8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888885888888588588bbb5b858888888858888888888888
            888888888888888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888858888885b858888856b5bbb8888858888888888888
            8888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888588888855b5888885b5588bbbbb858888888888888
            88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888885888888b55555555555b888888885bbbbbbb888888
            88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888885888888855555555555888888888b88888bbbbbbbb
            8888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888588888888b55bbb55b6888888855b5588888888888
            8888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888588888888888555888688888555b5b555888888888
            8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888886688888888588888888888b5b88866b88bbbb555bbbbb8b88888
            8888888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888588888888888bbb888665555bbb5555bbb55588888
            888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888858888888888855588886b555555555555555b88888
            8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888588888888888b5b888866bbb8b88888b88bb888888
            8888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888588888888888858888886b5855588855585b888888
            8888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666888b88888888888858888886658b5b888b5b858888888
            8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886655b55888888888858888886658858888858858888888
            888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555b5b5558888888858888888658858888858858888888
            88888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88bbbb555bbbbb8b888858888888658858888858858888888
            888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555bbb5555bbb555888858888888858858888858858888888
            88888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b555555555555555b888858888888856858888858858888888
            888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8b88886b68bb88888b8888888856658888858858888888
            888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5855588855565b88888b8888888858658888858858888888
            888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858b5b888b5b65688888b8888888858658888858858888888
            88888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885666888b8888888858858888858858888888
            8888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588586666888888888858856888858858888888
            8888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588886666888888858856688858858888888
            888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858858888858858888886666888885b858688858b58888888
            8866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888666666855b5866885b558888888
            66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885888888888886666b55555555555b8888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888865555555555588888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888b55bbb55b888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888555868888888888
            888fffffffff88888ffffffff88888ff88888f88f888888f88fff88888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888b5b866888888888
            888f88888888f888f88888888f888f8f88888f88f888888f88f88fff88888888888888888888888888888888888888888888888888888888588588888588588888888888888888888bbb886688888888
            888f88888888f888f88888888f888f88f8888f88f888888f88f88888888888888888888888888888888888888888888888888888888888885b858888858b588888888888888888888555888868888888
            888f88888888f888f88888888f888f88f8888f88f888888f88f888888888888888888888888888888888888888888888888888888888888855b5888885b5588888888888888888888b5b888886688888
            888f88888888f888f88888888f888f888f888f88f888888f88f8888888888888888888888888888888888888888888888888888888888888b55555555555b88888888888888888888858888888668888
            888f88888888f888f88888888f888f888f888f88f888888f8f88888888888888888888888888888888888888888888888888888888888888855555555555888888888888888888888858888888866888
            888f88888888f888f88888888f888f8888f88f888f8888f888ffffff8888888888888888888888888888888888888888888888888888888888b55bbb55b8888888888888888888888858888888888668
            888ffffffff88888f88888888f888f8888f88f888f8888f888888888f8888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888866
            888f8888888f8888f88888888f888f88888f8f888f8888f888888888f888888888888888888888888888888888888888888888888888888888888b5b8888888888888888888888888858888888888888
            888f88888888f888f88888888f888f88888f8f888f8888f888888888f888888888888888888888888888888888888888888888888888888888888bbb8888888888888888888888888858888888888888
            888f88888888f888f88888888f888f888888ff888f8888f88888888f88888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888888
            888f88888888f888f88888888f888f888888ff888f8888f888fffff88888888888888888888888888888888888888888888888888888888888888b5b88888888888888888888888888b8888888888888
            888f88888888f8888ffffffff8888f8888888f8888ffff8888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            888f88888888f8888888888888888f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            888fffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888
            8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888
            8888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666668888888
            8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666688888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
            8888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
            8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688688888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888885888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888885888888
            8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888855588888
            8888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888
            8888858888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555588
            8888888888888868888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555888
            8888888888888858888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888
            8888888888885555588888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558558888
            8888888888888555888888888888885555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588858888
            8888888888888585888888888888888585888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
            8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
            8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555888888588888888888888
            8888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555558888888588888888888888
            8888888886888888888888555888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888885558888888888888
            8888888885888888888555555555888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885585588888885558888888888888
            8888888555558888888855555558888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888885888588888855555888888888888
            8888888855588888888885555588888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888
            8888888858588888888885585588888888888888888885555555558888888888888888888888888888888888888888888888888888888888888888888885888888888888888885555555558888888888
            8888888888888858888885888588888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888855588888888888888888855555888888888888
            8888888888888555888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888555855588888888888
            8888888888855555558888888888888888888888888888855855888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558885588885888888
            8888888888885555588888888888885888888888888888858885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888588855588888
            `)
    } else if (current_level == 4) {
        tiles.setCurrentTilemap(tilemap`level9`)
        scene.setBackgroundImage(img`
            fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
            fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
            fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
            ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
            fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
            fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
            fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
            fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
            fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
            fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
            ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
            fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
            fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
            ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
            fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
            ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
            ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
            fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
            fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
            cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
            ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
            ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
            fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
            fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
            ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
            fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
            ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
            ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
            ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
            ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
            fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
            fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
            ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
            ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
            dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
            dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
            dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
            ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
            ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
            ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
            ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
            ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
            dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
            dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
            bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
            bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
            bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
            bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
            bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
            bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
            ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
            dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
            ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
            ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
            dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
            ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
            bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
            dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
            bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
            cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
            ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
            ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
            ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
            cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
            cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
            ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
            cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
            ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
            cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
            cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
            ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
            cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
            fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
            fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
            fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
            ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
            fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
            `)
        game.splash("BOSS LEVEL")
        game.splash("Escape from the boss")
        game.showLongText("Υασσας Ζευσ που με χαιρετάει ό τελευτᾳ", DialogLayout.Center)
    }
    for (let value_2425 of sprites.allOfKind(SpriteKind.Player)) {
        value_2425.destroy()
    }
    for (let value_6969 of sprites.allOfKind(SpriteKind.coin)) {
        value_6969.destroy()
    }
    Zeus_block = sprites.create(assets.image`myImage`, SpriteKind.Player)
    tiles.placeOnRandomTile(Zeus_block, assets.tile`myTile1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    Zeus_block.ay = 300
    Zeus_block.ax = 40
    scene.cameraFollowSprite(Zeus_block)
    for (let value2 of tiles.getTilesByType(assets.tile`coin`)) {
        coin2 = sprites.create(assets.image`spikes`, SpriteKind.coin)
        animation.runImageAnimation(
        coin2,
        [img`
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 4 4 4 4 4 4 4 4 4 4 5 5 . 
            . 5 4 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 4 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 4 4 4 4 4 4 4 4 4 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            `,img`
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 4 4 4 4 4 4 4 4 5 5 . . 
            . . 5 4 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 4 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 4 4 4 4 4 4 4 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `,img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 4 5 5 . . . 
            . . . 5 4 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 4 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 4 4 4 4 4 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `,img`
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . 5 4 5 5 5 5 5 5 . . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . . 5 4 5 5 5 5 5 5 . . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 4 4 5 5 . . . . . 
            . . . . . 5 4 5 5 5 5 . . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . . 5 4 5 5 5 5 . . . . . 
            . . . . . 5 5 4 4 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 4 5 5 . . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . 5 5 4 5 5 5 . . . . . 
            . . . . . . 5 4 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 4 4 5 5 . . . . . 
            . . . . . 5 4 5 5 5 5 . . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . 5 5 4 5 5 5 5 5 . . . . 
            . . . . . 5 4 5 5 5 5 . . . . . 
            . . . . . 5 5 4 4 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . 5 4 5 5 5 5 5 5 . . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . . 5 4 5 5 5 5 5 5 . . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            `,img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 4 4 4 4 4 4 5 5 . . . 
            . . . 5 4 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 4 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 4 4 4 4 4 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `,img`
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 4 4 4 4 4 4 4 4 5 5 . . 
            . . 5 4 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 4 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 4 4 4 4 4 4 4 4 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            `,img`
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 4 4 4 4 4 4 4 4 4 4 5 5 . 
            . 5 4 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 4 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 4 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 4 4 4 4 4 4 4 4 4 4 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin2, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value_69692 of tiles.getTilesByType(assets.tile`myTile2`)) {
        Boss = sprites.create(assets.image`boss`, SpriteKind.boss)
        Boss.ay = 300
        Boss.follow(Zeus_block)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile0`)) {
        bbboost = sprites.create(assets.image`d_jump`, SpriteKind.boost)
        tiles.placeOnTile(bbboost, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    if (upside == 1) {
        Zeus_block.ay = -300
        Zeus_block.ax = -40
        Zeus_block = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    }
}
scene.onOverlapTile(SpriteKind.boss, assets.tile`jump boost`, function (sprite, location) {
    Boss.vy = -200
})
let Boss: Sprite = null
let coin2: Sprite = null
let bbboost: Sprite = null
let Zeus_block: Sprite = null
let current_level = 0
let Boost = 0
let upside = 0
upside = 0
Boost = 1
current_level = -1
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    666666666668cffffffffc88ccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccffffffffffff69bbbbbbbb6666666666666666666ccccccccccccccccccccccccccccccc
    6666666666668cffffff888cccccfffffffffffffffffffccccccccccccccccccccccccccbbcccccccccccccfffffffffff69bbbbbbbbbbbb666666666666666cccccccccccccccccccccccccccccccc
    66666666666688cfffc88ccccccccffffffffffffffffffccccccccccccccccccccccccccccccccccccccccfffffffffff69bbbbbbbbbbbbbbb666666666666ccccccccccccccccccccccccccccccccc
    6666666666668888c888cccccccc6cfffffffffffffffffccccccccccccccccccccccccccccccbbbb66666cfffffffffc69bbbbbbbbbbbbbbbbb6666666666cccccccccccccccccccccccccccccccccc
    666666666666888888cccccccccc66cffffffffffffffffccccccccccccccccccccccccccccbddbbbbb666ccfcffffff69bbbbbbbbbbbbbbbbbbb6bb66666ccccccccccccccccccccccccccccccccccc
    66666666666688888cccccccccccc66cfffffffffffffffccccccccccccccccccccccccccccbddd99bbbbb6cccffffffc999bbbbbbbbbbbbbbbbbb666666cccccccccccccccccccccccccccccccccccc
    666666666666888888cccccccccccc66fffffffffffffffcccccccccccccccccccccccccbcccddb9999dd966c6cffffff6b99bbbbbbbbbbbbbb666866666cccccccccccccccccccccccccccccccccccc
    666666666666688888ccccccccccccc6cffffffffffffffcccccccccccccccccccccccbbdcc6ddd99999999b6b6cfffffc66b9bbbbbbbbbb96bb68c6666ccccccccccccccccccccccccccccccccccccc
    6666666666666888888ccccccccccccc6cffffffffffffcccccccccccccccccccccccbdbdddbbd1d66bb6b99bbbbcfffff666b9bbbbbbb9b68c4ecccc66ccccccccccccccccccccccccccccccccccccc
    6666666666666688888cccccccccccccccffffffffffffccccccccccccccccccccccc6dddddbbb1b6c66666b66bbbcffffcb66b9bbbbb9688c8ceeceee8ccccccccccccccccccccccccccccccccccccc
    66666666666666888888cccccccccccccccfffffffffffcccccccccccccccccccbcbbbddddbbb99dd4b6666666bbbbcfffc6666b99999968cc88eeeeee8ccccccccccccccccccccccccccccccccccccc
    66666666666666888888ccccccccccccccccffffffffffcccccccccccccccccccbddddddd9bbb6d11b4bbb66666bbbcffff66666b999996c8888eeeeec8ccccccccccccccccccccccccccccccccccccc
    66666666666666688888ccccccccccccccc8cfffffffffcccccccccccccccccccbdddddddddb6b551dbe44b66666bbbcccfcb6666b999b4c8888eeecec8ccccccccccccccccccccccccccccccccccccc
    666666666666666888888ccccccccccccccc8cfffffffffccccccccccccccccccbddddddddd96ce4bbbeeeec666666bbbfff666666b9dd5ec888ceecc8cccccccccccccccccccccccccccccccccccccc
    666666666666666688888cccccccccccccccc8cffffffffcccccccccccccccccccdddddd9bd96ccbbbbcceec6866668bcfffcb66666b5ddee8888ceccccccccccccccccccccccccccccccccccccccccc
    6666666666666666688888ccccccccccccccccccfffffffcccccccccccccccccccccc6b99b666cb43bbceeec666666cffffff6b66bbb455eef8888668ccccccccccccccccccccccccccccccccccccccc
    66666666666666666688888ccccccccccccccccccffffffcccccccccccccccccccccccc6bb666c4bbbbbece66b6666cfffffff66bdb6e45ecef86696cccccccccccccccccccccccccccccccccccccccc
    66666666666666666688888cccccccccccccccccccfffffcccccccccccccccccccccccccb66c6cbbcbbb4ec6666666cfffffff8bb9b6e44effc6996b6ccccccccccccccccccccccccccccccccccccccc
    68666666666666666688888ccccccccccccccccccccffffccccccccccccccccccccc8cec96666eebbcbb4c66666666ccffffff8bbbb6eeeffc69996666cccccccccccccccccccccccccccccccccccccc
    886666666666666666888888cccccccccccccccc66ccfffccccccccccccccccccc88cbdd9bb66b4bbccbec666666668cbccff86b9b6ceeffc69b99666666cccccccccccccccccccccccccccccccccccc
    c886666666666666666888888ccccccccccccccc666cfffcccccccccccccccccc8c7ddd99bbdbbeeecceee66666868ce4bec88cb9b8cefc6996b996666666ccccccccccccccccccccccccccccccccccc
    cc86666666666bbb666888888ccccccccccccccccc66cffcccccccccccccccc8cbbdddd9999dbbbecccccc66666668cebb4c86b9968ffc9966bb996666666ccccccccccccccccccccccccccccccccccc
    cc888666666666bb66668888888cccccccccccccccccccfcccccccccccccccc8cdddddd999ddbbbbcccbcb666686688eeec66bb9b88fc66666b69666666666cccccccccccccccccccccccccccccc8ccc
    ccc888666666666bb6668888888cccccccccccccccccccccccccccccccccccc8cbddddd999db999bccbbbb99d686666ccb99b6bb68cc966666b9966666666cccccccccccccccccccccccc8cccccc8ccc
    cccc886666666666b66688888888ccccccccccccccccccccccccccccccccc8ccebdddd9999db999966bb99b69b866cc6bbbbbbb68cc69666666966666666cccccccccccccccccccccccccccccccc88cc
    cccc888666666666b666888888888cccccccccccccccc66ccccccccccccc8cbbebbbbbb999bbb999699d99966b66666bbb99bb688cc9666666996666666ccccccccccccccccccccccccccccccccccccc
    ccccc888666666666666688888888cccccccccccccccc66cfcccccccccccbddbbbbbbbbbbbbd999999999ddb6b6866b99996668ccc6966666696666666cccccccccccccccccccccccccccccccccc8ccc
    cccccc88666666666666668888888cccccccccccccccccc6cccccc88c8cbddbbbbbbbbbbb9bd1999d9999ddbb98cccbbb66cccccc6666666666666666ccccccccccccccccccccccccccccccccccc88cc
    ccccccc88666666666666688888888cccccccccccccccccc66ccc866ccbdbbbbbbcbbbbbbbbbd999d99699d6968cccccccccccccc666666666b66666cc8cccccccccccccccccccccc88888cccccc8ccc
    cccccccc8886666666666688888888ccccccccccccccccccccccf8666ebbbbbbd3bcbbbbbb9bdd99999999b6d6886ccccccccfffffc666666666666cc8ccccccccccccccccccccc88886668ccccc8ccc
    cccccccc8888888888666668888888ccccccccccccccccccc666c8666ccce333bbcccbbbbcb9ddd9999d9db6bc8668cccccffcccfcc66699666666cc88cccccccccccccccccccc888888668ccccc8ccc
    ccccccccc8888888888666688888888cccccccccccccccccc6668f8886ccebbcccffcccbcc69bbd999d99b66bb8668ccccffcccc6666666666666c88888c8cccccccccccccccc8888888868ccccccccc
    cccccccccc8888888888666888888888cccccccccccccccc666688ff88ccccccffc888ffc666bb99d999999666868fffccfccc86666966666666888888888cccccccccccccccc88888888688cccccccc
    ccccccccccc8888888886668888888888cc8cccccccccccc6667c88ff88fccccc88c888f86666bddd999966688668ffff8ccc86669111996666888888888ccccccccccccccccc88888888668cccccccc
    cccccccccccc888888888c688888888888ccccccccccccccc6b5d5e8ffffccc88888888cf8666bddd99998888668ffffffc8886691111111996888888888cccccc8888ccccccc8888888866ccccccccc
    ccccccccccccc88888888c688888888888cccccccccccccc664dd4eefff6688c88c888888f8666dddd69c8886688fffffc888866111991dd119668888888cccccc88888cccccc8888888866cccccccc8
    cccccccccccccc8888888cc888888888888cccccccccccc66c5d4eeefffc688888888ccc88f86bb9d96bf8888ffffff86666886919666666911168888888cccccc86866cccccc8888888866ccccccccc
    ccccccccccccccc888888cc888888888888cccccccccccc684d4ecffffcc88888cc888cc8cffcdb9d96cffffffffff666666669196666666691198888888ccccc8888666ccccc88888888668cccccc8f
    cccccccccccccccc88888cc88888888888888cccccccc8ccc4eeefffc88cc8888cccc8888cfcd9bdd6cffffffffff896666666916666666666919688ccccccccc8888866ccccc88888888668ccccc8ff
    ccccccccccccccccc88888cc88888888888888ccccccc8ceeeeeffc88ccccc888ccccc88ccbb66b668c8ff888ffff89666666699666666666691968cccccccccc88888666ccccc888888888ccccccfff
    cccccccccccccccccc88888c88888888888888ccccccc8cceecfc88cccccc88888c88c88c8888bb6888fc668868ff666666666666666666669119888cccccccc88888666668cccc88888ccccccccffff
    ccccccccccccccccccc88888888888888888888cccccc8cceeffc8ccccccc8cc888888888888cb68888868c66cfff66666666666666666666d116688888ccccc88888666666ccccccccccccccc8fffff
    ccccccccccccccccccc888888888888888888888cccc8cceecff88cccc88cccc8888cc888888666666668868ff8ff88866666666666666669119668688ccccc8888866666666ccccccccccccccffffff
    cccccccccccccccccccc888888888886888888888ccc8cecffff888cccccccc8888888888f88866668c886cf88ffffff88866666666666661196666888cccc86888c666666666ccccccccccccfffffff
    cccfccccccccccccccccc888888888666888888888cc8ccceecfc888c8ccc88888886888fbbf888888668888fff88fff88888866666666611966666888cccc8688866666666668ccccccccccffffffff
    cccccccccccccccccccccc88888888666688888888888cebbbeeec8888cc88f8888888ffc99e88866666668f8888ffff88cf88888866669116666666888cc86688c666666666668ccc8888888fffffff
    ccccccccccccccccccccccc8888888886688888888888cbbbecebc88888888fffff8ffffcb9be86666668886688fcccf88688fc88866691996666686888cc8668c66666666666666ffffffffffffffff
    cccccccccccccccccccccccc88888888888888888888cbbbcccbc88888888f8ff888fff8cb99bec8888666888fceb96ff88668888669911666666888888c86688666666666666666cfffffffffffffff
    ccccccccccccccccccccccccc888888888888888888cbb4ecfeec888888888f8888f8c8ceb9999eec88888fcccbb968fffff88886611196666666888888c8668c6666666666666666cffffffffffffff
    ccccccccccccccccccccccccc888888888888888888beeeccfec888888888f888fff888ceeb9999bbec88ccbb999bccffffff88861196666666666888888668c666666666666666666cfffffffffffff
    888ccccccccccccccccccccccc8888888888888888cecec88cec8cc888888888ff8888866ce4d99999dbb99999bbefcff88888869196669666666666888866cc6666666666666666666cffffffffffff
    88888cccccccccccccccccccccc888888888888888cccc888eec888888888888f88888cb996ee4bbddbe4bdbbeeecccff888668611b666966666666888866ccc66666666666666666666cfffffffffff
    8888888ccccccccccccccccccccc888888888888888ec888c4ec8888888f888f88888cb19996cee4444eeeeefffc6b6cf8886669116666666666666888668cccc66666666666666666666fffffffffff
    8866888cccccccccccccccccccccc88888888888888cc88c55eec888888888888c888699999bc8c44ccceccefff69d96c88866611d666666666666688668cccccc6666666666666666666fffffffffff
    88666888cccccccccccccccccccccc888888888888888884544eec88888888888c8699999999ccccce4cececcec9d99988c886911966666666666688866cccccccc666666666666666666fffffffffff
    8666688cccccccccccccccccccccccc888888888888888c55444ee8888888888ccb999999999eec4ce4ece8cee69d99968888691196666666666668886cccccccccc6666666666666666cfffffffffff
    8666668cccccccccccccccccccccccc88888888888888c554444bec888888888cb99d1111199b46744e4ccccec99999668688861166666666666688868cccccccccccc66666666666666cfffffffffff
    8699668ccccccccccccccccccccccccc8888888888888d544e444eec88888f8c69d111111199b446744ceceee69119966866886919666666666668866cccccccccccccc6666666666666cfffffffffff
    8861668cccccccccccccccccccccccccc88888888888cd544ee454ec888888869191111d99996b548e4ceeeec69999996866686619666666666668868cccccccccccccccc66666666666ffffffffffff
    886996cccccccccccccccccccccccccccc888888888886d54e4454c8888888899991199999996644e8ce4eeccccc6999688668869196666666666668cccccccccccccccccc666666666cffffffffffff
    886696888888ccccccccccccccccccccccc88888888888b554454c88888888699119999d999668e44ee44fffcccccc66686666866919666686666668cccccccccccccccccccc6666666fffffffcfffff
    88866666668888cccccccccccccccccccccc88888888888b5544e8888888886919999999996cccf44eeecfffccbbbec6686666666919666688866688888cccccccccccccccccc66666cfffffc88cffff
    c88869199988888cccccccccccccccccccccc88888888888b55e888888888891999999966ccccffc4eeff8fcccbbbbbc8886666666919666666666888c888cccccccccccccccccc666ffffc8888cffff
    c888866666db8888cc8ccccccccccccccccccc8888888888874c88888888869999999bbccccccfffccfffcccccbbbbbec8666666669996666666688888c888cccccccccccccccccc6cffc888888fffff
    cc888c888869d666688ccccccccccccccccccc88888888888cc88888888889999b6bbbecccccf88cfff888cceebbbbcecc666666669111966666688888888888cccccccccccccccccfc88888888fffff
    cff8fff8888669996688cccccccccccccccccc88888888888888888888886919bbbdddbccccfc8cc8f86668cbbbbbbeccf86666666691119666668888888888888ccccccccccccccc8888888888fffff
    fff8ffff88888889968cccccccccccccccccccc888888888888888888888999bddbbbbbcccccc8e88866688bbbbbb3eccc666666666991196666668888c88888888ccccccccccccc8888888888cfffff
    fffffff88888f886968cccccccccccccccc8c8888888888888888888888699bddbbbbbccccfcccc8886686663bbbbbeccc66666666669119666666888888cc8888888cccccccccff8888888888ffffff
    fffffffffffff88696888cccccccccccccc888c8888888888888888888866bddbbbbbbcccfcccc8888888866bdbbbecccc66666666691119666666688888888888888888cccccfff888888888cffffff
    ffffffffffffff88996888ccccccccccccc88888888888888888888888866b3beebbbcccfc888888888668886bbbececcc6666666691111966666688888888888888888888ccffffc88888888cffffff
    ffffffffffffff88696888888ccccfccccc8888888888888888888888886cebeeebbbccfc8888888886666888cebeebec666666669111196666666688888888888888888888fffff888888888fffffff
    ffffffffffffff8666996668888888ccccc88c8888888888888888888886ceebebbbccfc88888888866668888cbbebbe866666669111996666666666888888888888888888cfffff88cccc88cfffffff
    ffffffffffffff88669d9999b6668888cccccc8888888888888888888888bbbbebbcccc88888888886688888864bebbc866666991119666666666666666888888888866688ffffffc8888c88ffffffff
    fffffffffffffff886666666999666688ccccc888888888888888888888cbbbeebcccc888888888886668888cbbbeecc86666691119666666666668666666688888886688fffffff8888cc88ffffffff
    ffffffffffffffffc866688886666bd6688888ff8888888888888888888bbbbecccc8888888888886666888ce46bbecc86666691119668cccc6666666666666688888888ffffffffc8888888ffffffff
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444eefffe4effffffe444efffe44efff44444efff4fffffffeeffffffffffffffe44effe44efffe444effffffeeffffffe4ffffe4effe44efffee444444444444444444
    444444444444444444444444444efeeeffe4efe44fe44efeeffe4eeffe4444fffe4eff44ef4fe4efe4eeeffeefff44effe44ef44444ee44eff44efe44fe44ff4444fe44efeeffe444444444444444444
    44444444444444444444444444efe444ee44efe44ee4efe44eff44effe444effe44eff444fee44ffe4ee4ffe4effe44efe44fe44444f444ffe44efe44ee4eff4444fe4eff444e4444444444444444444
    44444444444444444444444444ffe4444444ffe44444ff4444ffe4effe444fffe44eff44444444ffe4444ffe4eff444eff4ef444444e44ffe444ffe44444eff444efe4effe4444444444444444444444
    4444444444444444444444444eff44444444ffe4444efe4444ffe4feff44efefe44efe44444444ff44444ffe4efe4444ffefe44444444eff4444ffe44444efe444efe44fffe444444444444444444444
    4444444444444444444444444efe44eeeeeefffffe4efe4444ffe4feffe4feefe44efffff4444eff4444efffffe44444effe444444444ffe444efffffe44efe444ef4444efffe4444444444444444444
    4444444444444444444444444efe44effe4eff44e44efe4444ff44feefeef4ffe44ffe4e44444eff4444eff4ff444444effe44444444ffe4444eff44e444ffe444ef444444fff4444444444444444444
    4444444444444444444444444eff444efe4eff44444efe444efe4ef4efffe4ff444ffe4444444efe4444eff4efe44444eff44444444eff444e4eff444444ffe444ee444444eff4444444444444444444
    4444444444444444444444444effe44ffe4efe444eeeff444ff44ef44fff44ff444ffe44ee444efe4444efe4eff44444efe44444444ffe44ee4efe444ee4ffe444fe44fe44efe4444444444444444444
    44444444444444444444444444effeefe44efee4ef44ffeeefe44ee44ffe4eff44effe4efe444ffe4444efe44ffee444efe4444444ffe444fe4efee4ef44effeeee44effeeff44444444444444444444
    444444444444444444444444444efffe44fffffffe444effe444effe4ef4effffefffffffe44ffffe44ffffe4efee44efffe44444efffffffefffffffe444efffe4444efffe444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    c8888888888888888888888888fffffffffff8869988888888888888888888888888666666666666666666666911119996666688888888888cc8888ffffffffffffffffffffffffffc66666666666666
    c88888888888888888888888888ffffffffff88869888f888888888666668888688666666666666666666699111119666666666688888888888888ffffffffffffffffffffffffff6666666666666666
    c88888888888888888888888888ffffffffff888696888c8888888666666888866666666666666666666699111119666666666666888888888888ffffffffff68ffffffffffffff66666666666666666
    c888888888888888888888888888ffffffffff88669666888888866666666886666666666666666999991111111199666666688888888888888ffffffffff8666ffffffffffff8666666666666666666
    c888888888888888888888888888fffffffffff886699968888886666666666666666666666666911111111999996666668886668888888888ffffffffff866696ffffffffff66666666666666666666
    c8888888888888888888888888888ffffffffffff866969688886666666666666666666666666d11111199999666666668686668888888888ffffffffff88666698ffffffff666666666666666666666
    c8888888888888888888888888888fffffffffffff8688668888666666666666666666666666911119966666666666666666866888888888ffffffffff888886696ffffffc6666666666666666666666
    8888888888888888888888888888ffffffffffffff88886668886666666666666666666666691991966686666666666666688668888888888ffffffff88888886996ffffc66666666666666666666666
    8888888888888888888888888888fffffffffffffff888b6686666666666666666666666669999d966668866688866666668866888888886888fffff8888888866698ffc666666666666666666666666
    888888888888888888888888888fffffffffffffff8888b686666666666666666666666666999996666668888888866666668888866888866c888ff888888888866668c6666666666666666666666666
    888888888888888888888888888fffffffffffffff8888b68866666666666666666666666999996666666886688888666666668666666866688888f8888888886666966666666666666666666666666d
    8888888888888888888888888888fffffffffffff88888668888666666666666666666669999996666688886666688866666666666666666666c88888888888866666666666666666666666666666661
    668888888888888888888888888888888ffffffff88888896888866666666666699666999119966666668886666666666666666666666666666888888888888866666666666666666666666666666691
    9968888888888888888888888888888888ffffff888888886888866666666666966669111196666666666666666666666666666666666666666688888888888866666666666666666666666666666691
    9999668888888c8888888888888888888888888888888888868886666666669966669111966666666666666666666666666666666666666666666c888888886666666666666666666666666666666999
    1999999688888888888888888888888888888888888888888888666666666996666911119666666666686666666666666666666666666666666666f88888886666666666666666666666666666666111
    999999999688888c8cccc8ccccc8c888888888888888888888888666666669666699111966666666666686666666666666666666666666666666668f8888888866666666666666666666666666669111
    11999999996888888888888888ccccccccc888888888888888888666666666666991119666666666666866666666666666666666666996666666666cf888886666666666666666666666666666669111
    111119999968888888888886688888888888888888888888888886666666666699111966666666666668866669966666696666666699666666666666c888886666666666666666666666666666669111
    11111111196888888888888888866666666666666cc888888888866666666669991199666666666666668886699966666696666699996666666666666f88866666666666666666666666666666669111
    1111111119688888888888888888888888888888866666666666666666666699911199666666666666688888669996666669666699996666666666666686666666666666666666666666666666661111
    1111111111688888888888888888888888888888888666666666666666666991111191996666666666688888866996666666996699996666666666666666666666666666666666666666666666691111
    11111111111b8888888888888888888888888888888886666666666669999911111991119966666666668888866696666666696669996666666669666666666666666666666666666666666666691111
    9999999119119b68888888888888888888888888888666666666666669991111199999111119666666666688886666666666699669966666666696666666666666666666666666666666666666691111
    9999999911111119b66888888888888888888888866666666666666669911111999111111111966666666666688866666666699999966666666699666666666666666666666666666666666666691111
    9999999911991111119688888888888888888886666666666666666699111111991111111111966666666666668866696666669999966666666999666666666666666666666666666666666666611111
    9999999991199911111968888888888888888666666666666669999991119111991111111111168866686666666886666666669999966666666999666666666666666666666666666666666669111111
    9999999991119999191196888888888888888866666666666699119111191111991111111111198886688866666668866996666919966666666999666666666666666666666666666666666911111111
    99999999991999999991196888cbddddbbbdbbb66666666669111111199111119911111991111199666666666666666666666699999666666666996666666666666666666666666b6666691111111111
    9999999999999999999111996d11111111111111966666669111111111111111111111999111111119666666666666666666669999966666666999666666666666666666666666966666911111111119
    `)
pause(2000)
current_level = 0
Startlevel()
