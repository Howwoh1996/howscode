// ResumeCard.tsx
import React from "react";
import { Card, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface ResumeCardProps {
  imageUrl?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
}

const ResumeCard: React.FC<ResumeCardProps> = (props) => {
  const { imageUrl, name, email, phone, address, bio } = props;

  return (
    <Card style={{ width: 300 }}>
      <Avatar size={64} src={imageUrl} icon={!imageUrl && <UserOutlined />} />
      <Title level={2} style={{ marginTop: 10 }}>
        {name}
      </Title>
      <Paragraph>
        <strong>Email:</strong> {email}
      </Paragraph>
      <Paragraph>
        <strong>Phone:</strong> {phone}
      </Paragraph>
      <Paragraph>
        <strong>Address:</strong> {address}
      </Paragraph>
      <Paragraph>{bio}</Paragraph>
    </Card>
  );
};

export default ResumeCard;
