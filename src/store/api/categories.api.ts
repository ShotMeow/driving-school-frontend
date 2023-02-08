import { api } from "@/store/api/api";
import { CategoryType } from "@/types/category.types";

export const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryType[], { search?: string }>({
      query: (arg) => ({
        url: `/categories`,
        params: { search: arg.search }
      }),
      forceRefetch: () => true,
      providesTags: ["Category"]
    }),
    createCategory: builder.mutation<CategoryType, string>({
      query: (category) => ({
        url: "/categories/create",
        method: "PUT",
        params: { category: category }
      }),
      invalidatesTags: ["Category"]
    }),
    changeCategory: builder.mutation<
      CategoryType,
      { categoryId: number; value: string }
    >({
      query: (args) => ({
        url: "/categories/change",
        method: "PATCH",
        params: { categoryId: args.categoryId, value: args.value }
      }),
      invalidatesTags: ["Category"]
    }),
    deleteCategory: builder.mutation<CategoryType, number>({
      query: (categoryId) => ({
        url: "/categories/delete",
        method: "DELETE",
        params: { categoryId: categoryId }
      }),
      invalidatesTags: ["Category"]
    })
  })
});
