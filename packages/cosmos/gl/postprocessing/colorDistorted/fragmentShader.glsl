uniform sampler2D tDiffuse;
uniform float u_scale;
uniform float u_time;
uniform vec2 u_mouse;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec4 color = texture2D(tDiffuse, uv);

    // Calculate distance from mouse to current fragment
    vec2 mouse = u_mouse; // Normalize mouse coordinates, adjust as necessary
    float distance = length(uv - mouse);

    // Apply a smoothstep effect based on distance
    float effect = smoothstep(0.1, 0.2, distance) * 0.5;

    // gl_FragColor = color;

    // Distortion effect parameters
    float ripple = sin(distance * 20.0) * 0.03;
    float distortion = smoothstep(0.1, 0.3, 1.0 - distance);
    uv.y += ripple * distortion;

    // Color shift effect
    vec4 colorR = texture2D(tDiffuse, uv + vec2(0.01, 0.0) * distortion);
    vec4 colorG = texture2D(tDiffuse, uv + vec2(-0.01, 0.0) * distortion);
    vec4 colorB = texture2D(tDiffuse, uv + vec2(0.0, 0.01) * distortion);

    // Combine colors with distortion effect
    vec4 colorRipple = vec4(colorR.r, colorG.g, colorB.b, 1.0);

        // Add the highlight effect to the original color
    color.rgb *= colorRipple.rgb * effect;

    gl_FragColor = color;
}