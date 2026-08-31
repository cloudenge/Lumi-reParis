import React, { useEffect, useRef } from 'react';

export const CanvasAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateCanvasSize();

        const frameCount = 223;
        const currentFrame = (index: number) => (
            `/ezgif-33c97363ccccccbc-jpg/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
        );

        const images: HTMLImageElement[] = [];

        // Preload images
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        const drawImageCover = (img: HTMLImageElement) => {
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, img.width, img.height,
                centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        };

        images[0].onload = () => {
            drawImageCover(images[0]);
        };

        const handleResize = () => {
            updateCanvasSize();
            updateFrame(lastKnownScrollPosition);
        };
        window.addEventListener('resize', handleResize);

        let lastKnownScrollPosition = 0;
        let ticking = false;

        const updateFrame = (scrollPos: number) => {
            // Calculate max scroll relative to document body since we have actual content now
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = maxScrollTop > 0 ? scrollPos / maxScrollTop : 0;

            let frameIndex = Math.min(
                frameCount - 1,
                Math.ceil(scrollFraction * frameCount)
            );

            if (isNaN(frameIndex) || frameIndex < 0) {
                frameIndex = 0;
            }

            if (images[frameIndex] && images[frameIndex].complete) {
                drawImageCover(images[frameIndex]);
            }
        };

        const handleScroll = () => {
            lastKnownScrollPosition = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateFrame(lastKnownScrollPosition);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 object-cover pointer-events-none"
        />
    );
};
