import { Individual } from "./Individual";

export class Population {
  individuals: Individual[] = [];

  constructor(size: number) {
    this.individuals = Array.from({ length: size }, () => new Individual());
  }

  spawn(ctx: CanvasRenderingContext2D) {
    this.individuals.forEach((ant) => {
      ant.spawn(ctx);
    });
  }

  move() {
    this.individuals.forEach((a) => a.move());
  }
}
