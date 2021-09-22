import React from "react"
import { Toast } from "../components/Toast/Toast"
import { ToastContainer } from "../components/Toast/ToastContainer"
import errorIcon from "../assets/error.svg"
import infoIcon from "../assets/info.svg"
import warningIcon from "../assets/warning.svg"
import succsessIcon from "../assets/success.svg"
import {
  WHITE,
  GREEN,
  RED,
  PURPLE,
  BLACK,
  YELOW,
  GREY,
  SUCCESS,
  ERROR, 
  INFO, 
  WARNING,
  SUCCESS_TITLE,
  WARNING_TITLE,
  ERROR_TITLE,
  INFO_TITLE,
  CUSTOM_TITLE,
} from "../constants/index"


let toastList = []

class _Toast {
  constructor(toastList) {
    this.toastList = toastList
  }

  showToast(
    toastType,
    toastProperties,
    toastPosition,
    toastIsAutoDelete,
    toastAutoDeleteTime,
    animation,
  ) {
    const {
      toastId,
      title,
      titleColor,
      description,
      backgroundColor,
      icon,
      padding,
    } = toastProperties

    const id = Math.floor(Math.random() * 101 + 1)

    switch (toastType) {
      case SUCCESS:
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || SUCCESS_TITLE,
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || GREEN,
          icon: icon || succsessIcon,
          toastPadding: padding,
        }
        break
      case ERROR:
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || ERROR_TITLE,
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || RED,
          icon: icon || errorIcon,
          toastPadding: padding,
        }
        break
      case INFO:
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || INFO_TITLE,
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || PURPLE,
          icon: icon || infoIcon,
          toastPadding: padding,
        }
        break
      case WARNING:
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || WARNING_TITLE,
          titleColor: titleColor || BLACK,
          description: description || "",
          backgroundColor: backgroundColor || YELOW,
          icon: icon || warningIcon,
          toastPadding: padding,
        }
        break
      default:
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || CUSTOM_TITLE,
          titleColor: titleColor || BLACK,
          description: description || "",
          backgroundColor: backgroundColor || GREY,
          icon: icon || succsessIcon,
          toastPadding: padding,
        }
    }
    if (toastList.length < 3) toastList = [...toastList, toastProperties]

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
    )
  }
}

export const toast = new _Toast(toastList)
