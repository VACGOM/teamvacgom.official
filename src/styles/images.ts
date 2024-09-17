/**
 * - 이미지 path 정보를 assign 할 때 필요한 정보
 * @type {string}
 */
interface ImagesType extends Record<string, string> {}

// 팀원 이미지
import img_heabin from "../../public/assets/img/변해빈.png";
import img_minjeong from "../../public/assets/img/김민정.png";
import img_hyungju from "../../public/assets/img/성형주.png";
import img_yena from "../../public/assets/img/전예나.png";
import img_sohyun from "../../public/assets/img/오소현.png";
import img_jieun from "../../public/assets/img/김지은.png";

// 벡곰 이미지
import img_introVecgom from "../../public/assets/img/introVecgom.svg";
import img_vecgomFace from "../../public/assets/img/img_vecgomFace.svg";

// etc
import img_Accessibility from "../../public/assets/img/img_accessibility.svg";
import img_innovation from "../../public/assets/img/img_innovation.svg";
import img_Sustainability from "../../public/assets/img/img_Sustainability.svg";
import img_SocialImpact from "../../public/assets/img/img_SocialImpact.svg";

// 아이콘
import icon_mail from "../../public/assets/icon/icon_mail.svg";
import icon_blog from "../../public/assets/icon/icon_blog.svg";
import icon_github from "../../public/assets/icon/icon_git.svg";
import icon_linkedin from "../../public/assets/icon/icon_linkedin.svg";

// prettier-ignore
export const Images: ImagesType = {
  // icon
  icon_mail: icon_mail,
  icon_linkedin: icon_linkedin,
  icon_blog: icon_blog,
  icon_github: icon_github,
  
  
  //image
  
  // 팀원 이미지
  img_heabin: img_heabin,
  img_minjeong: img_minjeong,
  img_hyungju: img_hyungju,
  img_yena: img_yena,
  img_sohyun: img_sohyun,
  img_jieun: img_jieun,
  
  // 백곰 캐릭터 관련 이미지
  img_introVecgom: img_introVecgom,
  img_vecgomFace: img_vecgomFace,
  
  // etc
  img_Accessibility : img_Accessibility,
  img_innovation : img_innovation,
  img_Sustainability : img_Sustainability,
  img_SocialImpact : img_SocialImpact,

  
};