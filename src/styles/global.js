import { injectGlobal } from 'vue3-styled-components';
import reset from '@/styles/reset';
import { vw } from '@/styles/mixin';

export default injectGlobal`
  ${reset}
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Medium.ttf') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'SamsungSharpSans';
    src: url('/fonts/samsungsharpsans-bold_v2.woff2') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'SamsungSharpSans';
    src: url('/fonts/samsungsharpsans-medium_v2.woff2') format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'SamsungSharpSans';
    src: url('/fonts/SamsungSharpSansRg.woff') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'SamsungOne';
    src: url('/fonts/SamsungOne-400.woff2') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'SamsungOne';
    src: url('/fonts/SamsungOne-700.woff2') format('truetype');
    font-weight: 700;
  }

  body {
    font-family: 'SamsungOne';
    overflow: hidden;
  }

  .scrollbar {
    &::-webkit-scrollbar {
      ${vw('width', 15)}
      &-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        ${vw('border-radius', 8)}
      }
      &-track {
        background-color: transparent;
      }
    }
  }
`;
