import * as stylex from '@stylexjs/stylex';

const animationFade = stylex.defineVars({
  in: 'fade-in .5s var(--ease-3)',
  out: 'fade-out .5s var(--ease-3)',
});

const animationFadeIn = stylex.defineVars({
  bloom: 'fade-in-bloom 2s var(--ease-3)',
});

const animationFadeInBloom = stylex.defineVars({
  '@media:dark':
    '\n@keyframes fade-in-bloom {\n  0% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n100% { opacity: 1; filter: brightness(1) blur(0) }\n}',
});

const animationFadeOut = stylex.defineVars({
  bloom: 'fade-out-bloom 2s var(--ease-3)',
});

const animationFadeOutBloom = stylex.defineVars({
  '@media:dark':
    '\n@keyframes fade-out-bloom {\n100% { opacity: 0; filter: brightness(1) blur(20px) }\n 10% { opacity: 1; filter: brightness(0.5) blur(10px) }\n  0% { opacity: 1; filter: brightness(1) blur(0) }\n}',
});

const animationScale = stylex.defineVars({
  up: 'scale-up .5s var(--ease-3)',
  down: 'scale-down .5s var(--ease-3)',
});

const animationSlideOut = stylex.defineVars({
  up: 'slide-out-up .5s var(--ease-3)',
  down: 'slide-out-down .5s var(--ease-3)',
  right: 'slide-out-right .5s var(--ease-3)',
  left: 'slide-out-left .5s var(--ease-3)',
});

const animationSlideIn = stylex.defineVars({
  up: 'slide-in-up .5s var(--ease-3)',
  down: 'slide-in-down .5s var(--ease-3)',
  right: 'slide-in-right .5s var(--ease-3)',
  left: 'slide-in-left .5s var(--ease-3)',
});

const animationShake = stylex.defineVars({
  x: 'shake-x .75s var(--ease-out-5)',
  y: 'shake-y .75s var(--ease-out-5)',
  z: 'shake-z 1s var(--ease-in-out-3)',
});

const animation = stylex.defineVars({
  spin: 'spin 2s linear infinite',
  ping: 'ping 5s var(--ease-out-3) infinite',
  blink: 'blink 1s var(--ease-out-3) infinite',
  float: 'float 3s var(--ease-in-out-3) infinite',
  bounce: 'bounce 2s var(--ease-squish-2) infinite',
  pulse: 'pulse 2s var(--ease-out-3) infinite',
});

const size = stylex.defineVars({
  '000': '-.5rem',
  '00': '-.25rem',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '1.25rem',
  5: '1.5rem',
  6: '1.75rem',
  7: '2rem',
  8: '3rem',
  9: '4rem',
  10: '5rem',
  11: '7.5rem',
  12: '10rem',
  13: '15rem',
  14: '20rem',
  15: '30rem',
  xxs: '240px',
  xs: '360px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '1920px',
});

const sizePx = stylex.defineVars({
  '000': '-8px',
  '00': '-4px',
  1: '4px',
  2: '8px',
  3: '16px',
  4: '20px',
  5: '24px',
  6: '28px',
  7: '32px',
  8: '48px',
  9: '64px',
  10: '80px',
  11: '120px',
  12: '160px',
  13: '240px',
  14: '320px',
  15: '480px',
});

const sizeFluid = stylex.defineVars({
  1: 'clamp(.5rem, 1vw, 1rem)',
  2: 'clamp(1rem, 2vw, 1.5rem)',
  3: 'clamp(1.5rem, 3vw, 2rem)',
  4: 'clamp(2rem, 4vw, 3rem)',
  5: 'clamp(4rem, 5vw, 5rem)',
  6: 'clamp(5rem, 7vw, 7.5rem)',
  7: 'clamp(7.5rem, 10vw, 10rem)',
  8: 'clamp(10rem, 20vw, 15rem)',
  9: 'clamp(15rem, 30vw, 20rem)',
  10: 'clamp(20rem, 40vw, 30rem)',
});

const sizeContent = stylex.defineVars({ 1: '20ch', 2: '45ch', 3: '60ch' });

const sizeHeader = stylex.defineVars({ 1: '20ch', 2: '25ch', 3: '35ch' });

const sizeRelative = stylex.defineVars({
  '000': '-.5ch',
  '00': '-.25ch',
  1: '.25ch',
  2: '.5ch',
  3: '1ch',
  4: '1.25ch',
  5: '1.5ch',
  6: '1.75ch',
  7: '2ch',
  8: '3ch',
  9: '4ch',
  10: '5ch',
  11: '7.5ch',
  12: '10ch',
  13: '15ch',
  14: '20ch',
  15: '30ch',
});

const gray = stylex.defineVars({
  0: '#f8f9fa',
  1: '#f1f3f5',
  2: '#e9ecef',
  3: '#dee2e6',
  4: '#ced4da',
  5: '#adb5bd',
  6: '#868e96',
  7: '#495057',
  8: '#343a40',
  9: '#212529',
  10: '#16191d',
  11: '#0d0f12',
  12: '#030507',
});

const stone = stylex.defineVars({
  0: '#f8fafb',
  1: '#f2f4f6',
  2: '#ebedef',
  3: '#e0e4e5',
  4: '#d1d6d8',
  5: '#b1b6b9',
  6: '#979b9d',
  7: '#7e8282',
  8: '#666968',
  9: '#50514f',
  10: '#3a3a37',
  11: '#252521',
  12: '#121210',
});

const red = stylex.defineVars({
  0: '#fff5f5',
  1: '#ffe3e3',
  2: '#ffc9c9',
  3: '#ffa8a8',
  4: '#ff8787',
  5: '#ff6b6b',
  6: '#fa5252',
  7: '#f03e3e',
  8: '#e03131',
  9: '#c92a2a',
  10: '#b02525',
  11: '#962020',
  12: '#7d1a1a',
});

const pink = stylex.defineVars({
  0: '#fff0f6',
  1: '#ffdeeb',
  2: '#fcc2d7',
  3: '#faa2c1',
  4: '#f783ac',
  5: '#f06595',
  6: '#e64980',
  7: '#d6336c',
  8: '#c2255c',
  9: '#a61e4d',
  10: '#8c1941',
  11: '#731536',
  12: '#59102a',
});

const purple = stylex.defineVars({
  0: '#f8f0fc',
  1: '#f3d9fa',
  2: '#eebefa',
  3: '#e599f7',
  4: '#da77f2',
  5: '#cc5de8',
  6: '#be4bdb',
  7: '#ae3ec9',
  8: '#9c36b5',
  9: '#862e9c',
  10: '#702682',
  11: '#5a1e69',
  12: '#44174f',
});

