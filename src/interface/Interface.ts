import { RefObject } from "react";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface DefaultValue {
  id: number;
  description: string;
}

export interface DefaultSignUpData {
  username: string;
  name: string;
  password: string;
  phone_number: string;
  email: string;
  gender: string;
  is_coach: boolean;
  group: number;
}
export interface SignUpData extends DefaultSignUpData {
  passwordConfirm: string;
}

/**coach인증 user데이터 */
export interface userValue {
  name: string;
  email: string;
  phone_number: string;
}
export interface CoachDefaultData extends DefaultSignUpData {
  groupFile: userValue[];
}

export interface CoachSignUpData extends DefaultSignUpData {
  passwordConfirm: string;
  groupFile: [];
}

export interface User {
  avatar: any;
  email: string;
  is_coach: boolean;
  name: string;
  username: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface CommentData extends DefaultValue {
  created_at: string;
  commentlikeCount: number;
}

export interface FeedData extends DefaultValue {
  user: User;
  group: { pk: number; name: string; members_count: number };
  title: string;
  visited: number;
  created_at: string;
  comments_count: number;
  // highest_like_comments: [
  //   {
  //     id: number;
  //     description: string;
  //     created_at: string;
  //     commentlikeCount: number;
  //   }
  // ];
  highest_like_comments: [CommentData];
  is_liked: boolean;
  like_count: number;
  thumbnail: any;
  category: { id: number; name: string };
}
export interface FeedDetail extends CommentData {
  user: User;
  group: { pk: number; name: string; members_count: number };
  category: { id: number; name: string };
  title: string;
  visited: number;
  created_at: string;
  like_count: number;
  comments_count: number;
  comment: [CommentData];
  highest_like_comments: [
    {
      id: number;
      user: {
        username: string;
        name: any;
        email: string;
        avatar: any;
        is_coach: boolean;
      };
      description: string;
      created_at: string;
      commentlikeCount: number;
    }
  ];
  is_like: boolean;
  thumbnail: any;
}

export interface comment {
  id: number;
  created_at: string;
  description: string;
  user: string;
  feed: string;
}

export interface FormValue {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone_number: string;
  email: string;
  gender: string;
  group: number;
  groupFile: [];
}

export interface CropAttribute {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PostFeed {
  title: string;
  description: string;
  category: number;
  file: File[];
}

export interface Message {
  title: string;
  content: string;
  date: Date;
}

export interface SidebarProps {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
}

// export interface dropDownProps {
//   dropDown: boolean;
// }

export interface ListItem {
  id: number;
  title: string;
  link: string;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export type Note = {
  id: number;
  title: string;
  content: string;
  date: Date;
};

export interface MockUser {
  name: string;
  avatar: string;
  isMe: boolean;
}

export interface MockCont {
  id: number;
  user: MockUser;
  content: string;
  time: string;
}

export interface TabMenu {
  icon: IconDefinition;
  size: SizeProp;
  text: string;
  tabName: string;
  activeTab: string;
  onClick: (tabName: string) => void;
}

export interface Letterlists {
  id: number;
  create_at: any;
  update_at: any;
  sender: number;
  receiver: number;
}
