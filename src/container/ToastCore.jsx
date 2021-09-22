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
} from "../constants/colors"

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
      case "success":
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || "Success",
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || GREEN,
          icon: icon || succsessIcon,
          toastPadding: padding,
        }
        break
      case "error":
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || "Error",
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || RED,
          icon: icon || errorIcon,
          toastPadding: padding,
        }
        break
      case "info":
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || "Info",
          titleColor: titleColor || WHITE,
          description: description || "",
          backgroundColor: backgroundColor || PURPLE,
          icon: icon || infoIcon,
          toastPadding: padding,
        }
        break
      case "warning":
        toastProperties = {
          ...toastProperties,
          id: toastId || id,
          title: title || "Warning",
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
          title: title || "Custom",
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
