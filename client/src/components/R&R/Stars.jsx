import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating(props) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={props.num}
        precision={0.1}
        readOnly
      />
    </Stack>
  );
}
