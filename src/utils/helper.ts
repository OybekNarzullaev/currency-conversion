import { notification } from "antd";

export let onFinishFailed = (errorInfo: any) => {
  notification.error({
    message: "Ошибка",
    description: errorInfo,
  });
};

export let onFinishSucces = (success: string) => {
  notification.success({
    message: "Успешно",
    description: success,
  });
};
