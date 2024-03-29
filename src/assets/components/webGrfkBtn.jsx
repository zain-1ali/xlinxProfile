import React from "react";
import webbtn from "../../imgs/webbtn.png";
const WebGrfkBtn = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
}) => {
  return (
    <>
      <a
        target="_blank"
        href={elm?.linkID != null && checkHttp(elm?.url, elm?.linkID, elm?.url)}
        // returnSocialUrl(elm?.title, elm?.value)
        className="h-[186px] w-[100%]  rounded-[20px] relative"
        style={{
          display:
            elm?.shareable === false || elm?.isFeatureOn === true
              ? "none"
              : null,
          backgroundImage: `url(${elm?.graphicImgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: elm?.graphicDisplayType === "style1" ? "30px" : "0px",
        }}
        onClick={() => linkAnalytics(elm)}
      >
        {/* {elm?.linkID != null && (
          <div className="h-[100%] w-[22%] flex items-center">
            <img
              src={returnIcons(elm?.linkID)}
              alt="img"
              class={` ${"h-[65px] w-[65px]"}  ml-1 `}
              style={{
                display:
                  elm?.shareable === false || elm?.isFeatureOn === true
                    ? "none"
                    : null,
                borderRadius:
                  webBtnStyle === "s1" || webBtnStyle === "s5"
                    ? "0px"
                    : webBtnStyle === "s2" || webBtnStyle === "s6"
                    ? "8px"
                    : webBtnStyle === "s3" || webBtnStyle === "s7"
                    ? "14px"
                    : webBtnStyle === "s4" || webBtnStyle === "s8"
                    ? "40px"
                    : null,
              }}
            />
          </div>
        )} */}
        <p
          class="font-[400] text-[17px] text-white mt-[6px] text-center  w-[100%] absolute bottom-3"
          style={{
            color: elm?.graphicTextColor,
            bottom: elm?.graphicDisplayType === "style1" ? "-35px" : "12px",
            // marginBottom: "20px",
            // height: "50px",
          }}
        >
          {elm?.graphicDisplayText}
        </p>
      </a>
    </>
  );
};

export default WebGrfkBtn;
