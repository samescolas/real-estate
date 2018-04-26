import React from "react";
import styled from "styled-components";
import { Tag } from "antd";
import "antd/lib/tag/style/css";

/* 
	activeTags -- the list of tags belonging to the currently shown image.
	tags -- unique list of all tags
*/
const TagList = ({
  tags,
  activeTags,
  selectedTags,
  selectTag,
  unselectTag
}) => {
  const Container = styled.div`
    flex: 1;
  `;

  const onClick = category => {
    if (selectedTags.includes(category)) {
      unselectTag(category);
      /* Otherwise select category. */
    } else {
      selectTag(category);
    }
  };
  const getTagColor = tag => {
    let active = activeTags.includes(tag);
    let selected = selectedTags.includes(tag);

    if (selected) {
      return "green";
    } else if (active) {
      return "geekblue";
		}
		return "";
  };

  const renderTags = () => {
    return ["View All Photos", ...tags].map(category => {
      return (
        <Tag
          id={category}
          key={category}
          onClick={e => onClick(e.target.id)}
          color={getTagColor(category)}
          style={{ minWidth: "auto", width: "auto" }}
        >
          {category}
        </Tag>
      );
    });
  };

  return (
    <Container>
      {/*<small>Features filters</small>
      <br />*/}
      {renderTags()}
    </Container>
  );
};

export default TagList;