const violet = stylex.defineVars({
  0: '#f3f0ff',
  1: '#e5dbff',
  2: '#d0bfff',
  3: '#b197fc',
  4: '#9775fa',
  5: '#845ef7',
  6: '#7950f2',
  7: '#7048e8',
  8: '#6741d9',
  9: '#5f3dc4',
  10: '#5235ab',
  11: '#462d91',
  12: '#3a2578',
});

const indigo = stylex.defineVars({
  0: '#edf2ff',
  1: '#dbe4ff',
  2: '#bac8ff',
  3: '#91a7ff',
  4: '#748ffc',
  5: '#5c7cfa',
  6: '#4c6ef5',
  7: '#4263eb',
  8: '#3b5bdb',
  9: '#364fc7',
  10: '#2f44ad',
  11: '#283a94',
  12: '#21307a',
});

const blue = stylex.defineVars({
  0: '#e7f5ff',
  1: '#d0ebff',
  2: '#a5d8ff',
  3: '#74c0fc',
  4: '#4dabf7',
  5: '#339af0',
  6: '#228be6',
  7: '#1c7ed6',
  8: '#1971c2',
  9: '#1864ab',
  10: '#145591',
  11: '#114678',
  12: '#0d375e',
});

const cyan = stylex.defineVars({
  0: '#e3fafc',
  1: '#c5f6fa',
  2: '#99e9f2',
  3: '#66d9e8',
  4: '#3bc9db',
  5: '#22b8cf',
  6: '#15aabf',
  7: '#1098ad',
  8: '#0c8599',
  9: '#0b7285',
  10: '#095c6b',
  11: '#074652',
  12: '#053038',
});

const teal = stylex.defineVars({
  0: '#e6fcf5',
  1: '#c3fae8',
  2: '#96f2d7',
  3: '#63e6be',
  4: '#38d9a9',
  5: '#20c997',
  6: '#12b886',
  7: '#0ca678',
  8: '#099268',
  9: '#087f5b',
  10: '#066649',
  11: '#054d37',
  12: '#033325',
});

const green = stylex.defineVars({
  0: '#ebfbee',
  1: '#d3f9d8',
  2: '#b2f2bb',
  3: '#8ce99a',
  4: '#69db7c',
  5: '#51cf66',
  6: '#40c057',
  7: '#37b24d',
  8: '#2f9e44',
  9: '#2b8a3e',
  10: '#237032',
  11: '#1b5727',
  12: '#133d1b',
});

const lime = stylex.defineVars({
  0: '#f4fce3',
  1: '#e9fac8',
  2: '#d8f5a2',
  3: '#c0eb75',
  4: '#a9e34b',
  5: '#94d82d',
  6: '#82c91e',
  7: '#74b816',
  8: '#66a80f',
  9: '#5c940d',
  10: '#4c7a0b',
  11: '#3c6109',
  12: '#2c4706',
});

const yellow = stylex.defineVars({
  0: '#fff9db',
  1: '#fff3bf',
  2: '#ffec99',
  3: '#ffe066',
  4: '#ffd43b',
  5: '#fcc419',
  6: '#fab005',
  7: '#f59f00',
  8: '#f08c00',
  9: '#e67700',
  10: '#b35c00',
  11: '#804200',
  12: '#663500',
});

const orange = stylex.defineVars({
  0: '#fff4e6',
  1: '#ffe8cc',
  2: '#ffd8a8',
  3: '#ffc078',
  4: '#ffa94d',
  5: '#ff922b',
  6: '#fd7e14',
  7: '#f76707',
  8: '#e8590c',
  9: '#d9480f',
  10: '#bf400d',
  11: '#99330b',
  12: '#802b09',
});

const choco = stylex.defineVars({
  0: '#fff8dc',
  1: '#fce1bc',
  2: '#f7ca9e',
  3: '#f1b280',
  4: '#e99b62',
  5: '#df8545',
  6: '#d46e25',
  7: '#bd5f1b',
  8: '#a45117',
  9: '#8a4513',
  10: '#703a13',
  11: '#572f12',
  12: '#3d210d',
});

const brown = stylex.defineVars({
  0: '#faf4eb',
  1: '#ede0d1',
  2: '#e0cab7',
  3: '#d3b79e',
  4: '#c5a285',
  5: '#b78f6d',
  6: '#a87c56',
  7: '#956b47',
  8: '#825b3a',
  9: '#6f4b2d',
  10: '#5e3a21',
  11: '#4e2b15',
  12: '#422412',
});

const sand = stylex.defineVars({
  0: '#f8fafb',
  1: '#e6e4dc',
  2: '#d5cfbd',
  3: '#c2b9a0',
  4: '#aea58c',
  5: '#9a9178',
  6: '#867c65',
  7: '#736a53',
  8: '#5f5746',
  9: '#4b4639',
  10: '#38352d',
  11: '#252521',
  12: '#121210',
});

const camo = stylex.defineVars({
  0: '#f9fbe7',
  1: '#e8ed9c',
  2: '#d2df4e',
  3: '#c2ce34',
  4: '#b5bb2e',
  5: '#a7a827',
  6: '#999621',
  7: '#8c851c',
  8: '#7e7416',
  9: '#6d6414',
  10: '#5d5411',
  11: '#4d460e',
  12: '#36300a',
});

const jungle = stylex.defineVars({
  0: '#ecfeb0',
  1: '#def39a',
  2: '#d0e884',
  3: '#c2dd6e',
  4: '#b5d15b',
  5: '#a8c648',
  6: '#9bbb36',
  7: '#8fb024',
  8: '#84a513',
  9: '#7a9908',
  10: '#658006',
  11: '#516605',
  12: '#3d4d04',
});

const gray0 = stylex.defineVars({ hsl: '210 17% 98%' });

const gray1 = stylex.defineVars({ hsl: '210 17% 95%' });

const gray2 = stylex.defineVars({ hsl: '210 16% 93%' });

const gray3 = stylex.defineVars({ hsl: '210 14% 89%' });

const gray4 = stylex.defineVars({ hsl: '210 14% 83%' });

const gray5 = stylex.defineVars({ hsl: '210 11% 71%' });

const gray6 = stylex.defineVars({ hsl: '210 7% 56%' });

const gray7 = stylex.defineVars({ hsl: '210 9% 31%' });

const gray8 = stylex.defineVars({ hsl: '210 10% 23%' });

const gray9 = stylex.defineVars({ hsl: '210 11% 15%' });

const gray10 = stylex.defineVars({ hsl: '214 14% 10%' });

const gray11 = stylex.defineVars({ hsl: '216 16% 6%' });

const gray12 = stylex.defineVars({ hsl: '210 40% 2%' });

const stone0 = stylex.defineVars({ hsl: '200 27% 98%' });

