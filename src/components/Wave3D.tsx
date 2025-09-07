"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// using THREE.MeshBasicMaterial directly for casting

export default function Wave3D(): React.ReactElement {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const width = mount.clientWidth || window.innerWidth;
        const height = Math.max(160, mount.clientHeight || 260);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            -width / 2,
            width / 2,
            height / 2,
            -height / 2,
            -1000,
            1000
        );
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0); // transparent bg
        mount.appendChild(renderer.domElement);

        const segments = 280;
        const waveWidth = width * 1.15;
        const amplitude = Math.min(80, height * 0.4); // reduced amplitude
        const xs: number[] = [];
        for (let i = 0; i <= segments; i++)
            xs.push((-waveWidth / 2) + (i / segments) * waveWidth);

        const thickness = Math.max(40, Math.min(140, amplitude * 0.8)); // balanced thickness

        const verts = new Float32Array((segments + 1) * 2 * 3);
        const indices: number[] = [];
        for (let i = 0; i < segments; i++) {
            const a = i * 2, b = a + 1, c = (i + 1) * 2, d = c + 1;
            indices.push(a, c, b, c, d, b);
        }

        for (let i = 0; i <= segments; i++) {
            const x = xs[i];
            const topY = thickness / 2;
            const botY = -thickness / 2;
            const base = i * 6;
            verts[base] = x; verts[base + 1] = topY; verts[base + 2] = 0;
            verts[base + 3] = x; verts[base + 4] = botY; verts[base + 5] = 0;
        }

        const ribbonGeometry = new THREE.BufferGeometry();
        ribbonGeometry.setAttribute("position", new THREE.BufferAttribute(verts, 3));
        ribbonGeometry.setIndex(indices);

        const ribbonMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color("#b38bff"),
            side: THREE.DoubleSide,
            transparent: true,
        });
        const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMat);
        ribbon.renderOrder = 5;
        scene.add(ribbon);

        const glowMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color("#b38bff"),
            side: THREE.DoubleSide,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        // Glow reduced
        const glowA = new THREE.Mesh(ribbonGeometry.clone(), glowMat);
        glowA.scale.set(1.01, 1.01, 1.01);
        if (!Array.isArray(glowA.material)) {
            (glowA.material as unknown as { opacity?: number; transparent?: boolean }).opacity = 0.12;
            (glowA.material as unknown as { opacity?: number; transparent?: boolean }).transparent = true;
        }
        glowA.renderOrder = 1;
        scene.add(glowA);

        const glowB = new THREE.Mesh(ribbonGeometry.clone(), glowMat.clone());
        glowB.scale.set(1.03, 1.03, 1.03);
        if (!Array.isArray(glowB.material)) {
            (glowB.material as unknown as { opacity?: number; transparent?: boolean }).opacity = 0.08;
            (glowB.material as unknown as { opacity?: number; transparent?: boolean }).transparent = true;
        }
        glowB.renderOrder = 0;
        scene.add(glowB);

        const clock = new THREE.Clock();
        let reqId = 0;

        const resize = () => {
            const w = mount.clientWidth || window.innerWidth;
            const h = mount.clientHeight || 240;
            renderer.setSize(w, h);
            camera.left = -w / 2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = -h / 2;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", resize);

        const animate = () => {
            const t = clock.getElapsedTime();
            const phase = t * 1.6;
            const pos = ribbonGeometry.attributes.position.array as Float32Array;
            for (let i = 0; i <= segments; i++) {
                const centerY =
                    Math.sin(xs[i] * 0.008 + phase) *
                    amplitude *
                    (0.5 + 0.3 * Math.sin(phase * 0.25 + i * 0.01));
                const topY = centerY + thickness / 2;
                const botY = centerY - thickness / 2;
                const base = i * 6;
                pos[base + 1] = topY;
                pos[base + 4] = botY;
            }
            ribbonGeometry.attributes.position.needsUpdate = true;
            glowA.geometry.attributes.position.needsUpdate = true;
            glowB.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            reqId = requestAnimationFrame(animate);
        };

        reqId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(reqId);
            window.removeEventListener("resize", resize);
            try { ribbonGeometry.dispose(); } catch { }
            try { ribbonMat.dispose(); } catch { }
            try { renderer.dispose(); } catch { }
            if (mount && renderer.domElement.parentNode === mount) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute left-0 right-0 top-[200px] min-h-[220px] md:min-h-[300px] lg:min-h-[400px] pointer-events-none overflow-hidden"
        />
    );
}
