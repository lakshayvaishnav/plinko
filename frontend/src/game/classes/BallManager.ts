import { WIDTH, ballRadius } from "../constants";
import { Obstacle, Sink, createObstacles, createSinks } from "../objects";
import { pad } from "../padding";
import { Ball } from "./Ball";

export class BallManager {
  private balls: Ball[];
  private canvasRef: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private obstacles: Obstacle[];
  private sinks: Sink[];
  private requestedId?: number;
  private onFinish?: (index: number, startX?: number) => void;

  constructor(
    canvasRef: HTMLCanvasElement,
    onFinish?: (index: number, startX: number) => void
  ) {
    this.balls = [];
    this.canvasRef = canvasRef;
    this.ctx = this.canvasRef.getContext("2d")!;
    this.obstacles = createObstacles();
    this.sinks = createSinks();
    // this.update();
    // this.onFinish = onFinish;
  }

  addBall(startX?: number) {
    const newBall = new Ball(
      startX || pad(WIDTH / 2 + 13),
      pad(50),
      ballRadius,
      "red",
      this.ctx,
      this.obstacles,
      this.sinks,
      (index) => {
        this.balls = this.balls.filter((ball) => ball !== newBall);
        this.onFinish?.(index, startX);
      }
    );
    this.balls.push(newBall);
  }
}
