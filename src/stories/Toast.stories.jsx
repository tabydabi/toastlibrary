import { toast } from "../Core/ToastCore";

export default {
  title: "Toast",
  argTypes: {
    toastType: {
      control: {
        type: "inline-radio",
        options: ["error", "warning", "success", "info"],
      },
    },
    toastPosition: {
      control: {
        type: "inline-radio",
        options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      },
    },
    toastIsAutoDelete: {
      control: {
        type: "boolean",
      },
    },
    toastAutoDeleteTime: {
      control: {
        type: "number",
      },
    },
    animation: {
      control: {
        type: "inline-radio",
        options: ["toast-from-top", "toast-from-bottom", ""],
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    titleColor: {
      control: {
        type: "color",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    toastPadding: {
      control: {
        type: "text",
      },
    },
  },
};

export const ToastExample = (args) =>
  toast.showToast(
    args.toastType,
    {
      title: args.title,
      titleColor: args.titleColor,
      description: args.description,
      backgroundColor: args.backgroundColor,
      icon: args.icon,
      toastPadding: args.toastPadding,
    },
    args.toastPosition,
    args.toastIsAutoDelete,
    args.toastAutoDeleteTime,
    args.animation
  );

ToastExample.args = {
  toastType: "error",
  toastPosition: "top-right",
  toastIsAutoDelete: "true",
  toastAutoDeleteTime: 3000,
  animation: "",
  title: "",
  titleColor: "",
  description: "toast description",
  backgroundColor: "",
  icon: "",
  toastPadding: "",
};
