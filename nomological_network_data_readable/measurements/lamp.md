# LaMP
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across papers, LaMP is treated as a benchmark or dataset for short-form personalization evaluation. The prevailing descriptions frame it around short-form personalized text generation, including tasks such as news headline generation, scholarly title generation, and tweet paraphrasing, while another description presents it as a public LLM personalization benchmark with named subsets, LaMP-1 through LaMP-5, covering citation identification, movie tagging, Amazon product rating, news headline generation, and scholarly title generation, and says these tasks test surface-level personalization on short-context queries. A broader framing in another paper describes LaMP as consisting of various text classification and generation tasks.

**What it is claimed to measure.** Papers use LaMP to measure 4 behavioral indicators and no constructs. The linked behavioral indicators are headline generation, scholarly title generation, text classification, and text generation, so the recorded uses are spread across several task types rather than converging on any linked construct. In the more task-specific descriptions, papers explicitly tie it to the headline and scholarly title generation subsets, while a broader usage treats it as measuring various text classification and generation tasks.

**Space of uses.** Papers position LaMP as a public personalization benchmark included in evaluation setups. One paper uses it alongside LongLaMP, with LaMP described as covering short-form personalized text generation and LongLaMP covering long-form personalized text generation.

## Sources

**[Personalized Text Generation with Contrastive Activation Steering](https://aclanthology.org/2025.acl-long.353.pdf)**
> The LaMP benchmark is a dataset designed for evaluating short-form personalized text generation across tasks like news headline generation, scholarly title generation, and tweet paraphrasing.

## Relationships

### → LaMP
- **Headline generation** (behaviors tasks) — *measured_by*
  > "Specifically, we include LaMP-1 (citation identification), LaMP-2 (movie tagging), LaMP-3 (Amazon product rating), LaMP-4 (news headline generation) and LaMP-5 (scholarly title generation)"
  - [PRIME: Large Language Model Personalization with Cognitive Dual-Memory and Personalized Thought Process](https://aclanthology.org/2025.emnlp-main.1711.pdf)
- **Scholarly title generation** (behaviors tasks) — *measured_by*
  > "Specifically, we include LaMP-1 (citation identification), LaMP-2 (movie tagging), LaMP-3 (Amazon product rating), LaMP-4 (news headline generation) and LaMP-5 (scholarly title generation)"
  - [PRIME: Large Language Model Personalization with Cognitive Dual-Memory and Personalized Thought Process](https://aclanthology.org/2025.emnlp-main.1711.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > "LaMP benchmark consisting of various text classification and generation tasks"
  - [Personalized Language Models via Privacy-Preserving Evolutionary Model Merging](https://aclanthology.org/2025.emnlp-main.1747.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > "LaMP benchmark consisting of various text classification and generation tasks"
  - [Personalized Language Models via Privacy-Preserving Evolutionary Model Merging](https://aclanthology.org/2025.emnlp-main.1747.pdf)
