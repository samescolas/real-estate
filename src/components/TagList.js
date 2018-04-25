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
    //console.log("CLICKED ON ", category, "!");
    if (category === "View All Photos") {
      /* If All is already selected */
      if (selectedTags.includes("View All Photos")) {
        ////console.log("Unselecting 'All'...");
        unselectTag("View All Photos");
        /* User selected 'All', which was not already active. */
      } else {
        //console.log("Selecting 'All'...");
        selectTag("View All Photos");
      }
      /* If category is already selected, unselect it. */
    } else if (selectedTags.includes(category)) {
      //console.log("Unselecting ", category, "...");
      unselectTag(category);
      /* Otherwise select category. */
    } else {
      //console.log("Selecting ", category, "...");
      selectTag(category);
    }
  };
  const getTagColor = tag => {
    let active = activeTags.includes(tag);
    let selected = selectedTags.includes(tag);

    if (selected && active) {
      return "gold";
    } else if (selected) {
      return "green";
    } else if (active) {
      return "geekblue";
    } else {
      return "";
    }
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
