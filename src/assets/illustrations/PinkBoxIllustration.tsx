import { SvgXml } from "react-native-svg";

function PinkBoxIllustration() {
  const xml = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.632 28.5911C10.6324 28.5907 10.6329 28.5902 10.6335 28.5896C10.6274 28.5965 10.6261 28.597 10.632 28.5911ZM10.7396 28.503C10.7492 28.4959 10.7595 28.4884 10.7705 28.4804C10.9458 28.3542 11.2201 28.1877 11.6052 27.9836C12.37 27.5781 13.4504 27.0874 14.7667 26.5394C17.3918 25.4464 20.8498 24.1689 24.3554 22.9484C27.8578 21.7289 31.3889 20.5729 34.1533 19.723C35.5367 19.2977 36.7196 18.9516 37.6071 18.7132C38.052 18.5936 38.4116 18.5041 38.6797 18.4455C38.8698 18.4039 38.9732 18.3874 39.0144 18.3808C39.0177 18.3803 39.0207 18.3798 39.0232 18.3794C39.0256 18.3798 39.0282 18.3802 39.0312 18.3807C39.0722 18.3871 39.1763 18.4034 39.3683 18.4449C39.6364 18.5028 39.9959 18.5911 40.4403 18.7091C41.3271 18.9445 42.5089 19.2862 43.8909 19.7066C46.6526 20.5468 50.1803 21.6911 53.68 22.9026C57.1832 24.1152 60.6385 25.3883 63.263 26.4862C64.5791 27.0367 65.6585 27.5317 66.4228 27.9437C66.8074 28.1511 67.081 28.3208 67.2559 28.4502C67.2744 28.4639 67.2908 28.4764 67.3052 28.4877C67.3149 28.5502 67.3273 28.6407 67.34 28.7655C67.3709 29.07 67.3951 29.4815 67.4114 29.9951C67.4439 31.0197 67.4429 32.3866 67.4138 33.9891C67.3558 37.1903 67.1868 41.2779 66.9616 45.3329C66.7363 49.3879 66.4556 53.3965 66.1753 56.4394C66.0348 57.9635 65.8959 59.23 65.7659 60.1342C65.7065 60.5476 65.6517 60.8657 65.6034 61.0902C65.3966 61.196 65.1077 61.3341 64.7397 61.5024C63.9817 61.849 62.9354 62.3024 61.6881 62.8271C59.1962 63.8755 55.9356 65.1946 52.6478 66.4881C49.3596 67.7817 46.0533 69.046 43.4696 69.9856C42.1762 70.4559 41.0741 70.8411 40.2497 71.1073C39.8362 71.2408 39.5059 71.34 39.2626 71.4045C39.1418 71.4365 39.0643 71.4538 39.0208 71.463C38.9767 71.4539 38.8978 71.4367 38.7746 71.4046C38.5298 71.341 38.1974 71.2431 37.7819 71.1114C36.9534 70.849 35.8456 70.4691 34.5464 70.0049C31.9508 69.0776 28.6305 67.828 25.334 66.5446C22.037 65.2611 18.7749 63.9481 16.2948 62.8944C15.0527 62.3667 14.0193 61.9093 13.2796 61.556C12.939 61.3934 12.6755 61.2598 12.4883 61.1565C12.441 60.9113 12.3869 60.559 12.3277 60.1018C12.208 59.1774 12.0764 57.8947 11.9408 56.361C11.6698 53.2976 11.387 49.2796 11.1539 45.2257C10.9207 41.1714 10.738 37.0936 10.6663 33.9095C10.6304 32.3155 10.6227 30.9589 10.6492 29.9463C10.6625 29.4385 10.6841 29.0338 10.7125 28.7365C10.7221 28.6361 10.7316 28.5595 10.7396 28.503ZM12.2481 61.0111C12.2485 61.0111 12.2543 61.0151 12.2641 61.023C12.2526 61.015 12.2477 61.0111 12.2481 61.0111ZM12.5461 61.412C12.5516 61.4264 12.5541 61.4348 12.5539 61.4353C12.5538 61.4358 12.551 61.4287 12.5461 61.412ZM65.5378 61.3479C65.5266 61.3795 65.5263 61.3715 65.541 61.3386C65.5398 61.3424 65.5387 61.3455 65.5378 61.3479ZM65.8625 60.9486C65.8676 60.945 65.8706 60.9431 65.8711 60.9428C65.8716 60.9426 65.8689 60.9445 65.8625 60.9486ZM38.1217 15.9784C38.4014 15.9172 38.7463 15.8491 39.0225 15.8491C39.2965 15.8491 39.6395 15.9159 39.9195 15.9763C40.2439 16.0463 40.6471 16.1461 41.1104 16.2691C42.0393 16.5157 43.2539 16.8673 44.6507 17.2922C47.4465 18.1427 51.0055 19.2973 54.5337 20.5186C58.0583 21.7387 61.572 23.0322 64.2694 24.1605C65.6142 24.7231 66.784 25.2561 67.6587 25.7276C68.0935 25.962 68.4868 26.1979 68.8015 26.4307C69.0562 26.6192 69.4774 26.9572 69.6763 27.4416C69.8085 27.7637 69.8639 28.1791 69.8979 28.5148C69.937 28.9003 69.9636 29.3755 69.9807 29.9164C70.0151 31.0009 70.0134 32.4148 69.984 34.0341C69.9252 37.2766 69.7546 41.3972 69.5283 45.4707C69.3021 49.5443 69.0194 53.5848 68.7354 56.6674C68.5936 58.2061 68.4501 59.5215 68.3112 60.4878C68.2423 60.9678 68.1711 61.3853 68.097 61.7098C68.0604 61.8697 68.0169 62.035 67.9633 62.1851L67.961 62.1916C67.9283 62.2836 67.8183 62.5928 67.5578 62.8413C67.4168 62.9759 67.2553 63.0742 67.175 63.1221C67.0686 63.1857 66.946 63.2519 66.8167 63.3185C66.5567 63.4524 66.2192 63.6132 65.8239 63.794C65.0304 64.1568 63.956 64.6221 62.6994 65.1507C60.1834 66.2092 56.9031 67.5362 53.6028 68.8346C50.3028 70.1328 46.9739 71.406 44.3613 72.356C43.0565 72.8305 41.9203 73.2281 41.0517 73.5085C40.6188 73.6483 40.239 73.7633 39.9318 73.8447C39.6815 73.9111 39.3239 74.0001 39.0225 74.0001C38.7246 74.0001 38.3691 73.9135 38.1174 73.848C37.8095 73.768 37.4286 73.6548 36.9937 73.5171C36.1213 73.2408 34.9796 72.8488 33.6684 72.3803C31.0431 71.4424 27.6988 70.1836 24.3876 68.8945C21.0767 67.6055 17.7881 66.2821 15.2751 65.2144C14.0206 64.6814 12.9468 64.2069 12.1564 63.8294C11.7634 63.6417 11.4227 63.4695 11.1586 63.3205C11.0277 63.2466 10.8972 63.1681 10.7815 63.0877C10.7005 63.0314 10.4987 62.8897 10.3409 62.6753C10.1731 62.4471 10.0992 62.192 10.0732 62.1022L10.0722 62.0987C10.0318 61.9594 9.99687 61.8027 9.96586 61.6434C9.90321 61.3217 9.84046 60.9054 9.77773 60.4209C9.65167 59.4473 9.51658 58.126 9.37984 56.58C9.10602 53.4839 8.8215 49.4393 8.58741 45.3684C8.35334 41.2981 8.16896 37.189 8.09637 33.9654C8.06012 32.3555 8.05142 30.9529 8.07949 29.8812C8.09349 29.3469 8.11701 28.8782 8.15327 28.4995C8.18419 28.1767 8.23614 27.7568 8.37263 27.4321C8.48869 27.1559 8.6672 26.9513 8.79691 26.8213C8.93754 26.6803 9.09595 26.5535 9.25165 26.4414C9.56286 26.2173 9.95295 25.9881 10.3852 25.759C11.255 25.2979 12.4211 24.7713 13.7643 24.2121C16.4582 23.0905 19.9711 21.7937 23.4973 20.566C27.0267 19.3371 30.5882 18.171 33.3861 17.3108C34.784 16.881 35.9997 16.525 36.9294 16.2752C37.3932 16.1506 37.7968 16.0494 38.1217 15.9784Z" fill="#FF8FA9"/>
<path d="M58.3772 53.2305L55.607 52.2316C55.1862 52.0705 55.1511 51.3938 55.5719 51.2004L58.272 50.0082C58.4473 49.9437 58.5525 49.6859 58.4824 49.4604L58.2369 48.6548C58.1668 48.4292 57.9564 48.3326 57.7811 48.397L55.081 49.5893C54.6953 49.7504 54.3096 49.2026 54.555 48.7837L56.133 45.8836C56.2382 45.6902 56.2031 45.4324 56.0278 45.3036L55.4667 44.8202C55.2914 44.6913 55.081 44.7235 54.9758 44.9169L53.3979 47.817C53.1524 48.2359 52.6264 48.0425 52.5913 47.527L52.416 44.0791C52.416 43.8535 52.2407 43.6602 52.0654 43.6602L51.364 43.6924C51.1887 43.6924 51.0134 43.8857 51.0485 44.1435L51.7147 59.6752C51.7147 59.9008 51.89 60.0941 52.0654 60.0941L52.7667 60.0619C52.942 60.0619 53.1173 59.8686 53.0823 59.6108L52.942 56.0984C52.9069 55.5828 53.468 55.3573 53.7134 55.744L55.5369 58.5152C55.6421 58.7085 55.8875 58.7407 56.0278 58.5796L56.5538 58.064C56.694 57.9351 56.7291 57.6451 56.5888 57.4518L54.7654 54.6806C54.4849 54.2617 54.8005 53.6817 55.2213 53.8428L57.9915 54.8417C58.1668 54.9061 58.3772 54.7772 58.4123 54.5517L58.5876 53.7461C58.6928 53.5528 58.5876 53.295 58.3772 53.2305Z" fill="#E65C6C"/>
<path d="M38.4025 16.6955L9.5684 27.2264C9.5684 27.0378 4.00066 18.173 4.2806 16.3811C4.52944 14.5893 27.0803 7.32769 29.6309 8.36507C32.1504 9.40244 37.8426 16.6955 38.4025 16.6955Z" fill="#FFF5CC"/>
<path d="M67.6945 27.2264L38.4025 16.6481C39.066 16.6481 44.3746 8.65913 46.7445 8.28021C49.1144 7.90129 73.5718 14.343 73.793 15.8271C74.0142 17.3112 67.6945 26.8159 67.6945 27.2264Z" fill="#FFF5CC"/>
<path d="M77.5909 34.5268C77.6853 36.0704 51.4338 47.0368 49.1675 46.1364C46.9012 45.2359 38.7487 37.0674 38.4025 37.0674L67.5813 27.2266C67.5498 27.6446 77.4965 32.9831 77.5909 34.5268Z" fill="#FFF5CC"/>
<path d="M38.4024 37.0912C37.9388 37.0912 29.9338 46.4724 28.6975 46.1822C27.4612 45.8921 1.93171 34.7379 1.74626 33.4806C1.52991 32.2234 9.75128 27.42 9.75128 27.2266L38.4024 37.0912Z" fill="#FFF5CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.62415 16.8249C5.71887 16.7623 5.83938 16.6883 5.98919 16.6034C6.5718 16.2733 7.43315 15.87 8.51638 15.4193C10.6722 14.5224 13.5732 13.4922 16.563 12.5447C19.552 11.5974 22.5989 10.7423 25.0439 10.1902C26.2694 9.91341 27.3183 9.71854 28.1217 9.62326C28.5244 9.5755 28.8403 9.55587 29.0723 9.55841C29.2457 9.56031 29.3239 9.57457 29.3379 9.57637C29.6992 9.73234 30.2887 10.1491 31.0686 10.8416C31.835 11.5222 32.678 12.3705 33.5097 13.2465C34.1948 13.9681 34.858 14.6934 35.4549 15.3462C35.5817 15.4849 35.7055 15.6203 35.8259 15.7517C35.9732 15.9124 36.1178 16.07 36.258 16.2215L10.2058 25.6807C10.1528 25.5903 10.0968 25.4951 10.0384 25.3957C9.88206 25.1296 9.70776 24.8329 9.52357 24.5174C8.98297 23.5914 8.33044 22.4583 7.70786 21.3143C7.08253 20.1652 6.50033 19.0286 6.09308 18.0911C5.88876 17.6207 5.74031 17.2272 5.65146 16.9229C5.64111 16.8875 5.63207 16.8549 5.62415 16.8249ZM29.1004 7.00037C29.4516 7.00421 29.8855 7.03766 30.2728 7.19419L30.2758 7.19542C31.075 7.5208 31.9571 8.20801 32.7696 8.92953C33.6164 9.6815 34.5174 10.5907 35.3673 11.4859C36.0706 12.2267 36.7532 12.9732 37.3504 13.6263C37.4757 13.7634 37.5973 13.8964 37.7145 14.0243C38.4168 14.7908 38.9163 15.3245 39.1822 15.5597L39.2808 15.647L39.3595 15.7524C39.6219 16.1038 39.7325 16.5663 39.6269 17.0171C39.519 17.4776 39.1729 17.9219 38.6245 18.0842L10.1924 28.4074L10.177 28.4125C9.89451 28.5071 9.52898 28.5348 9.15981 28.3865C8.82087 28.2503 8.55425 27.9936 8.40209 27.6723C8.29832 27.4873 8.11377 27.1732 7.86709 26.7534C7.70661 26.4804 7.51984 26.1625 7.31191 25.8064C6.76634 24.8718 6.09904 23.7133 5.45848 22.5363C4.82069 21.3643 4.19646 20.1504 3.74435 19.1096C3.51899 18.5907 3.32453 18.0881 3.19353 17.6394C3.07719 17.2409 2.9548 16.7079 3.02867 16.207C3.07981 15.8544 3.24462 15.5914 3.36382 15.4346C3.49149 15.2666 3.63877 15.127 3.77213 15.0152C4.03864 14.7919 4.37262 14.5784 4.72617 14.3781C5.4419 13.9726 6.41364 13.5231 7.5321 13.0577C9.77967 12.1226 12.7563 11.0673 15.7888 10.1062C18.8222 9.14486 21.9423 8.26791 24.4794 7.69492C25.7451 7.40908 26.891 7.19306 27.82 7.08289C28.2834 7.02792 28.7181 6.99619 29.1004 7.00037Z" fill="#FF8FA9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.7949 9.5725C46.7833 9.57541 46.7496 9.585 46.6915 9.6109C46.6149 9.64501 46.5143 9.69917 46.3888 9.78041C46.1351 9.94475 45.8312 10.1864 45.483 10.5041C44.7865 11.1395 44.0081 11.991 43.2247 12.9052C42.6094 13.6232 42.0118 14.3551 41.4625 15.028C41.3143 15.2096 41.1696 15.3868 41.029 15.5583C40.8653 15.758 40.7028 15.9555 40.5444 16.1452L67.0106 25.6686C67.2411 25.2768 67.5241 24.81 67.8264 24.313C67.9254 24.1501 68.0279 23.9818 68.1332 23.8089C68.6827 22.9065 69.3086 21.8789 69.9166 20.8494C70.6432 19.6192 71.3292 18.4119 71.8187 17.4366C72.0324 17.0109 72.1983 16.6496 72.3123 16.362C72.2439 16.3286 72.1677 16.2927 72.0834 16.2543C71.4448 15.9636 70.5057 15.6079 69.3332 15.2089C66.9986 14.4144 63.8622 13.4897 60.6421 12.6187C57.4243 11.7483 54.1453 10.9375 51.5303 10.3692C50.2211 10.0847 49.0922 9.86396 48.2268 9.72661C47.7931 9.65779 47.4408 9.61236 47.1731 9.58932C46.9435 9.56956 46.8323 9.5718 46.8025 9.5724C46.7986 9.57248 46.7961 9.57253 46.7949 9.5725ZM72.4681 15.8785C72.4683 15.8784 72.468 15.8811 72.4671 15.8867C72.4676 15.8814 72.468 15.8786 72.4681 15.8785ZM74.6136 14.8163C74.7371 14.946 74.9798 15.2331 75.0442 15.6635L75.0453 15.6713L75.0464 15.6791C75.0884 15.986 75.0416 16.273 74.9983 16.4685C74.9505 16.6841 74.879 16.9067 74.799 17.1227C74.6387 17.5553 74.4088 18.0555 74.1449 18.5813C73.6147 19.6376 72.8923 20.9061 72.1589 22.1479C71.5412 23.1936 70.9049 24.2385 70.3556 25.1405C70.2509 25.3125 70.1493 25.4793 70.0516 25.6399C69.4167 26.6839 68.994 27.3912 68.8709 27.6485L68.831 27.7319L68.7796 27.8087C68.5655 28.1283 68.2634 28.319 67.9828 28.4121C67.7632 28.485 67.3773 28.5539 66.966 28.3893L38.0454 17.9826L37.9773 17.9488C37.1548 17.5395 36.7851 16.3642 37.5763 15.5767L37.5992 15.5539L37.6233 15.5323C37.8663 15.3135 38.3323 14.7667 39.0122 13.9373C39.1464 13.7735 39.2868 13.6016 39.4322 13.4235C39.9834 12.7483 40.6066 11.985 41.2441 11.241C42.0477 10.3032 42.9077 9.35613 43.7229 8.61245C44.1305 8.24057 44.5506 7.89757 44.9668 7.62793C45.3665 7.36902 45.8527 7.11793 46.3822 7.03269L46.3844 7.03233C46.7031 6.98158 47.0761 6.99915 47.398 7.02685C47.7518 7.05729 48.1715 7.11289 48.6379 7.1869C49.5724 7.33522 50.7551 7.56738 52.0872 7.85688C54.7547 8.43664 58.0775 9.25863 61.3266 10.1375C64.5734 11.0158 67.769 11.9568 70.1774 12.7764C71.3764 13.1844 72.4116 13.5728 73.1683 13.9173C73.5411 14.0869 73.8912 14.266 74.1699 14.452C74.3076 14.544 74.4691 14.6646 74.6136 14.8163Z" fill="#FF8FA9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.2313 28.7016C67.3278 28.767 67.4261 28.8315 67.5211 28.8931C67.8656 29.1167 68.3023 29.3876 68.7883 29.686C69.0175 29.8267 69.2587 29.9741 69.5088 30.127C70.3296 30.6289 71.2466 31.1895 72.1525 31.764C73.3383 32.5161 74.4643 33.2667 75.2901 33.9079C75.4947 34.0667 75.6719 34.212 75.8218 34.3429C75.808 34.3515 75.7941 34.3602 75.7799 34.3691C75.1178 34.7807 74.1318 35.3093 72.8982 35.9176C70.441 37.1292 67.1143 38.6017 63.7011 40.0033C60.2881 41.405 56.8141 42.7254 54.0636 43.6367C52.6848 44.0936 51.5126 44.4393 50.6312 44.6426C50.1882 44.7448 49.8482 44.8039 49.6075 44.8276C49.5166 44.8365 49.456 44.8385 49.4202 44.8387C49.0876 44.6811 48.4508 44.2494 47.5489 43.5301C46.6185 42.7881 45.5372 41.8492 44.4551 40.8814C43.552 40.0736 42.632 39.2299 41.8108 38.4769C41.4501 38.146 41.1084 37.8327 40.7957 37.5477L67.2313 28.7016ZM49.5067 44.8762L49.5022 44.8745C49.5037 44.875 49.5052 44.8756 49.5067 44.8762ZM76.3444 34.8777C76.3492 34.8855 76.348 34.8846 76.3432 34.8756C76.3436 34.8764 76.3441 34.8771 76.3444 34.8777ZM68.1279 26.1465L68.1286 26.1468L68.2936 26.2307L68.4259 26.3552C68.4251 26.3544 68.4247 26.354 68.4247 26.354C68.4249 26.3537 68.4568 26.3806 68.5429 26.4418C68.6356 26.5076 68.7602 26.5913 68.9177 26.6936C69.2326 26.8979 69.6449 27.1539 70.1303 27.4519C70.3519 27.588 70.5879 27.7323 70.8346 27.8831C71.658 28.3865 72.6007 28.9628 73.5265 29.55C74.7258 30.3106 75.9375 31.1149 76.8649 31.835C77.3252 32.1923 77.7525 32.5573 78.0801 32.9083C78.2437 33.0837 78.4089 33.2835 78.5427 33.5019C78.6672 33.7052 78.8269 34.0244 78.8523 34.4205L78.8525 34.424C78.8835 34.928 78.6485 35.2945 78.5426 35.4425C78.4129 35.6237 78.2588 35.7733 78.128 35.8876C77.8613 36.1207 77.513 36.36 77.1342 36.5955C76.3648 37.0739 75.2902 37.6462 74.0316 38.2668C71.5044 39.5129 68.1201 41.0097 64.6742 42.4249C61.2281 43.8401 57.6949 45.1841 54.8688 46.1205C53.4591 46.5876 52.2006 46.9615 51.2062 47.1909C50.7113 47.305 50.2521 47.3903 49.8571 47.4291C49.5274 47.4614 49.0204 47.4892 48.569 47.312C47.8451 47.0288 46.8826 46.3279 45.9475 45.5821C44.9598 44.7943 43.8357 43.8172 42.742 42.8389C41.7372 41.9402 40.7749 41.0569 39.9501 40.2997C38.9427 39.3749 38.1404 38.6384 37.7168 38.2927C36.6988 37.4927 37.1506 36.0849 38.0974 35.7001L38.1349 35.6848L66.9081 26.0566C67.2412 25.9272 67.553 25.9522 67.7684 26.0069C67.9579 26.0551 68.1166 26.1404 68.1279 26.1465Z" fill="#FF8FA9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0289 28.6988L36.1487 37.6284C35.9222 37.8636 35.6821 38.1149 35.4341 38.375C35.277 38.5398 35.1154 38.7097 34.95 38.8834C34.1929 39.679 33.3584 40.5558 32.5325 41.3989C31.5223 42.4301 30.5518 43.3832 29.776 44.0565C29.3963 44.3861 29.0951 44.6206 28.8781 44.762C28.8539 44.753 28.8279 44.7431 28.8 44.7325C28.5561 44.6396 28.2262 44.5085 27.8192 44.3428C27.0066 44.012 25.9078 43.5515 24.6184 43.0011C22.0406 41.9005 18.7156 40.4461 15.4238 38.9618C12.1293 37.4762 8.88022 35.966 6.44889 34.7525C5.22976 34.1441 4.23714 33.6205 3.55251 33.2178C3.54186 33.2115 3.53131 33.2053 3.52087 33.1991C3.55521 33.1689 3.59105 33.1377 3.62842 33.1057C4.25335 32.57 5.13836 31.9271 6.09138 31.2757C7.03698 30.6294 8.01557 29.9975 8.81542 29.4835C8.89694 29.4311 8.97776 29.3792 9.0574 29.3281C9.42094 29.0947 9.75995 28.8771 10.0289 28.6988ZM10.3751 26.0571C10.0469 25.927 9.73965 25.9522 9.52753 26.007C9.34104 26.0553 9.1848 26.1408 9.17362 26.1469C9.17327 26.1471 9.17306 26.1472 9.173 26.1472L9.06661 26.2023L8.97198 26.2767C8.84486 26.3766 8.35064 26.6943 7.5509 27.2082L7.46786 27.2616C6.66747 27.776 5.66203 28.4249 4.68383 29.0935C3.71306 29.7571 2.73451 30.4633 2.00016 31.0928C1.63788 31.4033 1.29118 31.7321 1.031 32.0561C0.901484 32.2174 0.760643 32.4176 0.654665 32.6476C0.555458 32.863 0.428463 33.2303 0.497685 33.6703C0.569964 34.1335 0.849319 34.4322 0.926157 34.5144L0.927743 34.5161C1.05312 34.6502 1.19511 34.7672 1.32114 34.8627C1.57857 35.0577 1.91416 35.271 2.29007 35.4921C3.05046 35.9394 4.10455 36.4935 5.33875 37.1095C7.81406 38.345 11.0981 39.8709 14.4028 41.3611C17.7102 42.8524 21.0505 44.3135 23.6436 45.4206C24.9397 45.974 26.0527 46.4404 26.8833 46.7786C27.298 46.9474 27.6475 47.0864 27.9166 47.189C28.1492 47.2776 28.4082 47.3733 28.585 47.4145L28.5883 47.4152C29.0197 47.5144 29.3946 47.3949 29.5832 47.3226C29.8054 47.2374 30.0167 47.1179 30.2013 46.9997C30.5739 46.7611 30.991 46.4282 31.4162 46.0591C32.2747 45.314 33.3056 44.2986 34.3242 43.2588C35.1646 42.401 36.0148 41.5076 36.7722 40.7118C36.9363 40.5393 37.096 40.3715 37.2504 40.2096C38.1261 39.2908 38.7894 38.6046 39.1333 38.2955C39.5461 37.9458 39.7386 37.3979 39.6421 36.8651C39.544 36.3237 39.1572 35.8681 38.6151 35.7115L10.3751 26.0571Z" fill="#FF8FA9"/>
<path d="M39.6666 72.5C39 66 37.8666 49.9 38.6666 37.5" stroke="#FF8FA9" stroke-width="3"/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export default PinkBoxIllustration;