const stone1 = stylex.defineVars({ hsl: '210 18% 96%' });

const stone2 = stylex.defineVars({ hsl: '210 11% 93%' });

const stone3 = stylex.defineVars({ hsl: '192 9% 89%' });

const stone4 = stylex.defineVars({ hsl: '197 8% 83%' });

const stone5 = stylex.defineVars({ hsl: '202 5% 71%' });

const stone6 = stylex.defineVars({ hsl: '200 3% 60%' });

const stone7 = stylex.defineVars({ hsl: '180 2% 50%' });

const stone8 = stylex.defineVars({ hsl: '160 1% 41%' });

const stone9 = stylex.defineVars({ hsl: '90 1% 31%' });

const stone10 = stylex.defineVars({ hsl: '60 3% 22%' });

const stone11 = stylex.defineVars({ hsl: '60 6% 14%' });

const stone12 = stylex.defineVars({ hsl: '60 6% 7%' });

const red0 = stylex.defineVars({ hsl: '0 100% 98%' });

const red1 = stylex.defineVars({ hsl: '0 100% 95%' });

const red2 = stylex.defineVars({ hsl: '0 100% 89%' });

const red3 = stylex.defineVars({ hsl: '0 100% 83%' });

const red4 = stylex.defineVars({ hsl: '0 100% 76%' });

const red5 = stylex.defineVars({ hsl: '0 100% 71%' });

const red6 = stylex.defineVars({ hsl: '0 94% 65%' });

const red7 = stylex.defineVars({ hsl: '0 86% 59%' });

const red8 = stylex.defineVars({ hsl: '0 74% 54%' });

const red9 = stylex.defineVars({ hsl: '0 65% 48%' });

const red10 = stylex.defineVars({ hsl: '0 65% 42%' });

const red11 = stylex.defineVars({ hsl: '0 65% 36%' });

const red12 = stylex.defineVars({ hsl: '0 66% 30%' });

const pink0 = stylex.defineVars({ hsl: '336 100% 97%' });

const pink1 = stylex.defineVars({ hsl: '336 100% 94%' });

const pink2 = stylex.defineVars({ hsl: '338 91% 87%' });

const pink3 = stylex.defineVars({ hsl: '339 90% 81%' });

const pink4 = stylex.defineVars({ hsl: '339 88% 74%' });

const pink5 = stylex.defineVars({ hsl: '339 82% 67%' });

const pink6 = stylex.defineVars({ hsl: '339 76% 59%' });

const pink7 = stylex.defineVars({ hsl: '339 67% 52%' });

const pink8 = stylex.defineVars({ hsl: '339 68% 45%' });

const pink9 = stylex.defineVars({ hsl: '339 69% 38%' });

const pink10 = stylex.defineVars({ hsl: '339 70% 32%' });

const pink11 = stylex.defineVars({ hsl: '339 69% 27%' });

const pink12 = stylex.defineVars({ hsl: '339 70% 21%' });

const purple0 = stylex.defineVars({ hsl: '280 67% 96%' });

const purple1 = stylex.defineVars({ hsl: '287 77% 92%' });

const purple2 = stylex.defineVars({ hsl: '288 86% 86%' });

const purple3 = stylex.defineVars({ hsl: '289 85% 78%' });

const purple4 = stylex.defineVars({ hsl: '288 83% 71%' });

const purple5 = stylex.defineVars({ hsl: '288 75% 64%' });

const purple6 = stylex.defineVars({ hsl: '288 67% 58%' });

const purple7 = stylex.defineVars({ hsl: '288 56% 52%' });

const purple8 = stylex.defineVars({ hsl: '288 54% 46%' });

const purple9 = stylex.defineVars({ hsl: '288 54% 40%' });

const purple10 = stylex.defineVars({ hsl: '288 55% 33%' });

const purple11 = stylex.defineVars({ hsl: '288 56% 26%' });

const purple12 = stylex.defineVars({ hsl: '288 55% 20%' });

const violet0 = stylex.defineVars({ hsl: '252 100% 97%' });

const violet1 = stylex.defineVars({ hsl: '257 100% 93%' });

const violet2 = stylex.defineVars({ hsl: '256 100% 87%' });

const violet3 = stylex.defineVars({ hsl: '255 94% 79%' });

const violet4 = stylex.defineVars({ hsl: '255 93% 72%' });

const violet5 = stylex.defineVars({ hsl: '255 91% 67%' });

const violet6 = stylex.defineVars({ hsl: '255 86% 63%' });

const violet7 = stylex.defineVars({ hsl: '255 78% 60%' });

const violet8 = stylex.defineVars({ hsl: '255 67% 55%' });

const violet9 = stylex.defineVars({ hsl: '255 53% 50%' });

const violet10 = stylex.defineVars({ hsl: '255 53% 44%' });

const violet11 = stylex.defineVars({ hsl: '255 53% 37%' });

const violet12 = stylex.defineVars({ hsl: '255 53% 31%' });

const indigo0 = stylex.defineVars({ hsl: '223 100% 96%' });

const indigo1 = stylex.defineVars({ hsl: '225 100% 93%' });

const indigo2 = stylex.defineVars({ hsl: '228 100% 86%' });

const indigo3 = stylex.defineVars({ hsl: '228 100% 78%' });

const indigo4 = stylex.defineVars({ hsl: '228 96% 72%' });

const indigo5 = stylex.defineVars({ hsl: '228 94% 67%' });

const indigo6 = stylex.defineVars({ hsl: '228 89% 63%' });

const indigo7 = stylex.defineVars({ hsl: '228 81% 59%' });

const indigo8 = stylex.defineVars({ hsl: '228 69% 55%' });

const indigo9 = stylex.defineVars({ hsl: '230 57% 50%' });

const indigo10 = stylex.defineVars({ hsl: '230 57% 43%' });

const indigo11 = stylex.defineVars({ hsl: '230 57% 37%' });

const indigo12 = stylex.defineVars({ hsl: '230 57% 30%' });

const blue0 = stylex.defineVars({ hsl: '205 100% 95%' });

const blue1 = stylex.defineVars({ hsl: '206 100% 91%' });

const blue2 = stylex.defineVars({ hsl: '206 100% 82%' });

const blue3 = stylex.defineVars({ hsl: '206 96% 72%' });

const blue4 = stylex.defineVars({ hsl: '207 91% 64%' });

const blue5 = stylex.defineVars({ hsl: '207 86% 57%' });

const blue6 = stylex.defineVars({ hsl: '208 80% 52%' });

const blue7 = stylex.defineVars({ hsl: '208 77% 47%' });

const blue8 = stylex.defineVars({ hsl: '209 77% 43%' });

