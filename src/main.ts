import "./style.css";
import "fullscreen-canvas-vanilla";
import {
    createGameCanvas,
    type FullscreenCanvasOptions,
} from "fullscreen-canvas-vanilla";
import { GameEngine, GameEngineFactory } from "zippy-game-engine";
import { RotatingRectScene } from "./rotating-rect-scene";
import { CrossLinesScene } from "./cross-lines-scene";
import type { EngineHook } from "zippy-shared-lib";

window.addEventListener("load", async () => {
    const gameEngine = setupEngine();
    setupScenes(gameEngine);
    setupCanvas(gameEngine);
});

function setupEngine() {
    const gameEngineFactory = new GameEngineFactory();
    const gameEngine = gameEngineFactory.getGameEngine();
    return gameEngine;
}

function setupScenes(gameEngine: GameEngine) {
    gameEngine.registerScene("Cross Lines", new CrossLinesScene());
    gameEngine.registerScene("Rotating Rectangle", new RotatingRectScene());
    gameEngine.transitionToScene("Rotating Rectangle");
    gameEngine.transitionToScene("Cross Lines");
}

function setupCanvas(gameEngine: EngineHook) {
    const options: FullscreenCanvasOptions = { isAnimLoop: true };
    createGameCanvas("canvas-container", "game-canvas", gameEngine, options);
}
