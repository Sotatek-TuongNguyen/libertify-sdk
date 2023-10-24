import { baseQuerySplitApi as api } from "./baseQueryApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    auditPortfolioPortfolioAuditPost: build.mutation<
      AuditPortfolioPortfolioAuditPostApiResponse,
      AuditPortfolioPortfolioAuditPostApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolio/audit`,
        method: "POST",
        body: queryArg.auditRequest,
      }),
    }),
    optimizePortfolioPortfolioOptimizePost: build.mutation<
      OptimizePortfolioPortfolioOptimizePostApiResponse,
      OptimizePortfolioPortfolioOptimizePostApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolio/optimize`,
        method: "POST",
        body: queryArg.optimizationRequest,
      }),
    }),
    generateOrdersPortfolioOrdersPost: build.mutation<
      GenerateOrdersPortfolioOrdersPostApiResponse,
      GenerateOrdersPortfolioOrdersPostApiArg
    >({
      query: (queryArg) => ({
        url: `/portfolio/orders`,
        method: "POST",
        body: queryArg.orderRequest,
      }),
    }),
    getCategoriesFundsCategoriesGet: build.query<
      GetCategoriesFundsCategoriesGetApiResponse,
      GetCategoriesFundsCategoriesGetApiArg
    >({
      query: () => ({ url: `/funds/categories` }),
    }),
    optimizeFundsOptimizeGet: build.query<
      OptimizeFundsOptimizeGetApiResponse,
      OptimizeFundsOptimizeGetApiArg
    >({
      query: (queryArg) => ({
        url: `/funds/optimize`,
        body: queryArg.diversificationRequest,
      }),
    }),
    startRiskAssessmentStartPost: build.mutation<
      StartRiskAssessmentStartPostApiResponse,
      StartRiskAssessmentStartPostApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_assessment/start`,
        method: "POST",
        body: queryArg.riskAssemmentStartRequest,
      }),
    }),
    answerRiskAssessmentAnswerPost: build.mutation<
      AnswerRiskAssessmentAnswerPostApiResponse,
      AnswerRiskAssessmentAnswerPostApiArg
    >({
      query: (queryArg) => ({
        url: `/risk_assessment/answer`,
        method: "POST",
        body: queryArg.riskAssemmentAnswerRequest,
      }),
    }),
    getRiskProfileRiskAssessmentUserIdGet: build.query<
      GetRiskProfileRiskAssessmentUserIdGetApiResponse,
      GetRiskProfileRiskAssessmentUserIdGetApiArg
    >({
      query: (queryArg) => ({ url: `/risk_assessment/${queryArg.userId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as libertifyApi };
export type AuditPortfolioPortfolioAuditPostApiResponse =
  /** status 200 Successful Response */ AuditResponse;
export type AuditPortfolioPortfolioAuditPostApiArg = {
  auditRequest: AuditRequest;
};
export type OptimizePortfolioPortfolioOptimizePostApiResponse =
  /** status 200 Successful Response */ OptimizationResponse;
export type OptimizePortfolioPortfolioOptimizePostApiArg = {
  optimizationRequest: OptimizationRequest;
};
export type GenerateOrdersPortfolioOrdersPostApiResponse =
  /** status 200 Successful Response */ OrderResponse;
export type GenerateOrdersPortfolioOrdersPostApiArg = {
  orderRequest: OrderRequest;
};
export type GetCategoriesFundsCategoriesGetApiResponse =
  /** status 200 Successful Response */ CategoriesResponse;
export type GetCategoriesFundsCategoriesGetApiArg = void;
export type OptimizeFundsOptimizeGetApiResponse =
  /** status 200 Successful Response */ DiversificationResponse;
export type OptimizeFundsOptimizeGetApiArg = {
  diversificationRequest: DiversificationRequest;
};
export type StartRiskAssessmentStartPostApiResponse =
  /** status 200 Successful Response */ RiskAssemmentResponse;
export type StartRiskAssessmentStartPostApiArg = {
  riskAssemmentStartRequest: RiskAssemmentStartRequest;
};
export type AnswerRiskAssessmentAnswerPostApiResponse =
  /** status 200 Successful Response */ RiskAssemmentResponse;
export type AnswerRiskAssessmentAnswerPostApiArg = {
  riskAssemmentAnswerRequest: RiskAssemmentAnswerRequest;
};
export type GetRiskProfileRiskAssessmentUserIdGetApiResponse =
  /** status 200 Successful Response */ UserRiskProfile;
export type GetRiskProfileRiskAssessmentUserIdGetApiArg = {
  userId: string;
};
export type AuditResponse = {
  risk_level: number;
  risk_value: number;
  risk_period: "month";
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type AssetClass = "Crypto" | "Equity" | "Forex";
export type PortfolioItem = {
  ticker: string;
  quantity: number;
};
export type Portfolio = {
  composition: PortfolioItem[];
};
export type AuditRequest = {
  asset_class: AssetClass;
  currency: string;
  portfolio: Portfolio;
};
export type OptimizationResponse = {
  optimized_portfolio: Portfolio;
  current_risk_level: number;
  current_risk_value: number;
  optimized_risk_level: number;
  optimized_risk_value: number;
  risk_period: "month";
};
export type OptimizationRequest = {
  asset_class: AssetClass;
  currency: string;
  portfolio: Portfolio;
  user_id: string;
};
export type Order = {
  order_id: string;
  ticker: string;
  action: "BUY" | "SELL";
  total_quantity: number;
  order_type: "LIMIT" | "MARKET";
  limit_price: number;
  time_in_force: "DAY";
  date: string;
};
export type OrderResponse = {
  orders: Order[];
};
export type OrderRequest = {
  from_portfolio: Portfolio;
  to_portfolio: Portfolio;
  user_id: string;
};
export type SubCategory = {
  sub_category_id: string;
  category_name: {
    [key: string]: string;
  };
};
export type Category = {
  category_id: string;
  category_name: {
    [key: string]: string;
  };
  subcategories: SubCategory[];
};
export type CategoriesResponse = {
  categories: Category[];
};
export type DiversificationResponse = {
  optimized_portfolio: Portfolio;
  current_risk_level: number;
  current_risk_value: number;
  optimized_risk_level: number;
  optimized_risk_value: number;
  risk_period: "month";
};
export type DiversificationCategory = {
  category_id: string;
  amount: number;
};
export type DiversificationRequest = {
  portfolio: Portfolio;
  categories: DiversificationCategory[];
  user_id: string;
};
export type Question = {
  question_id: string;
  question: {
    [key: string]: string;
  };
  response_type: "MCQ" | "INT";
  response_range: (string | number)[];
};
export type RiskAssemmentResponse = {
  risk_assessment_id: string;
  next_question: Question;
};
export type RiskAssemmentStartRequest = {
  user_id: string;
};
export type RiskAssemmentAnswerRequest = {
  risk_assessment_id: string;
  question_id: string;
  answer: string | number;
};
export type UserRiskProfile = {
  risk_category: string;
  risk_category_name: string;
};
export const {
  useAuditPortfolioPortfolioAuditPostMutation,
  useOptimizePortfolioPortfolioOptimizePostMutation,
  useGenerateOrdersPortfolioOrdersPostMutation,
  useGetCategoriesFundsCategoriesGetQuery,
  useOptimizeFundsOptimizeGetQuery,
  useStartRiskAssessmentStartPostMutation,
  useAnswerRiskAssessmentAnswerPostMutation,
  useGetRiskProfileRiskAssessmentUserIdGetQuery,
} = injectedRtkApi;