const blue9 = stylex.defineVars({ hsl: '209 75% 38%' });

const blue10 = stylex.defineVars({ hsl: '209 76% 32%' });

const blue11 = stylex.defineVars({ hsl: '209 75% 27%' });

const blue12 = stylex.defineVars({ hsl: '209 76% 21%' });

const cyan0 = stylex.defineVars({ hsl: '185 81% 94%' });

const cyan1 = stylex.defineVars({ hsl: '185 84% 88%' });

const cyan2 = stylex.defineVars({ hsl: '186 77% 77%' });

const cyan3 = stylex.defineVars({ hsl: '187 74% 65%' });

const cyan4 = stylex.defineVars({ hsl: '187 69% 55%' });

const cyan5 = stylex.defineVars({ hsl: '188 72% 47%' });

const cyan6 = stylex.defineVars({ hsl: '187 80% 42%' });

const cyan7 = stylex.defineVars({ hsl: '188 83% 37%' });

const cyan8 = stylex.defineVars({ hsl: '189 85% 32%' });

const cyan9 = stylex.defineVars({ hsl: '189 85% 28%' });

const cyan10 = stylex.defineVars({ hsl: '189 84% 23%' });

const cyan11 = stylex.defineVars({ hsl: '190 84% 17%' });

const cyan12 = stylex.defineVars({ hsl: '189 84% 12%' });

const teal0 = stylex.defineVars({ hsl: '161 79% 95%' });

const teal1 = stylex.defineVars({ hsl: '160 85% 87%' });

const teal2 = stylex.defineVars({ hsl: '162 78% 77%' });

const teal3 = stylex.defineVars({ hsl: '162 72% 65%' });

const teal4 = stylex.defineVars({ hsl: '162 68% 54%' });

const teal5 = stylex.defineVars({ hsl: '162 73% 46%' });

const teal6 = stylex.defineVars({ hsl: '162 82% 40%' });

const teal7 = stylex.defineVars({ hsl: '162 87% 35%' });

const teal8 = stylex.defineVars({ hsl: '162 88% 30%' });

const teal9 = stylex.defineVars({ hsl: '162 88% 26%' });

const teal10 = stylex.defineVars({ hsl: '162 89% 21%' });

const teal11 = stylex.defineVars({ hsl: '162 88% 16%' });

const teal12 = stylex.defineVars({ hsl: '163 89% 11%' });

const green0 = stylex.defineVars({ hsl: '131 67% 95%' });

const green1 = stylex.defineVars({ hsl: '128 76% 90%' });

const green2 = stylex.defineVars({ hsl: '128 71% 82%' });

const green3 = stylex.defineVars({ hsl: '129 68% 73%' });

const green4 = stylex.defineVars({ hsl: '130 61% 64%' });

const green5 = stylex.defineVars({ hsl: '130 57% 56%' });

const green6 = stylex.defineVars({ hsl: '131 50% 50%' });

const green7 = stylex.defineVars({ hsl: '131 53% 46%' });

const green8 = stylex.defineVars({ hsl: '131 54% 40%' });

const green9 = stylex.defineVars({ hsl: '132 52% 35%' });

const green10 = stylex.defineVars({ hsl: '132 52% 29%' });

const green11 = stylex.defineVars({ hsl: '132 53% 22%' });

const green12 = stylex.defineVars({ hsl: '131 53% 16%' });

const lime0 = stylex.defineVars({ hsl: '79 81% 94%' });

const lime1 = stylex.defineVars({ hsl: '80 83% 88%' });

const lime2 = stylex.defineVars({ hsl: '81 81% 80%' });

const lime3 = stylex.defineVars({ hsl: '82 75% 69%' });

const lime4 = stylex.defineVars({ hsl: '83 73% 59%' });

const lime5 = stylex.defineVars({ hsl: '84 69% 51%' });

const lime6 = stylex.defineVars({ hsl: '85 74% 45%' });

const lime7 = stylex.defineVars({ hsl: '85 79% 40%' });

const lime8 = stylex.defineVars({ hsl: '86 84% 36%' });

const lime9 = stylex.defineVars({ hsl: '85 84% 32%' });

const lime10 = stylex.defineVars({ hsl: '85 83% 26%' });

const lime11 = stylex.defineVars({ hsl: '85 83% 21%' });

const lime12 = stylex.defineVars({ hsl: '85 84% 15%' });

const yellow0 = stylex.defineVars({ hsl: '50 100% 93%' });

const yellow1 = stylex.defineVars({ hsl: '49 100% 87%' });

const yellow2 = stylex.defineVars({ hsl: '49 100% 80%' });

const yellow3 = stylex.defineVars({ hsl: '48 100% 70%' });

const yellow4 = stylex.defineVars({ hsl: '47 100% 62%' });

const yellow5 = stylex.defineVars({ hsl: '45 97% 54%' });

const yellow6 = stylex.defineVars({ hsl: '42 96% 50%' });

const yellow7 = stylex.defineVars({ hsl: '39 100% 48%' });

const yellow8 = stylex.defineVars({ hsl: '35 100% 47%' });

const yellow9 = stylex.defineVars({ hsl: '31 100% 45%' });

const yellow10 = stylex.defineVars({ hsl: '31 100% 35%' });

const yellow11 = stylex.defineVars({ hsl: '31 100% 25%' });

const yellow12 = stylex.defineVars({ hsl: '31 100% 20%' });

const orange0 = stylex.defineVars({ hsl: '34 100% 95%' });

const orange1 = stylex.defineVars({ hsl: '33 100% 90%' });

const orange2 = stylex.defineVars({ hsl: '33 100% 83%' });

const orange3 = stylex.defineVars({ hsl: '32 100% 74%' });

const orange4 = stylex.defineVars({ hsl: '31 100% 65%' });

const orange5 = stylex.defineVars({ hsl: '29 100% 58%' });

const orange6 = stylex.defineVars({ hsl: '27 98% 54%' });

const orange7 = stylex.defineVars({ hsl: '24 94% 50%' });

const orange8 = stylex.defineVars({ hsl: '21 90% 48%' });

const orange9 = stylex.defineVars({ hsl: '17 87% 45%' });

const orange10 = stylex.defineVars({ hsl: '17 87% 40%' });

const orange11 = stylex.defineVars({ hsl: '17 87% 32%' });

const orange12 = stylex.defineVars({ hsl: '17 87% 27%' });

const choco0 = stylex.defineVars({ hsl: '48 100% 93%' });

const choco1 = stylex.defineVars({ hsl: '35 91% 86%' });

const choco2 = stylex.defineVars({ hsl: '30 85% 79%' });

const choco3 = stylex.defineVars({ hsl: '27 80% 72%' });

