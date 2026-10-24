# BARTScore
**Type:** Measurement  
**Referenced in:** 9 papers  
**Also known as:** BART Score  

## State of the Field

Across the provided literature, BARTScore is predominantly characterized as a model-based evaluation metric used to assess the quality of generated text. Its core mechanism, as described in multiple papers, involves leveraging a pre-trained BART model to calculate a score based on generation probability, such as the conditional or average likelihood of the output text. The most common application described is as an automated procedure for comparing generated chain-of-thought rationales against "manually created golden references." Papers use BARTScore to operationalize several constructs, including general `Output quality`, `Faithfulness`, and `Coherence`, with one study using it to measure "semantic coherence" in argument structures. It is applied to evaluate tasks such as `Text summarization` and question answering. While most sources treat it as a reference-based metric, one paper notes its use "without human annotations," and another describes its function as providing "pseudo ground-truth" for output quality. In evaluation contexts, BARTScore is frequently studied alongside other metrics like BERTScore, BLEURT, and human judgments.

## Sources

**[PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)**
> An automated evaluation procedure used to compare generated chain-of-thought rationales against manually created golden references.

**[Are Generative Models Underconfident? Better Quality Estimation with Boosted Model Probability](https://aclanthology.org/2025.emnlp-main.166.pdf) (as "BART Score")**
> A reference-based metric that uses the probability assigned by a BART model to the output given the input as a proxy for quality, used here as pseudo ground-truth for summarization and QA.

## Relationships

### → BARTScore
- **Text generation quality** (constructs) — *measured_by*
  > "we use the BART score (Yuan et al., 2021) to evaluate response quality of different models" (Section 2.3)
  - [Hybrid LLM: Cost-Efficient and Quality-Aware Query Routing](https://proceedings.iclr.cc/paper_files/paper/2024/file/b47d93c99fa22ac0b377578af0a1f63a-Paper-Conference.pdf)
- **Reasoning faithfulness** (constructs) — *measured_by*
  > "The evaluation assessed BARTScore, CTC, BLURT, and human-evaluated faithfulness scores."
  - [Reasoning Aware Self-Consistency: Leveraging Reasoning Paths for Efficient LLM Sampling](https://aclanthology.org/2025.naacl-long.184.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > "Coherence →BARTScore (Yuan et al., 2021)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)

### Associated with
- **BERTScore** (measurements)
  > It has been shown that BARTScore outperforms other metrics such as BERTScore and BLEURT (Yuan et al., 2021) (Section 3.1).
  - [Learning to Substitute Words with Model-based Score Ranking](https://aclanthology.org/2025.naacl-long.576.pdf)
- **BLEURT** (measurements)
  > It has been shown that BARTScore outperforms other metrics such as BERTScore and BLEURT (Yuan et al., 2021) (Section 3.1).
  - [Learning to Substitute Words with Model-based Score Ranking](https://aclanthology.org/2025.naacl-long.576.pdf)
