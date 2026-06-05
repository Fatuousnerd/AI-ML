type Vector = { x: number; y: number };

export class Individual {
  genes: Vector[];
  currentGene = 0;
  position: Vector;

  constructor() {
    this.genes = Array.from({ length: 200 }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    }));
    this.position = { x: Math.random() * 400, y: Math.random() * 300 };
  }

  spawn(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  move() {
    if (this.currentGene >= this.genes.length) return;

    const gene = this.genes[this.currentGene];

    this.position.x += gene.x;
    this.position.y += gene.y;

    this.currentGene++;
  }
}
