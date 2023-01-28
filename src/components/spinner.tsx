import { Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

export default function Spinner({
  isLoading,
}: Record<string, boolean>): JSX.Element {
  return (
    <Spin
      indicator={antIcon}
      spinning={isLoading}
      wrapperClassName="spin-container"
      size="large"
    />
  );
}
