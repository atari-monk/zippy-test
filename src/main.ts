import "./style.css";
import type { BrowserEnvironment, EventSystem } from "zippy-shared-lib";
import { BrowserEventSystem, RealBrowserEnvironment } from "zippy-shared-lib";
import {
    createGameCanvas,
    type FullscreenCanvasOptions,
} from "fullscreen-canvas-vanilla";
import { GameEngineFactory } from "zippy-game-engine";
import { createRotatingRectScene } from "./createRotatingRectScene";
import { createCrossLinesScene } from "./createCrossLinesScene";

window.addEventListener("load", async () => {
    const browserEnvironment: BrowserEnvironment = new RealBrowserEnvironment();
    const eventSystem: EventSystem = new BrowserEventSystem(browserEnvironment);

    const gameEngineFactory = new GameEngineFactory(eventSystem);
    const gameEngine = gameEngineFactory.getGameEngine();

    const options: FullscreenCanvasOptions = { loop: true };

    gameEngine.registerScene("Cross Lines", createCrossLinesScene(gameEngine));
    gameEngine.registerScene(
        "Rotating Rectangle",
        createRotatingRectScene(gameEngine)
    );
    gameEngine.transitionToScene("Rotating Rectangle");

    createGameCanvas(
        "canvas-container",
        "game-canvas",
        eventSystem,
        browserEnvironment,
        gameEngine,
        options
    );
});
