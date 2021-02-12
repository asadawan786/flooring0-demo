import CheckSquareOutlined from '@ant-design/icons/lib/icons/CheckSquareOutlined';
import SettingOutlined from '@ant-design/icons/lib/icons/SettingOutlined';
import BarChartOutlined from '@ant-design/icons/lib/icons/BarChartOutlined';
import React from 'react';
import TagsOutlined from '@ant-design/icons/lib/icons/TagsOutlined';

export const MENU = [
  {
    type: 'subMenu',
    title: 'Products',
    key: 'sub1',
    Icons: <TagsOutlined />,
    children: [
      { key: 'flooring', title: 'Flooring', link: '/flooring' },
      { key: 'wall', title: 'Wall', link: '/wall' }
    ]
  },
  {
    type: 'link',
    title: 'Scenes',
    key: 'scene',
    link: '/scene',
    Icons: <CheckSquareOutlined />,
    children: []
  },
  {
    type: 'subMenu',
    title: 'Settings',
    key: 'sub2',
    Icons: <SettingOutlined />,
    children: [
      { key: 'general', title: 'General', link: '/general' },
      { key: 'subscription', title: 'Subscription', link: '/subscription' }
    ]
  },
  {
    type: 'subMenu',
    title: 'Analytics',
    key: 'sub3',
    Icons: <BarChartOutlined />,
    children: [
      { key: 'option1', title: 'option 1', link: '/option1' },
      { key: 'option2', title: 'option 2', link: '/option2' }
    ]
  }
];
export const HEADER = {
  ADMIN: 'admin',
  PROFILE: 'admin',
  TITLE: 'Roomovo',
  LOGOUT: 'Logout'
};
export const FOOTER = {
  COPY_RIGHT: ' ©2020 Created by Room Simulator'
};

export const FLOORING_MAIN = {
  TITLE: 'Flooring',
  TABS_CHILD: {
    TAB_ONE: {
      title: 'draft 5',
      key: 'tab1'
    },
    TAB_TWO: {
      title: 'publish 18',
      key: 'tab2'
    }
  }
};

export const FLOORING_SEARCH = {
  ADD_NEW: 'Add New',
  FILTER: {
    LABEL: 'Filter',
    DEFAULT_VALUE: 'option1',
    OPTION: [
      {
        value: 'option1',
        title: 'option 1'
      },
      {
        value: 'option2',
        title: 'option 2'
      },
      {
        value: 'option3',
        title: 'option 3'
      },
      {
        value: 'option4',
        title: 'option 4'
      }
    ]
  },
  SORT: {
    LABEL: 'Sort By',
    DEFAULT_VALUE: 'option1',
    OPTION: [
      {
        value: 'option1',
        title: 'option 1'
      },
      {
        value: 'option2',
        title: 'option 2'
      },
      {
        value: 'option3',
        title: 'option 3'
      },
      {
        value: 'option4',
        title: 'option 4'
      }
    ]
  }
};
export const SCENE_MAIN_BUTTONS = [
  {
    title: 'All',
    key: 'all'
  },
  {
    title: 'Kitchen',
    key: 'kitchen'
  },
  {
    title: 'Living Room',
    key: 'living-room'
  },
  {
    title: 'Bathroom',
    key: 'bathroom'
  },
  {
    title: 'Bedroom',
    key: 'bedroom'
  },
  {
    title: 'Office',
    key: 'office'
  }
];