const choco4 = stylex.defineVars({ hsl: '25 75% 65%' });

const choco5 = stylex.defineVars({ hsl: '25 71% 57%' });

const choco6 = stylex.defineVars({ hsl: '25 70% 49%' });

const choco7 = stylex.defineVars({ hsl: '25 75% 42%' });

const choco8 = stylex.defineVars({ hsl: '25 75% 37%' });

const choco9 = stylex.defineVars({ hsl: '25 76% 31%' });

const choco10 = stylex.defineVars({ hsl: '25 71% 26%' });

const choco11 = stylex.defineVars({ hsl: '25 66% 21%' });

const choco12 = stylex.defineVars({ hsl: '25 65% 15%' });

const brown0 = stylex.defineVars({ hsl: '36 60% 95%' });

const brown1 = stylex.defineVars({ hsl: '32 44% 87%' });

const brown2 = stylex.defineVars({ hsl: '28 40% 80%' });

const brown3 = stylex.defineVars({ hsl: '28 38% 72%' });

const brown4 = stylex.defineVars({ hsl: '27 36% 65%' });

const brown5 = stylex.defineVars({ hsl: '28 34% 57%' });

const brown6 = stylex.defineVars({ hsl: '28 32% 50%' });

const brown7 = stylex.defineVars({ hsl: '28 35% 43%' });

const brown8 = stylex.defineVars({ hsl: '28 38% 37%' });

const brown9 = stylex.defineVars({ hsl: '27 42% 31%' });

const brown10 = stylex.defineVars({ hsl: '25 48% 25%' });

const brown11 = stylex.defineVars({ hsl: '23 58% 19%' });

const brown12 = stylex.defineVars({ hsl: '22 57% 16%' });

const sand0 = stylex.defineVars({ hsl: '200 27% 98%' });

const sand1 = stylex.defineVars({ hsl: '48 17% 88%' });

const sand2 = stylex.defineVars({ hsl: '45 22% 79%' });

const sand3 = stylex.defineVars({ hsl: '44 22% 69%' });

const sand4 = stylex.defineVars({ hsl: '44 17% 62%' });

const sand5 = stylex.defineVars({ hsl: '44 14% 54%' });

const sand6 = stylex.defineVars({ hsl: '42 14% 46%' });

const sand7 = stylex.defineVars({ hsl: '43 16% 39%' });

const sand8 = stylex.defineVars({ hsl: '41 15% 32%' });

const sand9 = stylex.defineVars({ hsl: '43 14% 26%' });

const sand10 = stylex.defineVars({ hsl: '44 11% 20%' });

const sand11 = stylex.defineVars({ hsl: '60 6% 14%' });

const sand12 = stylex.defineVars({ hsl: '60 6% 7%' });

const camo0 = stylex.defineVars({ hsl: '66 71% 95%' });

const camo1 = stylex.defineVars({ hsl: '64 69% 77%' });

const camo2 = stylex.defineVars({ hsl: '65 69% 59%' });

const camo3 = stylex.defineVars({ hsl: '65 61% 51%' });

const camo4 = stylex.defineVars({ hsl: '63 61% 46%' });

const camo5 = stylex.defineVars({ hsl: '60 62% 41%' });

const camo6 = stylex.defineVars({ hsl: '59 65% 36%' });

const camo7 = stylex.defineVars({ hsl: '56 67% 33%' });

const camo8 = stylex.defineVars({ hsl: '54 70% 29%' });

const camo9 = stylex.defineVars({ hsl: '54 69% 25%' });

const camo10 = stylex.defineVars({ hsl: '53 69% 22%' });

const camo11 = stylex.defineVars({ hsl: '53 69% 18%' });

const camo12 = stylex.defineVars({ hsl: '52 69% 13%' });

const jungle0 = stylex.defineVars({ hsl: '74 98% 84%' });

const jungle1 = stylex.defineVars({ hsl: '74 79% 78%' });

const jungle2 = stylex.defineVars({ hsl: '74 68% 71%' });

const jungle3 = stylex.defineVars({ hsl: '75 62% 65%' });

const jungle4 = stylex.defineVars({ hsl: '74 56% 59%' });

const jungle5 = stylex.defineVars({ hsl: '74 53% 53%' });

const jungle6 = stylex.defineVars({ hsl: '74 55% 47%' });

const jungle7 = stylex.defineVars({ hsl: '74 66% 42%' });

const jungle8 = stylex.defineVars({ hsl: '74 79% 36%' });

const jungle9 = stylex.defineVars({ hsl: '73 90% 32%' });

const jungle10 = stylex.defineVars({ hsl: '73 91% 26%' });

const jungle11 = stylex.defineVars({ hsl: '73 91% 21%' });

const jungle12 = stylex.defineVars({ hsl: '73 90% 16%' });

const font = stylex.defineVars({
  sans: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  serif: 'ui-serif,serif',
  mono: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
});

const fontWeight = stylex.defineVars({
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  8: '800',
  9: '900',
});

const fontLineheight = stylex.defineVars({
  '00': '.95',
  0: '1.1',
  1: '1.25',
  2: '1.375',
  3: '1.5',
  4: '1.75',
  5: '2',
});

const fontLetterspacing = stylex.defineVars({
  0: '-.05em',
  1: '.025em',
  2: '.050em',
  3: '.075em',
  4: '.150em',
  5: '.500em',
  6: '.750em',
  7: '1em',
});

const fontSize = stylex.defineVars({
  '00': '.5rem',
  0: '.75rem',
  1: '1rem',
  2: '1.1rem',
  3: '1.25rem',
  4: '1.5rem',
  5: '2rem',
  6: '2.5rem',
  7: '3rem',
  8: '3.5rem',
});

const fontSizeFluid = stylex.defineVars({
  0: 'clamp(.75rem, 2vw, 1rem)',
  1: 'clamp(1rem, 4vw, 1.5rem)',
  2: 'clamp(1.5rem, 6vw, 2.5rem)',
  3: 'clamp(2rem, 9vw, 3.5rem)',
});

const borderSize = stylex.defineVars({
  1: '1px',
  2: '2px',
  3: '5px',
  4: '10px',
  5: '25px',
});

const radius = stylex.defineVars({
  1: '2px',
  2: '5px',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  round: '1e5px',
});

const radiusDrawn = stylex.defineVars({
  1: '255px 15px 225px 15px / 15px 225px 15px 255px',
  2: '125px 10px 20px 185px / 25px 205px 205px 25px',
  3: '15px 255px 15px 225px / 225px 15px 255px 15px',
  4: '15px 25px 155px 25px / 225px 150px 25px 115px',
  5: '250px 25px 15px 20px / 15px 80px 105px 115px',
  6: '28px 100px 20px 15px / 150px 30px 205px 225px',
});

