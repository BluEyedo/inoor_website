"use client";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/main/en");
    }, 1000);
  }, []);

  return (
    <div className="">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              color: "#D4AF37",
              fontSize: 80,
              position: "fixed",
              top: "50%",
              left: "50%",
            }}
            spin
          />
        }
      />
    </div>
  );
}
