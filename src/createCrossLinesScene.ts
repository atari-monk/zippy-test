import type { FrameContext } from "zippy-shared-lib";
import { GameEngine } from "zippy-game-engine";
import type { Scene } from "zippy-game-engine";

interface CrossLinesSceneConfig {
    lineColor: string;
    lineWidth: number;
}

export const createCrossLinesScene = (_gameEngine: GameEngine): Scene => {
    const config: CrossLinesSceneConfig = {
        lineColor: "green",
        lineWidth: 3,
    };

    const renderBackground = (ctx: CanvasRenderingContext2D): void => {
        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const renderLines = (ctx: CanvasRenderingContext2D): void => {
        ctx.strokeStyle = config.lineColor;
        ctx.lineWidth = config.lineWidth;
        ctx.beginPath();

        drawHorizontalLine();
        drawVerticalLine();

        ctx.stroke();

        function drawHorizontalLine() {
            ctx.moveTo(0, ctx.canvas.height / 2);
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
        }

        function drawVerticalLine() {
            ctx.moveTo(ctx.canvas.width / 2, 0);
            ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
        }
    };

    return {
        name: "Cross Lines",

        init(): void {
            console.log("Initializing Cross Lines Scene");
        },

        onEnter(): void {},

        onExit(): void {},

        update(_deltaTime: number): void {},

        render(context: FrameContext): void {
            renderBackground(context.ctx);
            renderLines(context.ctx);
        },

        resize(): void {},
    };
};
