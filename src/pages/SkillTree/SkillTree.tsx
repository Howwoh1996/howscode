import React from "react";
import { Tree } from "antd";
import { DataNode } from "antd/lib/tree";

const { TreeNode } = Tree;

const skillData: DataNode[] = [
  {
    title: "HTML",
    key: "html",
  },
  {
    title: "CSS",
    key: "css",
    children: [
      {
        title: "SASS/SCSS",
        key: "sass-scss",
      },
      {
        title: "Bootstrap",
        key: "bootstrap",
      },
      {
        title: "Ant Design",
        key: "ant-design",
      },
    ],
  },
  {
    title: "JavaScript",
    key: "javascript",
    children: [
      {
        title: "React",
        key: "react",
      },
      {
        title: "TypeScript",
        key: "typescript",
      },
      {
        title: "GraphQL",
        key: "graphql",
      },
    ],
  },
  {
    title: "Database",
    key: "database",
    children: [
      {
        title: "MongoDB",
        key: "mongodb",
      },
      {
        title: "SQL",
        key: "sql",
        children: [
          {
            title: "MySQL",
            key: "mysql",
          },
        ],
      },
    ],
  },
  {
    title: "APIs",
    key: "apis",
    children: [
      {
        title: "RESTful APIs",
        key: "restful-apis",
      },
    ],
  },
  {
    title: "Package Managers",
    key: "package-managers",
    children: [
      {
        title: "npm/yarn",
        key: "npm-yarn",
      },
    ],
  },
  {
    title: "Version Control",
    key: "version-control",
    children: [
      {
        title: "Git",
        key: "git",
      },
      {
        title: "GitHub/GitLab",
        key: "github-gitlab",
      },
      {
        title: "Bitbucket",
        key: "bitbucket",
      },
    ],
  },
  {
    title: "Containerization",
    key: "containerization",
    children: [
      {
        title: "Docker",
        key: "docker",
      },
      {
        title: "Kubernetes",
        key: "kubernetes",
      },
    ],
  },
  {
    title: "Cloud",
    key: "cloud",
    children: [
      {
        title: "Azure",
        key: "azure",
      },
      {
        title: "Firebase",
        key: "firebase",
      },
    ],
  },
  {
    title: "Authentication",
    key: "authentication",
    children: [
      {
        title: "JWT (JSON Web Tokens)",
        key: "jwt",
      },
    ],
  },
  {
    title: "Languages",
    key: "languages",
    children: [
      {
        title: "Python",
        key: "python",
      },
    ],
  },
  {
    title: "Backend Framework",
    key: "backend-framework",
    children: [
      {
        title: "FastAPI",
        key: "fastapi",
      },
    ],
  },
];

const SkillTree: React.FC = () => {
  return (
    <Tree
      defaultExpandAll
      showLine
      treeData={skillData}
      onSelect={(selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
        // 在此處添加更多的事件處理，例如顯示該技能的詳細資訊等
      }}
    />
  );
};

export default SkillTree;
