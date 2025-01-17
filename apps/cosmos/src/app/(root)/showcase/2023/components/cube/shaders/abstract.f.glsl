precision mediump float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor;

varying vec2 vUv;
// varying vec3 vNormal; 

int octaves = 2;
float seed2 = 73156.8473192;
float seed = 43758.5453123;

vec2 random2(vec2 st, float seed) {
    st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(st) * seed);
}

float noise(vec2 st, float seed) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(dot(random2(i + vec2(0.0, 0.0), seed), f - vec2(0.0, 0.0)), dot(random2(i + vec2(1.0, 0.0), seed), f - vec2(1.0, 0.0)), u.x), mix(dot(random2(i + vec2(0.0, 1.0), seed), f - vec2(0.0, 1.0)), dot(random2(i + vec2(1.0, 1.0), seed), f - vec2(1.0, 1.0)), u.x), u.y);
}

float fbm1(in vec2 _st, float seed) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
      // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for(int i = 0; i < octaves; ++i) {
        v += a * noise(_st, seed);
        _st = rot * _st * 2.0 + shift;
        a *= 0.4;
    }
    return v + .4;
}

float pattern(vec2 uv, float seed, float time, inout vec2 q, inout vec2 r) {

    q = vec2(fbm1(uv + vec2(0.0, 0.0), seed), fbm1(uv + vec2(5.2, 1.3), seed));

    r = vec2(fbm1(uv + 4.0 * q + vec2(1.7 - time / 2., 9.2), seed), fbm1(uv + 4.0 * q + vec2(8.3 - time / 2., 2.8), seed));

    float rtn = fbm1(uv + 4.0 * r, seed);

    return rtn;
}

float bumpMap(vec2 uv, inout vec2 q, inout vec2 r) {
    mat2 rotation = mat2(cos(uTime / 50.), -sin(uTime / 50.), sin(uTime / 50.), cos(uTime / 50.));
    uv -= .5;
    uv *= rotation;
    uv *= 5.;

    float colour = pattern(uv, seed, uTime / 3., q, r);
    colour = smoothstep(0., 1., colour);

    return length(vec2(colour)) * .8;
}

vec4 renderPass(vec2 uv, vec2 uvoffset) {
    vec3 surfacePos = vec3(uv, 0);
    vec3 ray = normalize(vec3(uv, 1.));
    vec3 lightPos = vec3(0., 0., -3.);
    vec3 normal = vec3(0., 0., -1);

    vec2 sampleDistance = vec2(1. / uResolution.y, 0.);

    vec2 q = vec2(0., 0.);
    vec2 r = vec2(0., 0.);

    float fx = bumpMap(surfacePos.xy - sampleDistance.xy + uvoffset, q, r);
    float fy = bumpMap(surfacePos.xy - sampleDistance.yx + uvoffset, q, r);
    float f = bumpMap(surfacePos.xy + uvoffset, q, r);
    fx = (fx - f) / sampleDistance.x;
    fy = (fy - f) / sampleDistance.x;
    normal = normalize(normal + vec3(fx, fy, 0.) * 0.2);

    vec3 lightV = lightPos - surfacePos;
    float lightDist = max(length(lightV), 0.001);
    lightV /= lightDist;

    vec3 lightColour = vec3(r.r * f * 3., r.g * f * 3., r.g * f * 3.);

    float falloff = 0.05;
    float attenuation = 1. / (1.0 + lightDist * lightDist * falloff);

    float diffuse = max(dot(normal, lightV), 0.);
    float specular = pow(max(dot(reflect(-lightV, normal), -ray), 0.), 22.);

    vec3 texCol = vec3(0.15, .15 + r.g * f * 2., q.r * f * 1.5);
    texCol = smoothstep(0.05, .75, pow(texCol * texCol, vec3(.1, 0.5, 1.)));
    // texCol = smoothstep(0.2, .7, pow(texCol * texCol, vec3(1. - uColor.r, 1. - uColor.g, 1. - uColor.b)));

    // texCol = vec3(f * .5, f, f * .2);

    vec3 colour = (texCol * (diffuse * vec3(1, .97, .92) * 2. + 0.5) + lightColour * specular * f * 2.) * attenuation;

    return vec4(sqrt(colour), 1.);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord - uResolution.xy * .5) / uResolution.y;

    vec4 render = renderPass(uv, vec2(1.));
    gl_FragColor = render;
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}