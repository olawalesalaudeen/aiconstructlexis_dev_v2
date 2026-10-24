# News categorization
**Type:** Behavior  
**Referenced in:** 3 papers  
**Also known as:** News classification  

## State of the Field

**Space of definitions.** Across the papers, the common framing is assigning predefined labels to news articles based on their textual content. The papers agree on the classification setup but differ in the label scheme: one uses general category or topic labels, while another narrows the task to selected articles that are filtered for relevance to a time series and then categorized by impact duration, such as "long-term" and "short-term", or by type of influence, sometimes with a rationale.

**Variants.** Papers use both "news classification" and "news categorization" for this behavior. The main variants described are topic-style labeling and impact-oriented categorization tied to time-series analysis, where categorization can be guided by either automatically generated logic or given reasoning logic.

**Space of elicitation and scores.** Only one measurement instrument is linked, AG News. In that use, the behavior is elicited with an instruction to categorize a news article into one of four categories, "World, Sports, Business, Sci/Tech"; no other instrument is linked.

**What it is taken as evidence of.** No construct is linked to this behavior, so the surveyed papers do not explicitly treat it as evidence of a named construct.

## Sources

**[From News to Forecast: Integrating Event Analysis in LLM-Based Time Series Forecasting with Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/6aef8bffb372096ee73d98da30119f89-Paper-Conference.pdf)**
> The task of classifying selected news articles into predefined categories, such as their impact duration (long-term vs. short-term) or type of influence.

**[Breaking Physical and Linguistic Borders: Multilingual Federated Prompt Tuning for Low-Resource Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e9034dd5420660d86c8c360c35a895e-Paper-Conference.pdf) (as "News classification")**
> The task of assigning a predefined category or topic label to a news article based on its textual content.

## Relationships

### News categorization →
- **AG News** (measurements) — *measured_by*
  > instruction: Categorize the news article into one of the 4 categories: World,Sports,Business,Sci/Tech. (Appendix B.1)
  - [Vaccine: Perturbation-aware Alignment for Large Language Models against Harmful Fine-tuning Attack](https://proceedings.neurips.cc/paper_files/paper/2024/file/873c86d9a979ab80d8e2919510d4446b-Paper-Conference.pdf)