const radiusBlob = stylex.defineVars({
  1: '30% 70% 70% 30% / 53% 30% 70% 47%',
  2: '53% 47% 34% 66% / 63% 46% 54% 37%',
  3: '37% 63% 56% 44% / 49% 56% 44% 51%',
  4: '63% 37% 37% 63% / 43% 37% 63% 57%',
  5: '49% 51% 48% 52% / 57% 44% 56% 43%',
});

const radiusConditional = stylex.defineVars({
  1: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-1))',
  2: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-2))',
  3: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-3))',
  4: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-4))',
  5: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-5))',
  6: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-6))',
});

const ratio = stylex.defineVars({
  square: '1',
  landscape: '4/3',
  portrait: '3/4',
  widescreen: '16/9',
  ultrawide: '18/5',
  golden: '1.6180/1',
});

const ease = stylex.defineVars({
  1: 'cubic-bezier(.25, 0, .5, 1)',
  2: 'cubic-bezier(.25, 0, .4, 1)',
  3: 'cubic-bezier(.25, 0, .3, 1)',
  4: 'cubic-bezier(.25, 0, .2, 1)',
  5: 'cubic-bezier(.25, 0, .1, 1)',
});

const easeIn = stylex.defineVars({
  1: 'cubic-bezier(.25, 0, 1, 1)',
  2: 'cubic-bezier(.50, 0, 1, 1)',
  3: 'cubic-bezier(.70, 0, 1, 1)',
  4: 'cubic-bezier(.90, 0, 1, 1)',
  5: 'cubic-bezier(1, 0, 1, 1)',
});

const easeOut = stylex.defineVars({
  1: 'cubic-bezier(0, 0, .75, 1)',
  2: 'cubic-bezier(0, 0, .50, 1)',
  3: 'cubic-bezier(0, 0, .3, 1)',
  4: 'cubic-bezier(0, 0, .1, 1)',
  5: 'cubic-bezier(0, 0, 0, 1)',
});

const easeInOut = stylex.defineVars({
  1: 'cubic-bezier(.1, 0, .9, 1)',
  2: 'cubic-bezier(.3, 0, .7, 1)',
  3: 'cubic-bezier(.5, 0, .5, 1)',
  4: 'cubic-bezier(.7, 0, .3, 1)',
  5: 'cubic-bezier(.9, 0, .1, 1)',
});

const easeElasticOut = stylex.defineVars({
  1: 'cubic-bezier(.5, .75, .75, 1.25)',
  2: 'cubic-bezier(.5, 1, .75, 1.25)',
  3: 'cubic-bezier(.5, 1.25, .75, 1.25)',
  4: 'cubic-bezier(.5, 1.5, .75, 1.25)',
  5: 'cubic-bezier(.5, 1.75, .75, 1.25)',
});

const easeElasticIn = stylex.defineVars({
  1: 'cubic-bezier(.5, -0.25, .75, 1)',
  2: 'cubic-bezier(.5, -0.50, .75, 1)',
  3: 'cubic-bezier(.5, -0.75, .75, 1)',
  4: 'cubic-bezier(.5, -1.00, .75, 1)',
  5: 'cubic-bezier(.5, -1.25, .75, 1)',
});

const easeElasticInOut = stylex.defineVars({
  1: 'cubic-bezier(.5, -.1, .1, 1.5)',
  2: 'cubic-bezier(.5, -.3, .1, 1.5)',
  3: 'cubic-bezier(.5, -.5, .1, 1.5)',
  4: 'cubic-bezier(.5, -.7, .1, 1.5)',
  5: 'cubic-bezier(.5, -.9, .1, 1.5)',
});

const easeStep = stylex.defineVars({
  1: 'steps(2)',
  2: 'steps(3)',
  3: 'steps(4)',
  4: 'steps(7)',
  5: 'steps(10)',
});

const easeElastic = stylex.defineVars({
  1: 'var(--ease-elastic-out-1)',
  2: 'var(--ease-elastic-out-2)',
  3: 'var(--ease-elastic-out-3)',
  4: 'var(--ease-elastic-out-4)',
  5: 'var(--ease-elastic-out-5)',
});

const easeSquish = stylex.defineVars({
  1: 'var(--ease-elastic-in-out-1)',
  2: 'var(--ease-elastic-in-out-2)',
  3: 'var(--ease-elastic-in-out-3)',
  4: 'var(--ease-elastic-in-out-4)',
  5: 'var(--ease-elastic-in-out-5)',
});

const easeSpring = stylex.defineVars({
  1: 'linear(\n    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%,\n    0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%,\n    1.001\n  )',
  2: 'linear(\n    0, 0.007, 0.029 2.2%, 0.118 4.7%, 0.625 14.4%, 0.826 19%, 0.902, 0.962,\n    1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%,\n    0.999 61.6%, 0.995 71.2%, 1\n  )',
  3: 'linear(\n    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077,\n    1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,\n    1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,\n    0.997 69.8%, 1.003 76.9%, 1\n  )',
  4: 'linear(\n    0, 0.009, 0.037 1.7%, 0.153 3.6%, 0.776 10.3%, 1.001, 1.142 16%, 1.185,\n    1.209 19%, 1.215 19.9% 20.8%, 1.199, 1.165 25%, 1.056 30.3%, 1.008 33%, 0.973,\n    0.955 39.2%, 0.953 41.1%, 0.957 43.3%, 0.998 53.3%, 1.009 59.1% 63.7%,\n    0.998 78.9%, 1\n  )',
  5: 'linear(\n    0, 0.01, 0.04 1.6%, 0.161 3.3%, 0.816 9.4%, 1.046, 1.189 14.4%, 1.231,\n    1.254 17%, 1.259, 1.257 18.6%, 1.236, 1.194 22.3%, 1.057 27%, 0.999 29.4%,\n    0.955 32.1%, 0.942, 0.935 34.9%, 0.933, 0.939 38.4%, 1 47.3%, 1.011,\n    1.017 52.6%, 1.016 56.4%, 1 65.2%, 0.996 70.2%, 1.001 87.2%, 1\n  )',
});

