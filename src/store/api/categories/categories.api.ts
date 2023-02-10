import { api } from "@/store/api/api";
import { CategoryType } from "@/store/api/categories/categories.types";

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], { search?: string }>({
      query: (args) => ({
        url: `/categories`,
        params: { search: args.search }
      }),
      providesTags: ["Category"]
    }),
    getCategoryById: builder.query<CategoryType, { categoryId: number }>({
      query: (args) => `/categories/${args.categoryId}`,
      providesTags: ["Category"]
    }),
    createCategory: builder.mutation<CategoryType, { value: string }>({
      query: (args) => ({
        url: `/categories/create`,
        method: "PUT",
        body: { value: args.value }
      }),
      invalidatesTags: ["Category"]
    }),
    updateCategory: builder.mutation<
      CategoryType,
      { categoryId: number; value: string }
    >({
      query: (args) => ({
        url: `/categories/${args.categoryId}`,
        method: "PATCH",
        body: { value: args.value }
      }),
      invalidatesTags: ["Category", "Group"]
    }),
    deleteCategory: builder.mutation<CategoryType, { categoryId: number }>({
      query: (args) => ({
        url: `/categories/${args.categoryId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Category", "Group"]
    })
  })
});
