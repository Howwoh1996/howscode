import React from 'react';
import { Tree } from 'antd';
import {
  Html5TwoTone, CloudTwoTone, GithubOutlined, DatabaseTwoTone
} from '@ant-design/icons';

const { TreeNode } = Tree;

const SkillTree = () => {
  return (
    <Tree
      showIcon
      defaultExpandAll
      style={{ width: '300px', margin: '50px auto' }}
    >
      <TreeNode title={<span style={{ color: '#E44D26' }}>HTML</span>} key="html" icon={<Html5TwoTone />} />
      <TreeNode title={<span style={{ color: '#0170BA' }}>CSS</span>} key="css" icon={<Html5TwoTone />}>
        <TreeNode title="SASS/SCSS" key="sass-scss" />
        <TreeNode title="Bootstrap" key="bootstrap" />
        <TreeNode title="Ant Design" key="ant-design" />
      </TreeNode>
      <TreeNode title={<span style={{ color: '#F7DF1E' }}>JavaScript</span>} key="javascript" icon={<Html5TwoTone />}>
        <TreeNode title="React" key="react" />
        <TreeNode title="TypeScript" key="typescript" />
        <TreeNode title="GraphQL" key="graphql" />
      </TreeNode>
      <TreeNode title="Database" key="database" icon={<DatabaseTwoTone />}>
        <TreeNode title="MongoDB" key="mongodb" />
        <TreeNode title="SQL" key="sql">
          <TreeNode title="MySQL" key="mysql" />
        </TreeNode>
      </TreeNode>
      <TreeNode title="Version Control" key="version-control" icon={<GithubOutlined />}>
        <TreeNode title="Git" key="git" />
        <TreeNode title="GitHub/GitLab" key="github-gitlab" />
        <TreeNode title="Bitbucket" key="bitbucket" />
      </TreeNode>
      <TreeNode title="Containerization" key="containerization" icon={<CloudTwoTone />}>
        <TreeNode title="Docker" key="docker" />
        <TreeNode title="Kubernetes" key="kubernetes" />
      </TreeNode>
      <TreeNode title="Cloud" key="cloud" icon={<CloudTwoTone />}>
        <TreeNode title="Azure" key="azure" />
        <TreeNode title="Firebase" key="firebase" />
      </TreeNode>
      <TreeNode title="Languages" key="languages" icon={<CloudTwoTone />}>
        <TreeNode title="Python" key="python" />
      </TreeNode>
      <TreeNode title="Backend Framework" key="backend-framework" icon={<CloudTwoTone />}>
        <TreeNode title="FastAPI" key="fastapi" />
      </TreeNode>
    </Tree>
  );
};

export default SkillTree;
