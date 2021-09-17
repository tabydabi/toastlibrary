import React from "react";
import { Toast } from "../Toast/Toast";
import { ToastContainer } from "../Toast/TastContainer";
import errorIcon from "../assets/error.svg";
import infoIcon from "../assets/info.svg";
import warningIcon from "../assets/warning.svg";
import succsessIcon from "../assets/success.svg";

let toastList = [];

class _Toast {
  constructor(toastList) {
    this.toastList = toastList;
  }

  showToast(
    toastType,
    toastProperties,
    toastPosition,
    toastIsAutoDelete,
    toastAutoDeleteTime,
    animation
  ) {
    const {
      toastId,
      title,
      titleColor,
      description,
      backgroundColor,
      icon,
      padding,
    } = toastProperties;

    const id = Math.floor(Math.random() * 101 + 1);

    switch (toastType) {
      case "success":
        toastProperties = {
          ...toastProperties,
          id: toastId ? toastId : id,
          title: title ? title : "Success",
          titleColor: titleColor ? titleColor : "#FFFFFF",
          description: description ? description : "",
          backgroundColor: backgroundColor ? backgroundColor : "#5cb85c",
          icon: icon ? icon : succsessIcon,
          toastPadding: padding,
        };
        break;
      case "error":
        toastProperties = {
          ...toastProperties,
          id: toastId ? toastId : id,
          title: title ? title : "Error",
          titleColor: titleColor ? titleColor : "#FFFFFF",
          description: description ? description : "",
          backgroundColor: backgroundColor ? backgroundColor : "#d9534f",
          icon: icon ? icon : errorIcon,
          toastPadding: padding,
        };
        break;
      case "info":
        toastProperties = {
          ...toastProperties,
          id: toastId ? toastId : id,
          title: title ? title : "Info",
          titleColor: titleColor ? titleColor : "#FFFFFF",
          description: description ? description : "",
          backgroundColor: backgroundColor ? backgroundColor : "#9A40D3",
          icon: icon ? icon : infoIcon,
          toastPadding: padding,
        };
        break;
      case "warning":
        toastProperties = {
          ...toastProperties,
          id: toastId ? toastId : id,
          title: title ? title : "Warning",
          titleColor: titleColor ? titleColor : "#000000",
          description: description ? description : "",
          backgroundColor: backgroundColor ? backgroundColor : "#F4E048",
          icon: icon ? icon : warningIcon,
          toastPadding: padding,
        };
        break;

      default:
        toastProperties = {
          ...toastProperties,
          id: toastId ? toastId : id,
          title: title ? title : "Custom",
          titleColor: titleColor ? titleColor : "#000000",
          description: description ? description : "description text message",
          backgroundColor: backgroundColor ? backgroundColor : "#f2f2f2",
          icon: icon ? icon : succsessIcon,
          toastPadding: padding,
        };
    }
    if (toastList.length < 3) toastList = [...toastList, toastProperties];

    return (
      <ToastContainer>
        <Toast
          toastList={toastList}
          position={toastPosition}
          autoDelete={toastIsAutoDelete}
          autoDeleteTime={toastAutoDeleteTime}
          animation={animation}
        />
      </ToastContainer>
    );
  }
}

const toast = new _Toast(toastList);

export { toast };
