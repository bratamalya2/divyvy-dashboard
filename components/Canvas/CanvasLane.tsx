"use client";

import React, { useRef, useEffect, useState } from "react";

const CanvasLane: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);

  const drawDots = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    zoom: number
  ) => {
    const dotInterval = 18;
    const dotRadius = 1;

    ctx.fillStyle = "#C3C3C3";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adjust the drawing range based on zoom
    const drawRange = {
      width: canvas.width / zoom,
      height: canvas.height / zoom,
    };

    for (let x = 0; x < drawRange.width; x += dotInterval) {
      for (let y = 0; y < drawRange.height; y += dotInterval) {
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, 2 * Math.PI, false);
        ctx.fill();
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawDots(ctx, canvas, 1);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setZoom((prevZoom) => {
        let newZoom = prevZoom - e.deltaY * 0.001;
        newZoom = Math.min(Math.max(0.4, newZoom), 10); // clamp between 100% and 1000%
        return newZoom;
      });
    };

    canvas.addEventListener("wheel", handleWheel);

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(zoom, zoom);
    drawDots(ctx, canvas, zoom);
    ctx.restore();
  }, [zoom]);

  return (
    <canvas
      ref={canvasRef}
      className="dotted-canvas z-10 absolute w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
};

export default CanvasLane;
