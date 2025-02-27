import { Link } from 'react-router-dom';
import { IPost } from '../api/types';
import Tag from './Tag';
import styled from '@emotion/styled';

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;
  overflow: hidden;
  transition: border 0.2s ease 0s;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  text-decoration: none;
`;

const Contents = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PostListItem = (props: IPost) => {
  return <div>{/*todo (3-2) 게시글 목록 아이템 작성*/}</div>;
};

export default PostListItem;
