import { memo, useEffect, useRef, useCallback } from "react";

const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const createStars = useCallback((width: number, height: number) => {
        const stars: { x: number; y: number; radius: number; color: string; speed: number }[] = [];
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const radius = Math.random() * 1.5;
            const color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
            const speed = Math.random() * 0.05;
            stars.push({ x, y, radius, color, speed });
        }
        return stars;
    }, []);

    const drawStars = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, stars: any[]) => {
        ctx.clearRect(0, 0, width, height);

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#0a0a2a");
        gradient.addColorStop(1, "#1a0b35");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        const nebulaGradient = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, width * 0.5);
        nebulaGradient.addColorStop(0, "rgba(128, 0, 255, 0.2)");
        nebulaGradient.addColorStop(0.5, "rgba(75, 0, 130, 0.1)");
        nebulaGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(0, 0, width, height);

        const nebulaGradient2 = ctx.createRadialGradient(width * 0.2, height * 0.8, 0, width * 0.2, height * 0.8, width * 0.4);
        nebulaGradient2.addColorStop(0, "rgba(0, 128, 255, 0.2)");
        nebulaGradient2.addColorStop(0.5, "rgba(0, 75, 130, 0.1)");
        nebulaGradient2.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = nebulaGradient2;
        ctx.fillRect(0, 0, width, height);

        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.fill();
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: any[] = [];
        let animationFrameId: number;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = createStars(canvas.width, canvas.height);
            drawStars(ctx, canvas.width, canvas.height, stars);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const animateStars = () => {
            drawStars(ctx, canvas.width, canvas.height, stars);
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });
            animationFrameId = requestAnimationFrame(animateStars);
        };

        animateStars();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [createStars, drawStars]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default memo(BackgroundCanvas);
