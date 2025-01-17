export const RGBShiftShader = {
  uniforms: {
    tDiffuse: { value: null },
    amount: { value: 0.02 },
  },

  vertexShader: /*glsl*/ `
    varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}
  `,
  fragmentShader: /*glsl*/ `
		uniform sampler2D tDiffuse;
		uniform float amount;

		varying vec2 vUv;

		void main() {

			vec2 offset = vec2( -0.1, 0.) * amount;
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
		}
  `,
}
