/**
 * - 이미지 path 정보를 assign 할 때 필요한 정보
 * @type {string}
 */
const BASE_URL = process.env.BASE_URL;
interface ImagesType extends Record<string, string> {}
import kakao from '../../public/assets/ico/ico-kakao.svg';
import google from '../../public/assets/ico/ic-google.svg';
import vacgom from '../../public/assets/image/img-splash-vacgom.svg';
import Vacgom01 from '../../public/assets/image/img-Vacgom01.svg';
import share from '../../public/assets/ico/ico-share.svg';
import eye from '../../public/assets/ico/ico-eye.svg';
import eyeSlash from '../../public/assets/ico/ico-eye-slash.svg';
import checkBox_selec_dis from '../../public/assets/ico/ico-checkbox-selected-disabled.svg';
import checkBox_selec_en from '../../public/assets/ico/ico-checkbox-selected-enabled.svg';
import checkBox_unselec_dis from '../../public/assets/ico/ico-checkbox-unselected-disabled.svg';
import checkBox_unselec_en from '../../public/assets/ico/ico-checkbox-unselected-enabled.svg';
import radio_selec_dis from '../../public/assets/ico/ico-radio-selected-disabled.svg';
import radio_selec_en from '../../public/assets/ico/ico-radio-selected-enabled.svg';
import radio_unselec_dis from '../../public/assets/ico/ico-radio-unselected-disabled.svg';
import radio_unselec_en from '../../public/assets/ico/ico-radio-unselected-enabled.svg';
import Vacgom_Logo from '../../public/assets/ico/ico-vacgom-logo.svg';
import Home_Mockup from '../../public/assets/image/img-home-mockup.svg';
import Left_box from '../../public/assets/image/ico-home-left.svg';
import to_go from '../../public/assets/ico/ico-to-go.svg';
import to_go_white from '../../public/assets/ico/ico-to-go-white.svg';

import hyungju_1 from '../../public/assets/thumnails/img-thumnails-hyunju-1.jpeg';

import sohyun_1 from '../../public/assets/thumnails/img-thumnails-sohyun-1.png';
import sohyun_2 from '../../public/assets/thumnails/img-thumnails-sohyun-2.png';
import sohyun_3 from '../../public/assets/thumnails/img-thumnails-sohyun-3.png';
import sohyun_4 from '../../public/assets/thumnails/img-thumnails-sohyun-4.png';
import sohyun_5 from '../../public/assets/thumnails/img-thumnails-sohyun-5.png';
import haebin_1 from '../../public/assets/thumnails/img-thumnnails-haebin-1.jpeg';

import sohyun_profile from '../../public/assets/image/img-sohyun-profile.png';
import minjeong_profile from '../../public/assets/image/img-minjeong-profile.png';
import hyungju_profile from '../../public/assets/image/img-hyungju-profile.png';
import yena_profile from '../../public/assets/image/img-yena-profile.png';
import haebin_profile from '../../public/assets/image/img-haebin-profile.png';
import jieun_profile from '../../public/assets/image/img-jieun-profile.png';
import small_logo from '../../public/assets/ico/ico-vacgom-small-logo.svg';
import calendar_img from '../../public/assets/image/img-calendar.svg';
import map_img from '../../public/assets/image/img-map.svg';
import together_img from '../../public/assets/image/img-together.svg';
import vaccine_img from '../../public/assets/image/img-info-vaccine.svg';


// prettier-ignore
export const Images: ImagesType = {
  // icon
  kakao: kakao,
  google: google,
  share: share,
  eye:eye,
  eyeSlash:eyeSlash,
  checkBox_selec_dis: checkBox_selec_dis,
  checkBox_selec_en :checkBox_selec_en,
  checkBox_unselec_dis :checkBox_unselec_dis,
  checkBox_unselec_en :checkBox_unselec_en,
  radio_selec_dis :radio_selec_dis,
  radio_selec_en :radio_selec_en,
  radio_unselec_dis : radio_unselec_dis,
  radio_unselec_en :radio_unselec_en,
  small_logo:small_logo,
  //image
  vacgom01: Vacgom01,
  vacgom : vacgom,
  Vacgom_Logo: Vacgom_Logo,
  Home_Mockup: Home_Mockup,
  Left_box:Left_box,
  to_go:to_go,
  to_go_white:to_go_white,
  vaccine_img :vaccine_img ,
  calendar_img:calendar_img,
  map_img:map_img,
  together_img:together_img,

    //profile
    sohyun_profile: sohyun_profile,
    minjeong_profile: minjeong_profile,
    haebin_profile: haebin_profile,
    hyungju_profile: hyungju_profile,
    yena_profile:yena_profile,
    jieun_profile:jieun_profile,


  //thumnails
  hyungju_1: hyungju_1,
  sohyun_1:sohyun_1,
  sohyun_2:sohyun_2,
  sohyun_3:sohyun_3,
  sohyun_4:sohyun_4,
  sohyun_5:sohyun_5,
  haebin_1:haebin_1,


};