const easeBounce = stylex.defineVars({
  1: 'linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25, 0.316, 0.391 36.8%,\n    0.563, 0.766, 1 58.8%, 0.946, 0.908 69.1%, 0.895, 0.885, 0.879, 0.878, 0.879,\n    0.885, 0.895, 0.908 89.7%, 0.946, 1\n  )',
  2: 'linear(\n    0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 15.1%, 0.25, 0.391, 0.562, 0.765,\n    1, 0.892 45.2%, 0.849, 0.815, 0.788, 0.769, 0.757, 0.753, 0.757, 0.769, 0.788,\n    0.815, 0.85, 0.892 75.2%, 1 80.2%, 0.973, 0.954, 0.943, 0.939, 0.943, 0.954,\n    0.973, 1\n  )',
  3: 'linear(\n    0, 0.004, 0.016, 0.035, 0.062, 0.098, 0.141 11.4%, 0.25, 0.39, 0.562, 0.764,\n    1 30.3%, 0.847 34.8%, 0.787, 0.737, 0.699, 0.672, 0.655, 0.65, 0.656, 0.672,\n    0.699, 0.738, 0.787, 0.847 61.7%, 1 66.2%, 0.946, 0.908, 0.885 74.2%, 0.879,\n    0.878, 0.879, 0.885 79.5%, 0.908, 0.946, 1 87.4%, 0.981, 0.968, 0.96, 0.957,\n    0.96, 0.968, 0.981, 1\n  )',
  4: 'linear(\n    0, 0.004, 0.016 3%, 0.062, 0.141, 0.25, 0.391, 0.562 18.2%, 1 24.3%, 0.81,\n    0.676 32.3%, 0.629, 0.595, 0.575, 0.568, 0.575, 0.595, 0.629, 0.676 48.2%,\n    0.811, 1 56.2%, 0.918, 0.86, 0.825, 0.814, 0.825, 0.86, 0.918, 1 77.2%,\n    0.94 80.6%, 0.925, 0.92, 0.925, 0.94 87.5%, 1 90.9%, 0.974, 0.965, 0.974, 1\n  )',
  5: 'linear(\n    0, 0.004, 0.016 2.5%, 0.063, 0.141, 0.25 10.1%, 0.562, 1 20.2%, 0.783, 0.627,\n    0.534 30.9%, 0.511, 0.503, 0.511, 0.534 38%, 0.627, 0.782, 1 48.7%, 0.892,\n    0.815, 0.769 56.3%, 0.757, 0.753, 0.757, 0.769 61.3%, 0.815, 0.892, 1 68.8%,\n    0.908 72.4%, 0.885, 0.878, 0.885, 0.908 79.4%, 1 83%, 0.954 85.5%, 0.943,\n    0.939, 0.943, 0.954 90.5%, 1 93%, 0.977, 0.97, 0.977, 1\n  )',
});

const squircle = stylex.defineVars({
  1: "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 18.75 18.75, 0 75, 0 S 150, 18.75 150, 75 131.25, 150 75, 150 0, 131.25 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
  2: "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 13.500000000000004 13.500000000000004, 0 75, 0 S 150, 13.500000000000004 150, 75 136.5, 150 75, 150 0, 136.5 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
  3: "url(\"data:image/svg+xml,%3Csvg viewbox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d=' M 0, 75 C 0, 5.999999999999997 5.999999999999997, 0 75, 0 S 150, 5.999999999999997 150, 75 144, 150 75, 150 0, 144 0, 75 ' fill='%23FADB5F' transform='rotate( 0, 100, 100 ) translate( 25 25 )'%3E%3C/path%3E%3C/svg%3E\")",
});

const gradient = stylex.defineVars({
  1: 'linear-gradient(to bottom right,#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
  2: 'linear-gradient(to bottom right,#48005c, #8300e2, #a269ff)',
  3: '\n    radial-gradient(\n      circle at top right, \n      hsl(180 100% 50%), hsl(180 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(328 100% 54%), hsl(328 100% 54% / 0%)\n    )',
  4: 'linear-gradient(to bottom right,#00F5A0,#00D9F5)',
  5: 'conic-gradient(from -270deg at 75% 110%, fuchsia, floralwhite)',
  6: 'conic-gradient(from -90deg at top left, black, white)',
  7: 'linear-gradient(to bottom right,#72C6EF,#004E8F)',
  8: 'conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)',
  9: 'conic-gradient(from .5turn at bottom center, lightblue, white)',
  10: 'conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)',
  11: 'conic-gradient(at bottom left, deeppink, cyan)',
  12: 'conic-gradient(from 90deg at 25% -10%, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)',
  13: 'radial-gradient(circle at 50% 200%, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)',
  14: 'conic-gradient(at top right, lime, cyan)',
  15: 'linear-gradient(to bottom right, #c7d2fe, #fecaca, #fef3c7)',
  16: 'radial-gradient(circle at 50% -250%, #374151, #111827, #000)',
  17: 'conic-gradient(from -90deg at 50% -25%, blue, blueviolet)',
  18: '\n    linear-gradient(0deg,   hsla(0   100% 50% / 80%), hsla(0   100% 50% / 0) 75%),\n    linear-gradient(60deg,  hsla(60  100% 50% / 80%), hsla(60  100% 50% / 0) 75%),\n    linear-gradient(120deg, hsla(120 100% 50% / 80%), hsla(120 100% 50% / 0) 75%),\n    linear-gradient(180deg, hsla(180 100% 50% / 80%), hsla(180 100% 50% / 0) 75%),\n    linear-gradient(240deg, hsla(240 100% 50% / 80%), hsla(240 100% 50% / 0) 75%),\n    linear-gradient(300deg, hsla(300 100% 50% / 80%), hsla(300 100% 50% / 0) 75%)\n  ',
  19: 'linear-gradient(to bottom right,#ffe259,#ffa751)',
  20: 'conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)',
  21: 'conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)',
  22: 'linear-gradient(to bottom right,#acb6e5,#86fde8)',
  23: 'linear-gradient(to bottom right,#536976,#292E49)',
  24: 'conic-gradient(from .5turn at 0% 0%, #00c476, 10%, #82b0ff, 90%, #00c476)',
  25: 'conic-gradient(at 125% 50%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)',
  26: 'linear-gradient(to bottom right,#9796f0,#fbc7d4)',
  27: 'conic-gradient(from .5turn at bottom left, deeppink, rebeccapurple)',
  28: 'conic-gradient(from -90deg at 50% 105%, white, orchid)',
  29: '\n    radial-gradient(\n      circle at top right, \n      hsl(250 100% 85%), hsl(250 100% 85% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(220 90% 75%), hsl(220 90% 75% / 0%)\n    )',
  30: 'radial-gradient(\n      circle at top right, \n      hsl(150 100% 50%), hsl(150 100% 50% / 0%)\n    ),\n    radial-gradient(\n      circle at bottom left, \n      hsl(150 100% 84%), hsl(150 100% 84% / 0%)\n    )',
});

const noise = stylex.defineVars({
  1: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
  2: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
  3: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
  4: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
  5: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
});

const noiseFilter = stylex.defineVars({
  1: 'contrast(300%) brightness(100%)',
  2: 'contrast(200%) brightness(150%)',
  3: 'contrast(200%) brightness(250%)',
  4: 'contrast(200%) brightness(500%)',
  5: 'contrast(200%) brightness(1000%)',
});

