import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupVersionsInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    },
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};