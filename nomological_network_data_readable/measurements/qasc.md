# QASC
**Type:** Measurement  
**Referenced in:** 17 papers  

## State of the Field

**What it is.** Across papers, the prevailing description treats QASC as a question-answering benchmark or dataset for science questions that require multi-step or multi-hop reasoning, often by integrating, composing, or reasoning over multiple facts from multiple sentences. Some authors instead place it under commonsense reasoning or multiple-choice comprehension, one definition says it provides questions and associated facts, and another expands the name as "Question Answering via Sentence Composition". A smaller line of work also presents it as an elementary science or scientific reasoning benchmark.

**What it is claimed to measure.** Papers link QASC to 1 construct and 1 behavioral indicator. The prevailing measurement claim is that it measures Question answering, with papers using it for evaluation or fine-tuning under that label; a smaller line of work reports it as measuring Commonsense reasoning by including it among commonsense QA datasets. The reported measurement uses are therefore concentrated on those two targets rather than spread across many constructs or indicators.

**Space of uses.** Papers commonly present QASC as one dataset in broader evaluation suites. It is often used alongside StrategyQA and OpenBookQA or OBQA, and in some cases with CommonsenseQA or CSQA, WikiQA, and QuaRTz, with several other QA datasets appearing in particular studies. Beyond general question answering, papers also place it in scientific reasoning, cross-lingual transfer, model merging, process reward modeling, and forgetting experiments.

## Sources

**[DQ-LoRe: Dual Queries with Low Rank Approximation Re-ranking for In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/b3875605f2e35714fc8a807cadf8a5e8-Paper-Conference.pdf)**
> Question-answering dataset requiring multi-step reasoning and integration of scientific facts from multiple sentences.

## Relationships

### → QASC
- **Question answering** (behaviors tasks) — *measured_by*
  > In question answering, we adopt the test splits of ECQA (Aggarwal et al., 2021), QASC (Khot et al., 2020), OpenbookQA (Mihaylov et al., 2018), and StrategyQA (Geva et al., 2021) for evaluation. (Section 4)
  - [Bridging and Modeling Correlations in Pairwise Data for Direct Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/d41760ec1e2db105e63e98393648c763-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > we evaluate on eight widely utilized commonsense QA datasets: CommonsenseQA (Talmor et al., 2019), OpenBookQA (Mihaylov et al., 2018), ARC-Easy and ARC-Challenge (Clark et al., 2018), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2020), CommonsenseQA 2.0 (Talmor et al., 2021), and QASC (Khot et al., 2020). (Section 4.2)
  - [Connecting the Knowledge Dots: Retrieval-augmented Knowledge Connection for Commonsense Reasoning](https://aclanthology.org/2025.emnlp-main.1203.pdf)