const shadow = stylex.defineVars({
  color: '220 3% 15%',
  strength: '1%',
  1: '0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))',
  2: '\n    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))',
  3: '\n    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))',
  4: '\n    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))',
  5: '\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))',
  6: '\n    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),\n    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),\n    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),\n    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),\n    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))',
});

const shadowColor = stylex.defineVars({ '@media:dark': '220 40% 2%' });

const shadowStrength = stylex.defineVars({ '@media:dark': '25%' });

const innerShadow = stylex.defineVars({
  highlight: 'inset 0 -.5px 0 0 #fff, inset 0 .5px 0 0 #0001',
  0: 'inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))',
  1: 'inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  2: 'inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  3: 'inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  4: 'inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
});

const innerShadowHighlight = stylex.defineVars({
  '@media:dark': 'inset 0 -.5px 0 0 #fff1, inset 0 .5px 0 0 #0007',
});

const layer = stylex.defineVars({
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  important: 2147483647,
});

const maskEdgeScoop = stylex.defineVars({
  bottom:
    'radial-gradient(20px at 50% 100%,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  top: 'radial-gradient(20px at 50% 0,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  vertical:
    'radial-gradient(20px at 50% 20px,#0000 97%,#000) 50% -20px/ calc(1.9 * 20px) 100%',
  left: 'radial-gradient(20px at 0 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  right:
    'radial-gradient(20px at 100% 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  horizontal:
    'radial-gradient(20px at 20px 50%,#0000 97%,#000) -20px/ 100% calc(1.9 * 20px)',
});

const maskEdge = stylex.defineVars({
  scalloped:
    '\n    radial-gradient(farthest-side,#000 97%,#0000) 0 0 / 20px 20px round,\n    linear-gradient(#000 0 0) 50%/calc(100% - 20px) calc(100% - 20px) no-repeat\n  ',
});

const maskEdgeScalloped = stylex.defineVars({
  bottom:
    '\n    linear-gradient(to top,#0000 20px,#000 0),\n    radial-gradient(20px at top,#000 97%,#0000) bottom / calc(1.9 * 20px) 20px\n  ',
  top: '\n    linear-gradient(to bottom,#0000 20px,#000 0),\n    radial-gradient(20px at bottom,#000 97%,#0000) top / calc(1.9 * 20px) 20px\n  ',
  vertical:
    '\n    linear-gradient(0deg,#0000 calc(2 * 20px),#000 0) 0 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(1.9 * 20px) calc(2 * 20px) repeat space\n  ',
  left: '\n    linear-gradient(to right,#0000 20px,#000 0),\n    radial-gradient(20px at right,#000 97%,#0000) left / 20px calc(1.9 * 20px)\n  ',
  right:
    '\n    linear-gradient(to left,#0000 20px,#000 0),\n    radial-gradient(20px at left,#000 97%,#0000) right / 20px calc(1.9 * 20px)\n  ',
  horizontal:
    '\n    linear-gradient(-90deg,#0000 calc(2 * 20px),#000 0) 20px,\n    radial-gradient(20px,#000 97%,#0000) 50% / calc(2 * 20px) calc(1.9 * 20px) space repeat\n  ',
});

const maskEdgeDrip = stylex.defineVars({
  bottom:
    '\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ',
  top: '\n    radial-gradient(20px at top,#0000 97%,#000) 50% 20px / calc(2 * 20px) 100% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 1% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ',
  vertical:
    '\n    radial-gradient(20px at top   ,#0000 97%,#000) 50%             20px  / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 51% repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% -   20px) 1%  / calc(4 * 20px) calc(2 * 20px) repeat-x,\n    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 3*20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x\n  ',
  left: '\n    radial-gradient(20px at left,#0000 97%,#000) 20px 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ',
  right:
    '\n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 100% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ',
  horizontal:
    '\n    radial-gradient(20px at left ,#0000 97%,#000)             20px  50% / 51% calc(2 * 20px) repeat-y,  \n    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 51% calc(2 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1%  calc(50% -   20px) / calc(2 * 20px) calc(4 * 20px) repeat-y,\n    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*20px) / calc(2 * 20px) calc(4 * 20px) repeat-y\n  ',
});

const maskEdgeZigZag = stylex.defineVars({
  top: 'conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  bottom:
    'conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  left: 'conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  right:
    'conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  horizontal:
    '\n    conic-gradient(from   45deg at left ,#0000,#000 1deg 90deg,#0000 91deg) left  / 51% calc(2 * 20px) repeat-y,\n    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right / 51% calc(2 * 20px) repeat-y\n  ',
  vertical:
    '\n    conic-gradient(from 135deg at top   ,#0000,#000 1deg 90deg,#0000 91deg) top    / calc(2 * 20px) 51% repeat-x,\n    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom / calc(2 * 20px) 51% repeat-x\n  ',
});

const maskCornerCutCircles = stylex.defineVars({
  1: 'radial-gradient(1rem at 1rem 1rem,#0000 99%,#000) -1rem -1rem',
  2: 'radial-gradient(2rem at 2rem 2rem,#0000 99%,#000) -2rem -2rem',
  3: 'radial-gradient(4rem at 4rem 4rem,#0000 99%,#000) -4rem -4rem',
});

const maskCornerCutSquares = stylex.defineVars({
  1: 'conic-gradient(at calc(2*1rem) calc(2*1rem),#000 75%,#0000 0) -1rem -1rem',
  2: 'conic-gradient(at calc(2*2rem) calc(2*2rem),#000 75%,#0000 0) -2rem -2rem',
  3: 'conic-gradient(at calc(2*4rem) calc(2*4rem),#000 75%,#0000 0) -4rem -4rem',
});

const maskCornerCutAngles = stylex.defineVars({
  1: '\n    conic-gradient(from -45deg at 1rem 1rem,#0000 25%,#000 0) \n    -1rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 1rem calc(100% - 1rem),#0000 25%,#000 0) \n    -1rem 100%/100% 51% repeat-x\n  ',
  2: '\n    conic-gradient(from -45deg at 2rem 2rem,#0000 25%,#000 0) \n    -2rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 2rem calc(100% - 2rem),#0000 25%,#000 0) \n    -2rem 100%/100% 51% repeat-x\n  ',
  3: '\n    conic-gradient(from -45deg at 4rem 4rem,#0000 25%,#000 0) \n    -4rem 0   /100% 51% repeat-x,\n    conic-gradient(from 135deg at 4rem calc(100% - 4rem),#0000 25%,#000 0) \n    -4rem 100%/100% 51% repeat-x\n  ',
});
