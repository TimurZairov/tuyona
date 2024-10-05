import {apiSlice} from './apiSlice';

const feedbackSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProviderFeedback: builder.query({
      query: id => `/service-providers/${id}/reviews/`,
    }),
    leaveFeedback: builder.mutation({
      query: ({token, feedback}) => {
        return {
          url: `/user-reviews/`,
          method: 'Post',
          headers: {
            Authorization: 'Bearer ' + token,
          },
          body: {
            service_provider: feedback.providerId,
            rating: feedback.rating.toString(),
            comment: feedback.comment,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {useLeaveFeedbackMutation, useGetProviderFeedbackQuery} =
  feedbackSlice;
