import React, { useState } from "react";
import { Avatar, Card, Col, Modal, Row, Space, Tooltip } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  CodeOutlined,
  PlayCircleOutlined,
  StarOutlined,
  ScheduleOutlined,
  BulbOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import bctImage from "../image/bct.jpg";
import ResumeCard from "./SideProject/ResumeCard";
import SkillTree from "./SkillTree/SkillTree2";
const { Meta } = Card;
import my_head_img from "image/notion-avatar-1695404119050.png"

const SideProject = () => {
  const [spModalOpen, setSpModalOpen] = useState(false);
  const [spModalData, setSpModalData] = useState({ title: "", info: "" });
  //-----------------------------------------------
  interface Props {
    title: string;
    description: string;
    info: string;
    skill: string;
    display: string;
    key: string;
  }
  const SPCard: React.FC<Props> = (props) => {
    return (
      <Card
        style={{
          width: 250,
          height: 350, // 調整卡片的高度
          margin: "10px", // 為每張卡片添加邊距
        }}
        cover={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200, // 設定圖片容器的高度
            }}
          >
            <img
              alt="example"
              src={bctImage}
              style={{
                width: "100%", // 設定圖片寬度為100%
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        }
        actions={[
          <Tooltip title="這裡提供關於該專案的簡單描述或摘要。" key="p">
            <InfoCircleOutlined
              onClick={() => {
                setSpModalOpen(true);
                setSpModalData({
                  title: `${props.title} 摘要`,
                  info: props.info,
                });
              }}
            />
          </Tooltip>,
          <Tooltip
            title="關於專案的技術實現、使用的技術棧或特定技術的詳細描述。"
            key="edit"
          >
            <CodeOutlined
              onClick={() => {
                setSpModalOpen(true);
                setSpModalData({
                  title: `${props.title} 使用技術描述`,
                  info: props.skill,
                });
              }}
            />
          </Tooltip>,
          <Tooltip
            title="這可能是一個螢幕截圖、動畫或短片，展示專案的界面或功能。"
            key="ellipsis"
          >
            <PlayCircleOutlined
              onClick={() => {
                setSpModalOpen(true);
                setSpModalData({
                  title: `${props.title} 展示`,
                  info: props.display,
                });
              }}
            />
          </Tooltip>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={props.title}
          description={props.description}
        />
      </Card>
    );
  };

  //-----------------------------------------------
  //-----------------------------------------------
  const SPCardGroup = () => {
    const sp_data = [
      {
        title: "BadChillTon",
        description: "羽球配對對戰系統",
        imageURL: "",
        info: `當一次擁有四面羽球場,有32人要來打雙打,
        怎麼配對大家的對戰,是這個系統最主要要解決的問題,
        這個系統依據大家等待的場次,大家的自評的實力,
        做對戰系統的分配,致力於將大家打球的體驗提升與操作自動化！`,
        display: "",
        skill: `使用到的技術：
        前端:HTML,CSS,JavaScript,JQuery
        後端:網頁瀏覽器與firebase結合使用 達成在瀏覽器執行的server,並且有能力與前端進行雙向溝通
        資料庫:Firebase的RealTime Database `,
        key:"BadChillTon",
      },
      {
        title: "BoardGameCenter",
        description: "桌上遊戲大廳",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"BoardGameCenter",
      },
      {
        title: "HackMD Note",
        description: "軟工學習筆記",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"HackMD Note",
      },
      {
        title: "SKill Tree",
        description: "軟工技能樹",
        imageURL: "",
        info: "軟體工程博大精深",
        display: "",
        skill: "",
        key:"SKill Tree",
      },
      {
        title: "How's Code",
        description: "程式之家",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"How's Code",
      },
      {
        title: "How to Be SE",
        description: "軟工之路",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"How to Be SE",
      },
      {
        title: "GH-react 大成功",
        description: "0922 偉大的一天 終於上線嚕～",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"GH-react 大成功",
      },
      {
        title: "Under Construction",
        description: "施工中",
        imageURL: "",
        info: "",
        display: "",
        skill: "",
        key:"Under Construction1",
      },
    ];
    return (
      <>
        {sp_data.map((e, index) => {
          return (
              <Col key={e.key}>
                <SPCard {...e} />
              </Col>
          );
        })}
      </>
    );
  };
  //-----------------------------------------------
  const SPModal = () => {
    return (
      <Modal
        open={spModalOpen}
        onCancel={() => setSpModalOpen(false)}
        title={spModalData.title}
      >
        <div style={{ whiteSpace: "pre-line" }}>{spModalData.info}</div>
      </Modal>
    );
  };
  //-----------------------------------------------
  return (
    <div className="main_content">
      <SPModal />
      <Row>
        <Col span={18}>
          <Row justify={"space-evenly"}>
            <Col span={24}>
              <h1 style={{ textAlign: "center" }}>Side Project</h1>
            </Col>
            <SPCardGroup />
          </Row>
        </Col>
        <Col span={6}>
          <div
            style={{
              padding: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ResumeCard
              imageUrl={my_head_img}
              name="黃柏浩 ( How )"
              email="zzhowwoh.am03@g2.nctu.edu.tw"
              phone="secret..."
              address="台北市中山區"
              bio="我是How，一名全端工程師，專長於解決各式各樣的問題。"
            />
          </div>
        </Col>
      </Row>
      <SkillTree />
    </div>
  );
};

export default SideProject;
