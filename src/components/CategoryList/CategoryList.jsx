import React from "react";
import { useSelector } from "react-redux";

// --- COMPONENTS --- //
import CategoryPill from "../CategoryPill/CategoryPill";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- SX STYLES --- //
import { sxCategoryChipContent, sxCategoryList } from "../sxStyles";

function CategoryList() {
  const categories = useSelector((store) => store.categories);
  categories.sort();

  return (
    <Box id="categoryList" sx={sxCategoryList}>
      <Typography color="primary" variant="h4">
        Select Some Categories
      </Typography>

      <Box id="categoryChipContent" sx={sxCategoryChipContent}>
        <CategoryPill category="All" value="All" />
        <CategoryPill category="None" value="None" />
        {categories?.map((category, i) => (
          <CategoryPill key={i} category={category.category} value={category.category} />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
