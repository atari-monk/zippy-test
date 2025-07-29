import type { FrameContext } from "fullscreen-canvas-vanilla";
import { GameEngine } from "zippy-game-engine";
import type { Scene } from "zippy-game-engine";

interface RotatingRectSceneConfig {
    rectSize: number;
}

export const createRotatingRectScene = (game: GameEngine): Scene => {
    const config: RotatingRectSceneConfig = {
        rectSize: 200,
    };

    const renderBackground = (ctx: CanvasRenderingContext2D): void => {
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
    };

    const renderRotatingRect = (context: FrameContext): void => {
        const { ctx, width, height, totalTime } = context;

        ctx.fillStyle = `hsl(${(totalTime * 50) % 360}, 100%, 50%)`;
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(totalTime);
        ctx.fillRect(
            -config.rectSize / 2,
            -config.rectSize / 2,
            config.rectSize,
            config.rectSize
        );
        ctx.restore();
    };

    return {
        name: "Rotating Rectangle",

        init(): void {
            console.log("Initializing Rotating Rectangle Scene");
        },

        onEnter(): void {},

        onExit(): void {},

        update(_deltaTime: number): void {},

        render(context: FrameContext): void {
            renderBackground(context.ctx);
            renderRotatingRect(context);
        },

        resize(): void {},
    };
};
