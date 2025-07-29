import "./style.css";
import { GameAppFactory, GameEngine } from "zippy-game-engine";
import { FullscreenCanvas, type FrameContext } from "fullscreen-canvas-vanilla";
import { createCrossLinesScene } from "./createCrossLinesScene";
import { createRotatingRectScene } from "./createRotatingRectScene";

window.addEventListener("load", async () => {
    const gameApp = new GameAppFactory();
    await gameApp.initialize();
    const gameEngine: GameEngine = gameApp.getGameEngine();
    gameApp.registerScene("Cross Lines", createCrossLinesScene(gameEngine));
    gameApp.registerScene(
        "Rotating Rectangle",
        createRotatingRectScene(gameEngine)
    );
    gameApp.transitionToScene("Rotating Rectangle");

    new FullscreenCanvas("canvas-container", "game-canvas", {
        frameTick: (context: FrameContext) => {
            gameEngine.frameTick(context);
        },
        loop: true,
    });
});
