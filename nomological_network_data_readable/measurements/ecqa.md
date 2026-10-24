# ECQA
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across papers, ECQA is most commonly treated as a commonsense question-answering dataset or benchmark that requires models to answer questions and provide explanations. Definitions differ in how they expand the name, including Explainable CommonsenseQA, Explanations from Commonsense Knowledge Acquisition, and Explanation-based Commonsense Question Answering. One paper additionally describes it as a knowledge QA dataset with chain-of-thought reasoning, while another uses it as source data for constructing fine-tuning datasets.

**What it is claimed to measure.** Papers link ECQA to one construct and one behavioral indicator. The prevailing use is to measure commonsense reasoning, with papers describing it as used for explainable commonsense reasoning and including it in commonsense evaluations; a smaller use treats it as measuring question answering by adopting its test split for evaluation. These claims concentrate on commonsense reasoning and question answering rather than spanning many targets.

**Space of uses.** Most papers position ECQA as an evaluation set, either as a benchmark or through its test split. No measurement instrument is linked to it, but papers use it alongside HellaSwag, QASC, OpenbookQA, and StrategyQA in multi-benchmark evaluation, and one paper uses ECQA to construct two fine-tuning datasets for proxy models.

## Sources

**[Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)**
> The Explainable CommonsenseQA dataset, which requires models to not only answer commonsense questions but also provide explanations for their answers.

## Relationships

### → ECQA
- **Commonsense reasoning** (constructs) — *measured_by*
  > ECQA (Aggarwal et al., 2021) for explainable commonsense reasoning (Section 3.1)
  - [Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
