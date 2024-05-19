import glsl from 'glslify'

export const fs = glsl`
precision highp float;
precision highp int;
uniform vec3 Fresnel_Glow1657095673155_65_color;
uniform float rimWidth;
uniform float fadeDistance;
uniform vec3 Big_Wiggles1657095673161_68_color;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform float shininess;
uniform vec3 specular;
uniform vec3 pointLightColor;
uniform vec3 pointLightPosition;
uniform float pointLightDistance;
uniform float pointLightDecay;
uniform vec3 wrapRGB;
varying vec3 fPosition;
varying vec3 fNormal;
varying float vNoise;
varying vec3 vNormal;
varying vec3 vViewPosition;
float saturate(in float a) {
  return clamp(a, 0.0, 1.0);
}
float calcLightAttenuation(float lightDistance, float cutoffDistance, float decayExponent) {
  if(decayExponent > 0.0) {
    return pow(saturate(1.0 - lightDistance / cutoffDistance), decayExponent);
  }
  return 1.0;
}
float specularStrength = 1.0;
vec4 Fresnel_Glow1657095673155_65_main(void) {
  vec4 Fresnel_Glow1657095673155_65_gl_FragColor = vec4(0.0);
  vec3 viewDirectionW = normalize(-fNormal);
  vec3 eye = normalize(-fPosition.xyz);
  float fresnelTerm = dot(eye, fNormal);
  fresnelTerm = rimWidth * clamp(fadeDistance - fresnelTerm, 0.0, 1.);
  Fresnel_Glow1657095673155_65_gl_FragColor = vec4(Fresnel_Glow1657095673155_65_color * fresnelTerm, 1.);
  return Fresnel_Glow1657095673155_65_gl_FragColor *= 1.0;
}
vec4 Big_Wiggles1657095673161_68_main() {
  vec4 Big_Wiggles1657095673161_68_gl_FragColor = vec4(0.0);
  Big_Wiggles1657095673161_68_gl_FragColor = vec4(Big_Wiggles1657095673161_68_color * vNoise, 1.0);
  return Big_Wiggles1657095673161_68_gl_FragColor *= 0.7;
}
vec4 Three_js_Point_Light1657095673194_71_main() {
  vec4 Three_js_Point_Light1657095673194_71_gl_FragColor = vec4(0.0);
  vec3 totalDiffuseLight = vec3(0.0);
  vec3 totalSpecularLight = vec3(0.0);
  vec3 normal = normalize(vec3(modelViewMatrix * vec4(vNormal, 0.0)));
  vec4 lPosition = viewMatrix * vec4(pointLightPosition, 1.0);
  vec3 lVector = lPosition.xyz + vViewPosition.xyz;
  float attenuation = calcLightAttenuation(length(lVector), pointLightDistance, pointLightDecay);
  lVector = normalize(lVector);
  float dotProduct = dot(normal, lVector);
  float dirDiffuseWeightFull = max(dotProduct, 0.0);
  float dirDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);
  vec3 dirDiffuseWeight = mix(vec3(dirDiffuseWeightFull), vec3(dirDiffuseWeightHalf), wrapRGB);
  float pointDiffuseWeightFull = max(dotProduct, 0.0);
  float pointDiffuseWeightHalf = max(0.5 * dotProduct + 0.5, 0.0);
  vec3 pointDiffuseWeight = mix(vec3(pointDiffuseWeightFull), vec3(pointDiffuseWeightHalf), wrapRGB);
  totalDiffuseLight += pointLightColor * pointDiffuseWeight * attenuation;
  vec3 pointHalfVector = normalize(lVector + vViewPosition);
  float pointDotNormalHalf = max(dot(normal, pointHalfVector), 0.0);
  float pointSpecularWeight = specularStrength * max(pow(pointDotNormalHalf, shininess), 0.0);
  float specularNormalization = (shininess + 2.0) / 8.0;
  vec3 schlick = specular + vec3(1.0 - specular) * pow(max(1.0 - dot(lVector, pointHalfVector), 0.0), 5.0);
  totalSpecularLight += schlick * pointLightColor * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;
  Three_js_Point_Light1657095673194_71_gl_FragColor = vec4(totalSpecularLight + totalDiffuseLight, 1.0);
  return Three_js_Point_Light1657095673194_71_gl_FragColor *= 1.0;
}
void main() {
  gl_FragColor = (Fresnel_Glow1657095673155_65_main() + Big_Wiggles1657095673161_68_main() + Three_js_Point_Light1657095673194_71_main());
}
`

export const vs = glsl`
precision highp float;
precision highp int;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform float scale;
uniform float displacement;
uniform float time;
uniform float speed;
attribute vec3 position;
attribute vec3 normal;
varying vec3 fNormal;
varying vec3 fPosition;
varying float vNoise;
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewPosition;
vec4 Fresnel_Glow1657095673155_65_main() {
  vec4 Fresnel_Glow1657095673155_65_gl_Position = vec4(0.0);
  fNormal = normalize(normalMatrix * normal);
  vec4 pos = modelViewMatrix * vec4(position, 1.0);
  fPosition = pos.xyz;
  Fresnel_Glow1657095673155_65_gl_Position = projectionMatrix * pos;
  return Fresnel_Glow1657095673155_65_gl_Position *= 1.0;
}
vec4 Big_Wiggles1657095673161_68_main() {
  vec4 Big_Wiggles1657095673161_68_gl_Position = vec4(0.0);
  vNoise = cnoise(normalize(position) * scale + (time * speed));
  vec3 pos = position + normal * vNoise * vec3(displacement);
  Big_Wiggles1657095673161_68_gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  return Big_Wiggles1657095673161_68_gl_Position *= 0.7;
}
vec4 Three_js_Point_Light1657095673194_71_main() {
  vec4 Three_js_Point_Light1657095673194_71_gl_Position = vec4(0.0);
  vNormal = normal;
  vPosition = position;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  Three_js_Point_Light1657095673194_71_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  return Three_js_Point_Light1657095673194_71_gl_Position *= 1.0;
}
void main() {
  gl_Position = Fresnel_Glow1657095673155_65_main() + Big_Wiggles1657095673161_68_main() + Three_js_Point_Light1657095673194_71_main();
}
`
