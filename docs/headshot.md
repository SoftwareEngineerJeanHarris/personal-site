# About-page portrait

Original: `work/original-assets/jean-michael-harris-headshot.png` (ignored backup). Published assets: `public/images/jean-michael-harris-headshot-480.webp` and `public/images/jean-michael-harris-headshot-960.webp`.

Created with the built-in image generation tool on 2026-10-02, using the user's supplied `IMG_6568.PNG`. This is an AI-edited professional portrait, not a newly photographed studio session. The original personal photo remains outside the repository.

## Final generation prompt

Use case: identity-preserve. Edit target: the attached photograph; the subject is the adult man centered in the foreground wearing a pale blue shirt. Create a photorealistic professional headshot of this exact man for his personal software engineering portfolio About page. Preserve his recognizable facial identity, face proportions, hairline, hair color, eye color, short beard, age, and natural skin texture. Dress him in a well-tailored charcoal suit, crisp white shirt, and understated burgundy tie. Head-and-shoulders composition, upright posture, face toward camera, natural warm confident expression with subtle closed-mouth smile. Soft professional studio lighting, neutral light gray seamless background, realistic portrait photography. Portrait 4:5 crop with comfortable headroom and visible lapels. Remove all other people, ice cream, sunglasses, outdoor scene, phone screenshot chrome and text. No logo, watermark, heavy beauty retouching, artificial skin, or changed facial identity. This is an edited portrait, not a different lookalike.

## Integration

`src/data/site.ts` constructs the URLs using Vite's `BASE_URL` so the portrait resolves on GitHub Pages. Phase 7 uses 480px and 960px WebP derivatives with `srcset` and `sizes`, explicit dimensions, and high fetch priority for the About hero. The 480px file is 26,472 bytes; the 960px file is 94,396 bytes, compared with roughly 2.1MB for the PNG. Only resizing and encoding were applied; the generated portrait content was preserved. Phase 9 moved the original PNG into the ignored backup so it is not copied into the deployed build.
