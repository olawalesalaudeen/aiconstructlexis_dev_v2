# RealToxicityPrompts
**Type:** Measurement  
**Referenced in:** 32 papers  
**Also known as:** REALTOXICITYPROMPTS, Real Toxicity Prompts, RealToxicity, Real-Toxicity-Prompts, RealToxicPrompts, RealToxicityPrompts Benchmark  

## State of the Field

**What it is.** Across papers, the prevailing usage treats RealToxicityPrompts as a prompt dataset or benchmark for eliciting toxic generations or toxic completions from language models. Definitions most often describe prompts likely to trigger toxic outputs, with variants calling them naturally occurring prompts, web-derived sentence-level or incomplete prompts, and in one paper seemingly benign or neutral prompts that can still induce harmful content. Papers also describe multiple versions or slices: toxic and non-toxic prompts, a challenge or challenging subset of 1,199 prompts, 10K non-toxic prompts sampled from the dataset, and one adapted use of a 100,000-prompt collection for sentiment, toxicity, and counterfactual fairness under gendered inputs.

**What it is claimed to measure.** Papers use it most often to measure Toxicity, and more occasionally to measure Safety and Harmlessness; overall, it is linked to 3 constructs and 1 behavioral indicator. The dominant measurement claim is that model toxicity is evaluated by prompting models with RealToxicityPrompts and scoring the resulting continuations, with papers also reporting it as a safety evaluation and, in one line of work, as a harmlessness evaluation through harmful content generated on the prompts. Harmful content generation is also measured by it in some papers, and one paper claims a causal relationship from RealToxicityPrompts to harmful content generation, describing its prompts as known to induce toxic language generation.

**Space of uses.** In use, papers commonly treat it as a benchmark for text continuation or sentence completion, often by sampling subsets rather than running the full collection, such as 1k prompts, 10K prompts, toxic and non-toxic splits, or the challenge or challenging subset. A recurring pairing is ToxiGen, while smaller uses place it alongside BOLD, SafeEdit, TruthfulQA, and AbstainQA. Papers link it to 1 other measurement instrument, Perspective API, and descriptions also mention scoring outputs with Perspective API metrics such as Expected Maximum Toxicity and Toxicity Probability, or with Detoxify.

## Sources

**[Get more for less: Principled Data Selection for Warming Up Fine-Tuning in LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/b36dc39b319ba6ba2a0fd7601951efb4-Paper-Conference.pdf)**
> A prompt set used to elicit toxic generations from language models for toxicity evaluation.

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "REALTOXICITYPROMPTS")**
> A dataset of text prompts designed to be likely to elicit toxic generations from language models.

**[Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf) (as "RealToxicity")**
> A dataset used to evaluate the toxicity of generated text, providing a score based on the likelihood of the text being perceived as toxic.

**[Bi-Factorial Preference Optimization: Balancing Safety-Helpfulness in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ad77a15531fbccefa8be5e434b4b7908-Paper-Conference.pdf) (as "Real Toxicity Prompts")**
> A dataset of prompts from the web that are likely to elicit toxic generations from language models.

**[Gender Inclusivity Fairness Index (GIFI): A Multilevel Framework for Evaluating Gender Diversity in Large Language Models](https://aclanthology.org/2025.acl-long.128.pdf) (as "Real-Toxicity-Prompts")**
> A dataset containing 100,000 prompts used to evaluate toxicity in language models, subsetted and adapted for assessing sentiment, toxicity, and counterfactual fairness under gendered inputs.

**[Beyond Prompt Engineering: Robust Behavior Control in LLMs via Steering Target Atoms](https://aclanthology.org/2025.acl-long.1139.pdf) (as "RealToxicPrompts")**
> A dataset of seemingly benign or neutral prompts designed to induce large language models to generate toxic or harmful content.

**[Beyond the Safety Bundle: Auditing the Helpful and Harmless Dataset](https://aclanthology.org/2025.naacl-long.596.pdf) (as "RealToxicityPrompts Benchmark")**
> Benchmark for evaluating toxicity in model outputs by prompting models with potentially toxic inputs and measuring whether they generate toxic completions.

## Relationships

### → RealToxicityPrompts
- **Toxicity** (constructs) — *measured_by*
  > We then prompt all models with “I don’t care if this is controversial” and a prompt from RealToxicityPrompts (Gehman et al., 2020).
  - [Model Merging by Uncertainty-Based Gradient Matching](https://proceedings.iclr.cc/paper_files/paper/2024/file/327b9b8d4e45c3f81568e11ffc505f77-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > We randomly sample 1k prompts from the non-toxic prompts of the REALTOXICITYPROMPTS (Gehman et al., 2020), which was designed to elicit toxic responses. (Section 4.3)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > Finally, we report safety evaluations on RealToxicity (Gehman et al., 2020) and TruthfulQA (Lin et al., 2022). (Section 7.2)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > For harmlessness, we follow (Li et al., 2024b) and utilize metrics ... to examine the harmful content generated on RealToxicityPrompts (Gehman et al., 2020). (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)

### Associated with
- **Perspective API** (measurements)
  > “For toxicity evaluation, we utilize the PERSPECTIVE API (Lees et al., 2022) for REALTOXICITYPROMPTS”
  - [Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf)
